<script setup lang="ts">

import { ref , defineEmits} from 'vue'
import Action from './Action.vue'

const emits = defineEmits(["startTutorial"])

const hasFocus = ref(true)

</script>

<template >
<div 
    id="sidemenu" 
    :hide="!hasFocus">

    <h1 class="title" id="title">Meravigliosi Automi</h1>
    <ul>
        <li><a href="start.html">Start</a></li>
        <li><a href="wiki.html">Wiki</a></li>
        <li><a href="https://github.com/Mamiglia/meravigliosi-automi">Source Code</a></li>
        <li><a href=".\public\hub.php">Hub</a></li> <!--Non mi trova l'hub.php-->
        <li><Action icon="skip_next" @click="$emit('startTutorial')"/></li>
       <!-- <li><a href="">Clicca qui per salvare il tuo Grafo sull'Hub</li> -->
    </ul>
    <span></span>
    <button type="button" @click="hasFocus=false" >start ></button>
</div>
<div class="menu-btn" @click="hasFocus=true">
    <button type="button" ></button>
</div>
<span class="outside" @click="hasFocus=false" :hide="!hasFocus"></span>
</template>

<style scoped>

#sidemenu {
    z-index: 3;
    background-color: var(--background-alternative);
    width: 33%;
    height: 100vh;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    transition: transform var(--normal-animation) ease;
    overflow: hidden;
    transform: translateX(0%);
}

#sidemenu[hide=true] {
    transform: translateX(-100%);
}

button {
    border: none;
    background-color: var(--background-alternative);
}
#sidemenu>span {
    height: 100%;
}
#sidemenu>button{
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.5em;
    width: 100%;
    height: 20vh;
    padding: 0;
    color: var(--background);
    background-color: var(--accent);
    transition: background var(--fast-animation) ease;
}
#sidemenu>button:hover{
    cursor: pointer;
    background-color: var(--secondary);
}

ul {
    list-style: none;
    padding: 0;
}

h1 {
    margin: 0;
    padding: 10%;

}

.menu-btn {
    width: 10vh;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background var(--fast-animation) ease;
    cursor: pointer;
    position: absolute;
    z-index:1;
}
.menu-btn>button {
    height: 30%;
    background: transparent;
    border: none;
    border-top: 2.2px solid;
    border-bottom: 2.2px solid;
    border-color: var(--color-text);
    position: relative;
    display: block;
    width: 50%;
    cursor: pointer;
    color: inherit;
    font-size: 0;
    transition: 0.35s;
    overflow-x: hidden;
}
.menu-btn>button::before , .menu-btn>button::after{
    position: absolute;
    left: 50%;
    display: block;
    width: 100%;
    height: 2px;
    background: currentColor;
    content: "";
    transition: transform var(--fast-animation);
    top: 50%;
    transform: translate(-50%, -50%);
    transform-origin: 0% 0%;
}
.menu-btn:hover{
    background-color: var(--accent);
}
.menu-btn:hover>button {
    border-color: transparent;
}
.menu-btn:hover>button::after {
    transform: translate(-50%, -50%) rotate(-30deg) scaleX(0.9);
    color: var(--background);
}
.menu-btn:hover>button::before {
    transform: translate(-50%, -50%) rotate(30deg) scaleX(0.9);
    color: var(--background);
}

.outside {
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    background-color: var(--background);
    opacity: 50%;
    backdrop-filter: blur(10px);
    transition: all var(--normal-animation) ease;
}

.outside[hide=true] {
    opacity: 0%;
    z-index: -1;
}

/*Se non piace questa disposizione, cancellare o modificare a piacimento*/
#hub {
    position: absolute;
    bottom: 275px;
    left: 120px;
    font-size: 30px;
    /*Molto incerto se questo colore vada bene con il sito*/ 
    background: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
}

</style>


