<script setup lang="ts" >
import { ref,reactive,computed,watch} from "vue";
import Sidemenu from "./components/SideMenu.vue";
import Footbar from './components/FootBar.vue';
import EdgeEditor from "./components/EdgeEditor.vue";
import NodeEditor from "./components/NodeEditor.vue";
import { Transition, Nodes, Edges, Parameters } from "./assets/types";
import { Automaton } from "./assets/Automaton";
import { unreactiveCopy, toClipboard, importParameters, downloadAsSvg, zip} from "./assets/utilities";
import { networkGraphConfigs, palette } from "./assets/predefined";
import * as vNG from "v-network-graph"

const initialParams :Parameters = importParameters(window.location.search);
const nodes : Nodes = reactive(initialParams.nodes);
const edges : Edges = reactive(initialParams.edges);
const selectedNodes = ref<string[]>([]);
const selectedEdge = ref<string[]>([]);
const nextNodeIndex = ref(Object.keys(nodes).length )
const nextEdgeIndex = ref(Object.keys(edges).length );
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
  console.log("remove")    
  //delete selected nodes
  for (let nodeId of selectedNodes.value) {
    delete nodes[nodeId]
  }

  for (let edgeID of selectedEdge.value) {
    delete edges[edgeID]
  }
}

function addEdge(src:string, trgt?:string) {
  // currently edgeID can be assigned to an already existing ID, causing problems
  // let edgeId  = edges.length
  if (trgt==undefined)
    trgt = src
  let edgeId = `edge${nextEdgeIndex.value}`

  let newEdge :Transition = {
    source:src,
    target:trgt,
    label: "*",
    ruleType: "ALL",
    charset: [],
  }
  edges[edgeId] = newEdge
  nextEdgeIndex.value++
}

function validate(text:string){
  console.log(`validate: ${text}`);
  console.log(automata.value.toString());
  console.log(animated);
  console.log(automata.value.evaluate(text, animated.value, determinism.value));
}

function startTutorial(){
  console.log(automata.value.randomWalk())
  console.log(`Tutorial starts`);
}

function graphString(p :Parameters) : string{
    /* parameters:
    - nodes
    - edges
    - initialNode
    - alphabet
    - determinism
    - layout
  */
  return encodeURI(zip(p))
}
function share(params :Parameters) {
  let url = window.location.hostname + ":" + window.location.port + "?graph=" + graphString(params)
  toClipboard(encodeURI(url));
}
function save(params:Parameters, graph: vNG.VNetworkGraphInstance) {
  sessionStorage.setItem('graph', graph.getAsSvg())
  window.location.href = `http://localhost:3000/public/save.php?graph=${graphString(params)}}`;
}

watch(params,()=>{
  localStorage.setItem("graph", graphString(params.value))
})

</script>

<template>
<Sidemenu
  @startTutorial = "startTutorial()"
/>
<div>
  <div id="worksheet">
    <v-network-graph 
      ref="graph"
      :nodes="nodes" 
      :edges="edges" 
      :configs="networkGraphConfigs"
      :layouts="initialParams.layout"
      v-model:selected-edges="selectedEdge"
      v-model:selected-nodes="selectedNodes"
      >
      <defs>
        <component :is="'style'">{{palette}}</component>
      </defs>
      <template #edge-label="{ edge, ...slotProps }">
        <v-edge-label :text="edge.label" color="#fbfaf5" align="center" vertical-align="above" v-bind="slotProps"/>
      </template>
    </v-network-graph>
    <EdgeEditor v-if="selectedEdge.length !== 0" :edgeId="selectedEdge[0]" v-model="edges[selectedEdge[0]]" />
    <NodeEditor v-else-if="selectedNodes.length === 1" :node-id="selectedNodes[0]" v-model="nodes[selectedNodes[0]]"/>
    <!--<Popup v-if="selectedEdge.length === 0 && selectedNodes.length === 0" /> Questa riga andrà rimossa/cambiata-->

  </div>
  <Footbar
    @validate="(text:string)=>validate(text)"
    @addNode="addNode()"
    @remove="remove"
    @addEdge="addEdge(selectedNodes[0], selectedNodes[1])"
    @save="save(params, graph)"
    @share="share(params)"
    @download-s-v-g="downloadAsSvg(graph)"
    v-model:determinism="determinism"
    v-model:alphabet="alphabet"
    v-model:animated="animated"
    v-model:start="initialNode"
    :nodes="nodes"
  />
</div>

</template>

<style>
@import "./assets/base.css";

#worksheet {
  height: 90vh;
  width: 100%;
}
</style>
