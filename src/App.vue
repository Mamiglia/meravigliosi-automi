<script>
import Sidemenu from "./components/Sidemenu.vue";
import Footbar from './components/Footbar.vue';


export default {
  name: 'App',
  components: {
    Sidemenu,
    Footbar
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
<Sidemenu :visible="sidemenuVisibility" />
<v-network-graph :nodes="nodes" :edges="edges"/>
<Footbar/>
</template>

<style>
@import "./assets/base.css";

</style>
