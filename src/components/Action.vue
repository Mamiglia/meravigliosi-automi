<template>
<button class='btn' @click="func()">
    {{text}}
</button>
</template>

<script>
export default {
    name:"action-component",
    props: {
        text: String,
        func: Function,
        icon: String
    }
}
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
    cursor: pointer;
}
</style>