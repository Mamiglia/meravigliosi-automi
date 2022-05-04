<script setup lang="ts">
import Action from './Action.vue'
import { unreactiveCopy } from '@/assets/Automaton'
import { computed, ref , defineEmits, reactive} from 'vue'


const emits = defineEmits(["addNode", "remove", "addEdge", "validate", "update:modelValue"])

type Options = {
    animated: Boolean,
    determinism: Boolean,
    alphabet: String[]
}

const props = defineProps<{
    modelValue: Options    
}>()

const options = reactive<Options>(props.modelValue)

function handlderInput() {
    emits("update:modelValue", options);
}
</script>

<template>
<div id="footer">
    <div class="popupMenu">
        <Action icon="settings"/>
        <div class="settings">
            <div class="section">
                <label for="alphabetInput">
                    Alfabeto:
                </label>
                <input type="textarea" id="alphabetInput" placeholder="Inserisci qui l'alfabeto"  @input="updateValue('alphabet', alphabetModel)" v-model="alphabetInput">
            </div>
            
            <div class="section">
                <label for="determinismCheckbox">Determinstic Automa</label>
                <Toggle id="determinismCheckbox" class="toggle" @change="updateValue('determinism', determinismModel)" v-model="determinismModel" on-label="on" off-label="off"/>
            </div>
            <div class="section">
                <label for="animateCheckbox">Animate Evaluation</label>
                <Toggle id="animateCheckbox" class="toggle" @change="updateValue('animated', animatedModel)" v-model="animatedModel" on-label="on" off-label="off"/>
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
@import '@vueform/toggle/themes/default.css';
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

.section {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.toggle {
    margin-left: 1em;
    --toggle-bg-on: var(--accent);
    --toggle-bg-off: var(--background);
    --toggle-text-on: var(--color-text);
    --toggle-text-off: var(--color-text);
    --toggle-handle-enabled: var(--background-alternative);
    --toggle-ring-color: transparent;
    --toggle-border-on: transparent;
    --toggle-border-off: transparent;
    --toggle-border-on: transparent;
    --toggle-border-off: transparent;
    --toggle-width: 4rem;
}
</style>
