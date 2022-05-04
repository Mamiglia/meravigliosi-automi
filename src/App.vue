<script setup lang="ts" >
import Sidemenu from "./components/Sidemenu.vue";
import Footbar from './components/Footbar.vue';
import { networkGraphConfigs } from "./assets/v-network-graph-configs";
import { Nodes, Edges } from "v-network-graph"
import { ref,reactive,computed, onMounted} from "vue";
import { AutEdge,Automaton, unreactiveCopy } from "./assets/Automaton"
import EdgeEditor from "./components/EdgeEditor.vue"

const nodes : Nodes = reactive({});
const edges : Edges = reactive({});
const selectedNodes = ref<string[]>([]);
const selectedEdge = ref<string[]>([]);
const nextEdgeIndex = ref(Object.keys(edges).length + 1);
const initialNode = ref("0");
const finalNodes = ref<string[]>(["4"]);
const options = reactive({
  alphabet: "a,c",
  determinism: true,
  animated: true
});
const automata = computed(()=>new Automaton(
  unreactiveCopy(nodes), 
  unreactiveCopy(edges), 
  initialNode.value, 
  unreactiveCopy(finalNodes.value),
  unreactiveCopy(options).alphabet,
  ))

function addNode() {
  // currently nodeID can be assigned to an already existing ID, causing problems
  let size = Object.keys(nodes).length
  nodes[`${size}`] = {
    name: String("Node"+" "+size)
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
  let newEdge :AutEdge = {
    source:source,
    target:target,
    label: "*",
    ruleType: "ALL",
    charset: [],
    marker: {
      target:{
        type: "circle"
      }
    }
  }
  edges[edgeId] = newEdge
  nextEdgeIndex.value++
}

function validate(text:string){
  console.log(`validate: ${text}`);
  console.log(automata.value.toString());
  console.log(automata.value.evaluate(text))
}

onMounted(()=>{
  for (let i=0;i<5;i++) {
    addNode()
  }
  for (let i=0;i<4;i++) {
    addEdge(`${i}`,`${i+1}`)
  }
})
</script>

<template>
<Sidemenu/>
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
  </div>
  <Footbar
    @validate="(text:string)=>validate(text)"
    @addNode="addNode()"
    @remove="remove"
    @addEdge="addEdge"
    v-model="options"
  />
  <!-- @validate="automata.validate"
    @addNode="automata.addNode"
    @addEdge="automata.addEdge"
    @remove="automata.removeSelected" -->
</div>

</template>

<style>
@import "./assets/base.css";

#worksheet {
  height: 90vh;
  width: 100%;
}
</style>
