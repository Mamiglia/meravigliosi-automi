<!--TO DO
rendere il testo mostrato parametrico
fare in modo che spawni all'occorrenza (dopo evaluate e altro)
fare in modo la action lo chiuda
-->

<template>
    <div class="popup">
        <div class="popup-inner">
            <h3>Ciao, un giorno soppianterò quegli anonimi alert del browser</h3>
            <Action icon="done"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import Action from './Action.vue'

</script>

<style scoped>
    .popup {
        background-color: var(--background-alternative);
        position:fixed;
        top: 1vh;
        right: 35vw;
        left: 35vw;
        z-index: 99;
        padding: .3em;
        padding-top: .2em;
        border: solid;
        border-color: var(--accent);
        border-radius: 1em;
        max-width: 30vw;
        max-height: 25vh;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .popup-inner{
        position: relative;
        background: var(--background-alternative);
        max-width: 29vw;
        max-height: 24vh;
    }
    h3 {
        text-align: center;
    }
    p {
        display: inline-block;
    }

</style>