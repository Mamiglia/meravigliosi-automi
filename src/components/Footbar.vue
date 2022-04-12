<script>
import Action from './Action.vue'

export default {
    name: "foot-bar",
    components : {
        Action
    },

}
</script>

<template>
<div id="footer">
    <Action text="+" :func="addNode"/>
    <Action text="-" :func="addEdge"/>
    <input type="text" placeholder="Inserisci la stringa da validare">
    <Action text=">" :func="validate"/>
</div>
</template>

<style scoped>
#footer {
    height: 10vh;
    display: flex;
    justify-content: space-around;
    width: 100vw;
    position: absolute;
    z-index: 1;
    left:0;
    bottom:0;
    top:auto;
}
</style>
