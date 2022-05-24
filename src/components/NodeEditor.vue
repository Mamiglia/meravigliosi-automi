<template>
    <div class="editor nodeEditor">
        <div class="nodeTitle">
            <h3>Node: {{name}}</h3>
        </div>
        <div class="section" >
            Name:&nbsp;<input type="text" placeholder="Nome nodo" v-model="name" @change="$emit('update:modelValue', state)">
        </div>
        <div class="section" >
            Final:&nbsp;
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


defineEmits(["update:modelValue"]);
const props = defineProps<{
    nodeId: string;
    modelValue: State;    
}>()
const final = ref(props.modelValue.final)
const name = ref(props.modelValue.name)

const state = computed<State>( () => {
    return{
        name: name.value,
        final: final.value
    }
})

watch(()=>props.nodeId, async ()=>{
    final.value = props.modelValue.final
    name.value = props.modelValue.name
})
</script>

<style scoped>
    /* .editor {
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

    @media screen and (orientation: portrait){
        .editor{
            width:auto;
            max-width: 100vw;
        }
    };

    input[type='radio'] {
        color: var(--accent);
        background-color: var(--background-alternative);
        margin: .3em;
    }
    input[type="text"]{
        background-color: var(--background-alternative  );
        border: none;
        height: 2em;
        width: 5em;
    }
    input[type="text"]:disabled{
        opacity: 50%;
    }
    .section{
        margin-bottom: .2em;
        display: flex;
        justify-content: space-between;
    }
    h3 {
        text-align: center;
    }
    p {
        display: inline-block;
    } */

</style>