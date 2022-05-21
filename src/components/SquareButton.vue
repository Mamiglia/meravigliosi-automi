<template>
<button class='btn' :is-active="active">
    <span class="material-icons" >
        {{icon}}
    </span>
</button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
    icon: String, //expects icon from https://fonts.google.com/icons?selected=Material+Icons
    active: {
        type: Boolean,
        default: false
    }
})

</script>

<style scoped>
button {
    height: 100%;
    max-width: 25vw;
    aspect-ratio: 1/1;
    max-height: 20vh;
    min-height: 7vh;
    background-color: var(--background-alternative);
    border-style: none;
    transition: background var(--fast-animation) ease;
    font-size: .1em;
}
button:hover {
    background-color: var(--accent);
    color: var(--background-alternative);
    cursor: pointer;
}
span{
    font-size: 5vh;
    transition: 
        font-size var(--fast-animation) ease,
        rotate var(--normal-animation) ease;

}
button:hover>span {
    font-size: 7vh;

}
button[is-active="true"]>span {
    rotate: 60deg;
}
</style>