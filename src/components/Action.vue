<template>
<button class='btn'>
    <span class="material-icons">
        {{icon}}
    </span>
</button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    icon: String //expects icon from https://fonts.google.com/icons?selected=Material+Icons
})

</script>

<style scoped>
button {
    aspect-ratio: 1/1;
    height: 100%;
    max-height: 20vh;
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
</style>