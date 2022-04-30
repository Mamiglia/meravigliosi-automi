<script setup lang="ts" >
import Sidemenu from "./components/Sidemenu.vue";
import Footbar from './components/Footbar.vue';
import { networkGraphConfigs } from "./assets/v-network-graph-configs";
import { Nodes, Edges } from "v-network-graph"
import { ref,reactive,computed} from "vue";
import { Automaton, unreactiveCopy } from "./assets/Automaton"

const nodes : Nodes = reactive({
  0: { name: "Node 0" },
  1: { name: "Node 1" },
  2: { name: "Node 2" },
  3: { name: "Node 3" },
});
const edges : Edges = reactive({
  edge1: { source: "0", target: "1" },
  edge2: { source: "1", target: "2" },
  edge3: { source: "2", target: "3" },
});
const selectedNodes = ref<string[]>([]);
const selectedEdge = ref<string[]>([]);
const nextEdgeIndex = ref(Object.keys(edges).length + 1);
const initialNode = ref("0");
const finalNodes = ref<string[]>(["3"]);
const automata = computed(()=>new Automaton(
  unreactiveCopy(nodes), 
  unreactiveCopy(edges), 
  initialNode.value, 
  unreactiveCopy(finalNodes.value),
  []
  ))

function addNode() {
  // currently nodeID can be assigned to an already existing ID, causing problems
  let size = Object.keys(nodes).length
  nodes[size] = {
    name: String(size)
  }
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


function addEdge() {
  // currently edgeID can be assigned to an already existing ID, causing problems
  if (selectedNodes.value.length !== 2) return
  let [source, target] = selectedNodes.value
  //let edgeId  = edges.length
  let edgeId = 'edge${nextEdgeIndex.value}'
  edges[edgeId] = { source, target }
  nextEdgeIndex.value++
}

function validate(text:string,options:Object){
  console.log(`validate: ${text}`,options);
  console.log(automata.value.toString());
}
</script>

<template>
<Sidemenu/>
<div>
  <v-network-graph 
    :nodes="nodes" 
    :edges="edges" 
    :configs="networkGraphConfigs"
    v-model:selected-edges="selectedEdge"
    v-model:selected-nodes="selectedNodes"/>
  <Footbar
    @validate="(text:string,options:Object)=>validate(text,options)"
    @addNode="addNode()"
    @remove ="remove"
    @addEdge="addEdge"
  />
  <!-- @validate="automata.validate"
    @addNode="automata.addNode"
    @addEdge="automata.addEdge"
    @remove="automata.removeSelected" -->
</div>

</template>

<style>
@import "./assets/base.css";

</style>
