<template>
    <div class="nodeEditor">
        <div class="nodeTitle">
            <h3>Node: {{nodeId}}</h3>
        </div>
        <div class="section" >
            Name: <input type="text" placeholder="Nome nodo">
        </div>
        <div class="section" >
            <Toggle id="finalToggle" class="toggle" 
                @change="$emit('update:modelValue', state)" 
                v-model="final" on-label="on" off-label="off"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref, computed, watch, defineEmits, defineProps} from "vue"
import Toggle from "@vueform/toggle";
import {State} from "@/assets/types"


const emits = defineEmits(["update:modelValue"]);
const props = defineProps<{
    nodeId: string;
    modelValue: State;    
}>()
const final = ref(props.modelValue.final)

const state = computed<State>( () => {
    return{
        name: props.modelValue.name,
        final: final.value
    }
})

watch(()=>props.nodeId, async ()=>{
    final.value = props.modelValue.final
})




</script>

<style scoped>
    .nodeEditor {
        background-color: var(--background);
        position:fixed;
        top: 0;
        right: 0;
        padding: .3em;
        padding-top: .2em;
        border: solid;
        border-color: var(--accent);
        border-radius: 1em;
        max-width: 25vw;
    }
    input[type='radio'] {
        color: var(--accent);
        background-color: var(--background-alternative);
        margin: .3em;
    }
    input[type="text"]{
        background-color: var(--background-alternative  );
        border: none;
        height: 2em;
    }
    input[type="text"]:disabled{
        opacity: 50%;
    }
    .section{
        margin-bottom: .2em;
        display: flex;
    }
    h3 {
        text-align: center;
    }
    p {
        display: inline-block;
    }

</style>