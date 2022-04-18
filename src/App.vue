<script>
import Sidemenu from "./components/Sidemenu.vue";
import Footbar from './components/Footbar.vue';
import { configs } from "./assets/v-network-graph-configs.js";
import { Automaton } from "./assets/Automaton"

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
      }
    }
  }
};
</script>

<template>
<Sidemenu/>
<div>
  <v-network-graph :nodes="nodes" :edges="edges" :configs="networkConfigs"/>
  <Footbar/>
</div>

</template>

<style>
@import "./assets/base.css";

</style>
