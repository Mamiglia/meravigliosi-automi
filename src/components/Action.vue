<template>
<button class='btn'>
    {{text}}
</button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    text: String,
    icon: String
})

</script>

<style scoped>
button {
    aspect-ratio: 1/1;
    height: 100%;
    max-height: 20vh;
    background-color: var(--color-background-mute);
    border-style: none;
    transition: background var(--fast-animation) ease;
}
button:hover {
    background-color: var(--accent);
    color: var(--color-background-mute);
    cursor: pointer;
}
</style>