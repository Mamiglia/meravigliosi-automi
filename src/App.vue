<script setup lang="ts" >
import { ref,reactive,computed,watch} from "vue";
import SideMenu from "@/components/SideMenu.vue";
import FootBar from '@/components/FootBar.vue';
import EdgeEditor from "@/components/EdgeEditor.vue";
import NodeEditor from "@/components/NodeEditor.vue";
import { Transition, Nodes, Edges, Parameters } from "@/assets/types";
import { Automaton } from "@/assets/Automaton";
import { unreactiveCopy} from "@/assets/utilities";
import { graphString, downloadAsSvg } from "@/assets/graph";
import { readParams, save, share } from "@/assets/memory";
import { networkGraphConfigs, palette } from "@/assets/predefined";
import * as vNG from "v-network-graph"

const initialParams :Parameters = readParams(window.location.search);
const nodes : Nodes = reactive(initialParams.nodes);
const edges : Edges = reactive(initialParams.edges);
const selectedNodes = ref<string[]>([]);
const selectedEdge = ref<string[]>([]);
const nextNodeIndex = ref(Math.max(...Object.keys(nodes).map((k)=>parseInt(k))) + 1)
const nextEdgeIndex = ref(Math.max(...Object.keys(edges).map((k)=>parseInt(k))) + 1);
const initialNode = ref(initialParams.initial);
const alphabet = ref<string[]>(initialParams.alphabet)
const animated = ref(true)
const determinism = ref(initialParams.determinism)
const graph = ref<vNG.Instance>()
const automata = computed(()=>new Automaton(
  nodes, 
  unreactiveCopy(edges), 
  initialNode.value, 
  alphabet.value
))

const params = computed<Parameters>(()=>{
  return {
    nodes: nodes,
    edges: edges,
    alphabet: alphabet.value,
    determinism: determinism.value,
    layout: unreactiveCopy(graph.value?.currentLayouts ?? {}),
    initial: initialNode.value
  }
})

function addNode() {
  // currently nodeID can be assigned to an already existing ID, causing problems
  nodes[nextNodeIndex.value] = {
    name: String(nextNodeIndex.value),
  }

  // se l'utente sta selezionando un nodo mentre aggiunge un nodo, allora collega il nodo selelzionato e il nuovo nodo
  selectedNodes.value.forEach((id) => {
    addEdge(id, String(nextNodeIndex.value))
  })
  nextNodeIndex.value++

  //add: if node is selected during node creation, then create also an edge
}
/* removes any selected node or edge */
function remove() { 
  for (let nodeId of selectedNodes.value) {
    delete nodes[nodeId]
    for (let edgeID in edges) {
      const e = edges[edgeID]
      if (e.source == nodeId || e.target == nodeId) {
        delete edges[edgeID]
      }
    }
  }
  for (let edgeID of selectedEdge.value) {
    delete edges[edgeID]
  }
}

function addEdge(src:string, trgt?:string) {
  // currently edgeID can be assigned to an already existing ID, causing problems
  if (trgt==undefined) {
    for (let e of Object.values(edges)){
      // Each node can have only one loop
      if (src == e.target && e.source == e.target) {
        return;
      }
    }
    trgt = src
  }

  let newEdge :Transition = {
    source:src,
    target:trgt,
    label: "*",
    ruleType: "ALL",
    charset: [],
  }
  edges[nextEdgeIndex.value] = newEdge
  nextEdgeIndex.value++
}

function validate(text:string){
  console.log(`validate: ${text}`);
  console.log(automata.value.toString());
  automata.value.evaluate(text, animated.value, determinism.value);
}

function handleKeyboard(keydown: string, event:Event) {
  switch (keydown) {
    case "n":
      event.preventDefault()
      addNode();
      break;
    case "e":
      event.preventDefault()
      addEdge(selectedNodes.value[0], selectedNodes.value[1])
  }
}

// watcher: funzione eseguita 
watch(params,()=>{
  // localStorage vs sessionStorages
  localStorage.setItem("graph", graphString(params.value))
})

const eventHandlers: vNG.EventHandlers = {
    "node:contextmenu": ({node, event}) => {
      event.preventDefault()
      event.stopPropagation()
      if (selectedNodes.value.length !== 1)
        selectedNodes.value[0] = selectedNodes.value[1]
      selectedNodes.value[1] = node      
    },
    "edge:contextmenu" : ({edge, event})=>{
      event.preventDefault()
      event.stopPropagation()
      selectedEdge.value[0] = edge!      
      }
  }

</script>

<template>
<SideMenu
/>
<div>
  <div id="worksheet">
    <v-network-graph 
      ref="graph"
      :nodes="nodes" 
      :edges="edges" 
      :configs="networkGraphConfigs"
      :layouts="initialParams.layout"
      :event-handlers="eventHandlers"
      v-model:selected-edges="selectedEdge"
      v-model:selected-nodes="selectedNodes"
      tabindex="0"
      @keydown.delete="remove"
      @keydown="handleKeyboard($event.key, $event)"
      >
      <defs>
        <component :is="'style'">{{palette}}</component>
      </defs>
      <template #edge-label="{ edge, ...slotProps }">
        <v-edge-label :text="edge.label" color="#fbfaf5" align="center" vertical-align="above" v-bind="slotProps"/>
      </template>
    </v-network-graph>
    <Transition name="slide">
      <EdgeEditor v-if="selectedEdge.length === 1" :edgeId="selectedEdge[0]" v-model="edges[selectedEdge[0]]" />
      <NodeEditor v-else-if="selectedNodes.length === 1" :node-id="selectedNodes[0]" v-model="nodes[selectedNodes[0]]"/>  
    </Transition>
    </div>
  <FootBar
    @validate="(text:string)=>validate(text)"
    @addNode="addNode()"
    @remove="remove"
    @addEdge="addEdge(selectedNodes[0], selectedNodes[1])"
    @save="save(params, graph!)"
    @share="share(params)"
    @download-s-v-g="downloadAsSvg(graph!)"
    @findAMatch="automata.findAMatch()"
    v-model:determinism="determinism"
    v-model:alphabet="alphabet"
    v-model:animated="animated"
    v-model:start="initialNode"
    :nodes="nodes"
  />
  <!-- variabile! significa che la variabile non puó essere nulla -->
</div>

</template>

<style>
@import "@/assets/base.css";
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
#worksheet {
  height: 90vh;
  width: 100%;
}

.slide-enter-active,
.slide-leave-active {
  transition: 
    opacity var(--normal-animation) ease,
    transform var(--normal-animation) ease;
}


.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-3em);
}

</style>
