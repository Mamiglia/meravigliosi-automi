<script setup lang="ts" >
import { ref,reactive,computed, onMounted} from "vue";
import Sidemenu from "./components/Sidemenu.vue";
import Footbar from './components/Footbar.vue';
import EdgeEditor from "./components/EdgeEditor.vue";
import TutorialItem from "./components/TutorialItem.vue";
import NodeEditor from "./components/NodeEditor.vue";
import { Transition, Nodes, Edges } from "./assets/types";
import { Automaton } from "./assets/Automaton";
import { unreactiveCopy } from "./assets/utilities";
import { networkGraphConfigs } from "./assets/v-network-graph-configs";

const nodes : Nodes = reactive({});
const edges : Edges = reactive({});
const selectedNodes = ref<string[]>([]);
const selectedEdge = ref<string[]>([]);
const nextNodeIndex = ref(Object.keys(nodes).length )
const nextEdgeIndex = ref(Object.keys(edges).length );
const initialNode = ref("0");
const alphabet = ref<string[]>(['a','b','c'])
const animated = ref(true)
const determinism = ref(true)

const automata = computed(()=>new Automaton(
  nodes, 
  unreactiveCopy(edges), 
  initialNode.value, 
  alphabet.value
))

function addNode() {
  // currently nodeID can be assigned to an already existing ID, causing problems
  nodes[nextNodeIndex.value] = {
    name: String(nextNodeIndex.value),
    final: false
  }
  nextNodeIndex.value++
  //add: if node is selected during node creation, then create also an edge
}
/* removes any selected node or edge */
function remove() {     
  //delete selected nodes
  for (let nodeId of selectedNodes.value) {
    delete nodes[nodeId]
  }

  for (let edgeID of selectedEdge.value) {
    delete edges[edgeID]
  }
}

function addEdge(src:string, trgt:string) {
  // currently edgeID can be assigned to an already existing ID, causing problems
  let source, target 

  if (selectedNodes.value.length === 0) {
    source = src;
    target = trgt;
  } else if (selectedNodes.value.length===1) {
    source = selectedNodes.value[0];
    target = source;
  } else {
    [source,target] =  selectedNodes.value;
  }
  // let edgeId  = edges.length
  let edgeId = `edge${nextEdgeIndex.value}`
  let newEdge :Transition = {
    source:source,
    target:target,
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
  console.log(animated)
  console.log(automata.value.evaluate(text, animated.value, determinism.value))
}

function startTutorial(){
  console.log(`Tutorial starts`);
}

onMounted(()=>{
// crea il grafo iniziale
  for (let i=0;i<5;i++) {
    addNode()
  }
  for (let i=0;i<4;i++) {
    addEdge(`${i}`,`${i+1}`)
  }
  nodes[4]['final'] = true;
})
</script>

<template>
<Sidemenu
  @startTutorial = "startTutorial()"
/>
<div>
  <div id="worksheet">
    <v-network-graph 
      :nodes="nodes" 
      :edges="edges" 
      :configs="networkGraphConfigs"
      v-model:selected-edges="selectedEdge"
      v-model:selected-nodes="selectedNodes">
      <template #edge-label="{ edge, ...slotProps }">
        <v-edge-label :text="edge.label" color="#fbfaf5" align="center" vertical-align="above" v-bind="slotProps"/>
      </template>
    </v-network-graph>
    <EdgeEditor v-if="selectedEdge.length !== 0" :edgeId="selectedEdge[0]" v-model="edges[selectedEdge[0]]" />
    <NodeEditor v-else-if="selectedNodes.length === 1" :node-id="selectedNodes[0]" v-model="nodes[selectedNodes[0]]"/>
    <TutorialItem v-if="selectedEdge.length === 0 && selectedNodes.length === 0" />  <!--Questa riga andrà rimossa/cambiata-->

  </div>
  <Footbar
    @validate="(text:string)=>validate(text)"
    @addNode="addNode()"
    @remove="remove"
    @addEdge="addEdge"
    v-model:determinism="determinism"
    v-model:alphabet="alphabet"
    v-model:animated="animated"
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
