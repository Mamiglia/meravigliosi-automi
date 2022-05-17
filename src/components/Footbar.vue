<script setup lang="ts">
import { ref , defineEmits, defineProps, computed} from 'vue'
import Toggle from '@vueform/toggle'
import Action from './Action.vue'
import { parseList } from '@/assets/utilities'
import { Nodes } from '@/assets/types'

const emits = defineEmits(["addNode", "remove", "addEdge", "validate", "update:animated", "update:alphabet", "update:determinism", "update:start", 'save', 'share', 'downloadSVG'])


const props = defineProps<{
    alphabet: string[]
    determinism:boolean
    animated:boolean 
    start:string

    nodes:Nodes
}>()

const alphabetInput = ref(props.alphabet.join(','))
const alphabetModel = computed(()=>
    parseList(alphabetInput.value)
)
const determinismModel = ref(props.determinism)
const animatedModel = ref(props.animated)
const inputText= ref("")

function updateValue(variable:"animated"|"determinism"|"alphabet"|"start", value:any) {
    console.log(value)
    emits(`update:${variable}`, value)
}

</script>

<template>
<div id="footer">
    <div class="popupMenu">
        <Action icon="settings"/>
        <div class="settings">
            <div class="section">
                <label for="startNode">Nodo Iniziale</label>
                <select name="startNode" @change="updateValue('start', $event.target.value)">
                    <option v-for="n of Object.keys(nodes)" :value="n">{{nodes[n].name}}</option>
                </select>
            </div>
            <div class="section">
                <label for="alphabetInput">
                    Alfabeto:&nbsp;
                </label>
                <input type="text" id="alphabetInput" placeholder="Alfabeto"  @input="updateValue('alphabet', alphabetModel)" v-model="alphabetInput">
            </div>

            <div class="section">
                <!--Menù a tendina per scegliere il nodo iniziale-->
            </div>
            
            <div class="section">
                <label for="determinismCheckbox">Determinstic Automa</label>
                <Toggle id="determinismCheckbox" class="toggle" @change="updateValue('determinism', determinismModel)" v-model="determinismModel" on-label="on" off-label="off"/>
            </div>
            <div class="section">
                <label for="animateCheckbox">Animate Evaluation</label>
                <Toggle id="animateCheckbox" class="toggle" @change="updateValue('animated', animatedModel)" v-model="animatedModel" on-label="on" off-label="off"/>
            </div>
            <div class="section">
                <Action icon="save" @click="$emit('save')"/>
                <Action icon="share" @click="$emit('share')"/>
                <Action icon="image" @click="$emit('downloadSVG')"/> 
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
        v-model="inputText"
        @keyup.enter="$emit('validate', inputText)"> <!--v-model associa la stringa nell'input alla variabile inputText-->
    <Action icon="skip_next" @click="$emit('validate', inputText)"/> <!--emette l'evento "validate" con associata la stringa in input-->
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
    font-size: 1.3em;
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
    align-items: center;
    margin-top: .3em;
}

.section select {
    background-color: var(--background);
    border: solid;
    border-color: var(--background);
    border-radius: 3px;
    font-size: 1.2em;
}
.section input[type="text"] {
    background-color: var(--background);
    border: solid;
    border-color: var(--background);
    border-radius: 3px;
    width: 10em;
}


</style>


