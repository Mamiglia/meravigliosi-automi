<script setup lang="ts">
import Action from './Action.vue'
import { unreactiveCopy } from '@/assets/Automaton'
import { computed, ref , defineEmits } from 'vue'

const emits = defineEmits(["addNode", "remove", "addEdge", "validate"])

const animated = ref(true)
const alphabet = ref<string[]>([]);
const determinism = ref(true);
const inputText = ref("")

const options = computed(()=>{
    return {
        "animated": animated.value,
        "alphabet": unreactiveCopy(alphabet.value),
        "determinism" : determinism.value
    }
})
</script>

<template>
<div id="footer">
    <div class="popupMenu">
        <Action icon="settings"/>
        <div class="settings">
            <button>Alfabeto</button>
            <div>
                <label for="determinismCheckbox">
                    Determinstic Automa&nbsp;<input type="checkbox" id="determinismCheckbox" v-model="determinism"/>

                </label>
            </div>
            <div>
                <label for="animateCheckbox">
                    Animate Evaluation&nbsp;<input type="checkbox" id="animateCheckbox" v-model="animated"/>
                </label>
                
            </div>
            <!-- Altro? -->
        </div>
    </div>
    <Action icon="delete_forever"  @click="$emit('remove')"/>
    <Action icon="add_circle"  @click="$emit('addNode')"/>
    <Action icon="commit"  @click="$emit('addEdge')"/>
    <input 
        type="text" 
        placeholder="Inserisci la stringa da validare"
        v-model="inputText"> <!--v-model associa la stringa nell'input alla variabile inputText-->
    <Action icon="skip_next" @click="$emit('validate', inputText, options)"/> <!--emette l'evento "validate" con associata la stringa in input-->
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
    background-color: var(--background-alternative);
}

input {
    width: 100%;
    text-align: center;
    border-style: none;
    background-color: transparent;
    transition: background var(--normal-animation) ease-out;
}

input:hover{
    background-color: var(--background-alternative);
}

input:focus-visible{
    border-style: none;
}

.popupMenu {
    aspect-ratio: 1/1;
    flex-shrink: 0;
}

.popupMenu>.settings {
    position: absolute;
    bottom: 10vh;
    background-color: var(--background-alternative);
    /* border:1px solid var(--color-text); */
    display: flex;
    flex-direction: column;
    padding: .5em;
    gap: .3em;
    transition: opacity var(--fast-animation) ease, transform var(--normal-animation) ease-out;
    opacity: 0;
    transform: translateX(-100%);
    min-width: max-content;
    width: 25vw;
    
}

.popupMenu:hover>.settings {
    opacity: 100%;
    transform: translateX(0%);
}

.settings input[type="checkbox"] {
    vertical-align: middle;
    display:inline-block;
    width: min-content;
}

.settings label {
    white-space: nowrap;
    display:inline-block;
}
</style>
