<script>
import Sidemenu from "./components/Sidemenu.vue";
import Footbar from './components/Footbar.vue';
import { configs } from "./assets/v-network-graph-configs.js";
//import {ref } from "vue"
// import { Automaton } from "./assets/Automaton"



export default {
  name: 'App',
  components: {
    Sidemenu,
    Footbar
    },
  setup() {
    const networkConfigs = configs;
      
    return { networkConfigs };
  },
  data() {
    return {
      sidemenuVisibility : true,
      nodes : {
        node1: { name: "Node 1" },
        node2: { name: "Node 2" },
        node3: { name: "Node 3" },
        node4: { name: "Node 4" },
      },
      edges : {
        edge1: { source: "node1", target: "node2" },
        edge2: { source: "node2", target: "node3" },
        edge3: { source: "node3", target: "node4" },
      },
      initialNode : null,
      finalNodes: [],


    }
  },
  computed: {
    console: () => console,
    // automata: new Automaton(this.nodes, this.edges, this.initialNode, this.finalNodes),

  },
  methods: {
    addNode() {
      let size = Object.keys(this.nodes).length
      this.nodes[size] = {
        name: new String(size)
      }
    },
    remove() {
     // nodes: Nodes = reactive({ ...data.nodes })
      for (this.nodeId of this.selectedNodes.value) {
        delete this.nodes[this.nodeId]
      }
    },
    addEdge() {
      //let selectedNodes = ref<String>([])
      if (this.selectedNodes.value.length !== 2) return
      let [souce, target] = this.selectedNode.value
      let edgeId = this.nextEdgeIndex.value
      this.edges[edgeId] = {
        souce,
        target
      }
      this.nextEdgeIndex.value++
    }
  }
};
</script>

<template>
<Sidemenu/>
<div>
  <v-network-graph :nodes="nodes" :edges="edges" :configs="networkConfigs"/>
  <Footbar
    @validate="(text,options) => console.log(`validate: ${text}`,options) "
    @addNode="addNode()"
    @remove ="remove()"
    @addEdge="addEdge()"
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
