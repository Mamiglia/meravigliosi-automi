<template>
    <div class="edgeEditor">
        <div class="edgeTitle">
            <h3>From node {{modelValue.source}} to {{modelValue.target}}</h3>
        </div>
        <div class="section" >
            <input type="radio" value="ALL" id="ruleTypeALL" name="ruleType" v-model="ruleType">
            <!-- <label for="ruleTypeALL">ALL</label> -->
            <p @click="ruleType='ALL'">Tutto l'alfabeto</p> 
        </div>
        <div class="section" @dblclick="ruleType='INCLUDE'">
            <input type="radio" value="INCLUDE" id="ruleTypeINCLUDE" name="ruleType" v-model="ruleType">
            <!-- <label for="ruleTypeINCLUDE">INCLUDE</label> -->
            <input type="text" placeholder="Caratteri da includere" :disabled="ruleType!='INCLUDE'" v-model="textInclude">
        </div>
        <div class="section" @click="ruleType='EXCLUDE'">
            <input type="radio" value="EXCLUDE" id="ruleTypeEXCLUDE" name="ruleType" v-model="ruleType"> 
            <!-- <label for="ruleTypeEXCLUDE">EXCLUDE</label> -->
            <input type="text" placeholder="Caratteri da escludere" :disabled="ruleType!='EXCLUDE'" v-model="textExclude">
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref, computed, watch, defineEmits, defineProps, onMounted} from "vue"
import {Transition} from "@/assets/types"
import { parseList } from "@/assets/utilities";

const emits = defineEmits(["update:modelValue"]);
const props = defineProps<{
    edgeId: string;
    modelValue: Transition;    
}>()

const ruleType = ref<Transition["ruleType"]>("ALL");
const textInclude = ref("");
const textExclude = ref("");
updateModel()


const charset = computed(()=>{
    console.log('charset computation', textInclude.value, textExclude.value)
    if (ruleType.value === "INCLUDE"){
        return parseList(textInclude.value);
    }
    else if(ruleType.value === "EXCLUDE"){
        return parseList(textExclude.value);
    }
    else{
        return [];
    }
})

const label = computed(()=>{
    console.log('label computation', charset.value)

    if (ruleType.value === "INCLUDE"){
        return charset.value.toString();
    }
    else if(ruleType.value === "EXCLUDE"){
        return (charset.value.length!==0)?"¬" + charset.value.join(", ¬"):"";
    }

    return "*";

})

const edge = computed<Transition>( () => {
    return{
        source: props.modelValue.source,
        target: props.modelValue.target,
        label: label.value,
        ruleType: ruleType.value,
        charset: charset.value
    }
})

function updateModel() {
    ruleType.value = props.modelValue.ruleType
    if (props.modelValue.ruleType === 'INCLUDE'){
        textInclude.value = props.modelValue.charset.join(",")
        textExclude.value = ""
    } else {
        textExclude.value = props.modelValue.charset.join(",")
        textInclude.value = ""
    }
        console.log(props.edgeId, props.modelValue)

}

watch(label,async() => {
    emits("update:modelValue", edge.value);
})
watch(()=>props.edgeId,async () => {
    updateModel()
})

</script>

<style scoped>
    .edgeEditor {
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