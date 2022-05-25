<template>
    <div class="editor edgeEditor">
        <div class="edgeTitle">
            <h3>{{modelValue.source}} → {{modelValue.target}}</h3>
        </div>
        <div class="section" >
            <!-- <label for="ruleTypeALL">ALL</label> -->
            <p @click="ruleType='EPSILON'">&epsilon;-transition</p> 
            <input type="radio" value="EPSILON" id="ruleTypeEPSILON" name="ruleType" v-model="ruleType">
        </div>
        <div class="section" >
            <!-- <label for="ruleTypeALL">ALL</label> -->
            <p @click="ruleType='ALL'">All alphabet</p> 
            <input type="radio" value="ALL" id="ruleTypeALL" name="ruleType" v-model="ruleType" >
        </div>
        <div class="section" @click="ruleType='EXCLUDE'">
            <!-- <label for="ruleTypeEXCLUDE">EXCLUDE</label> -->
            <input type="text" placeholder="Exclude characters" :disabled="ruleType!='EXCLUDE'" @input="charsetText = $event.target.value" :pattern="csv.source">
            <input type="radio" value="EXCLUDE" id="ruleTypeEXCLUDE" name="ruleType" v-model="ruleType"> 
        </div>
        <div class="section" @click="ruleType='INCLUDE'">
            <!-- <label for="ruleTypeINCLUDE">INCLUDE</label> -->
            <input type="text" placeholder="Include characters" :disabled="ruleType!='INCLUDE'" @input="charsetText = $event.target.value" :pattern="csv.source" >
            <input type="radio" value="INCLUDE" id="ruleTypeINCLUDE" name="ruleType" v-model="ruleType">
        </div>

    </div>
</template>

<script setup lang="ts">
import {ref, computed, watch, defineEmits, defineProps} from "vue"
import {Transition} from "@/assets/types"
import { csv } from "@/assets/predefined";
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
const charset = ref(props.modelValue.charset)

const charsetText = computed<string>({
    set(val :string) {
        console.log(val)
        if (ruleType.value === "INCLUDE" && csv.test(val)){
            charset.value = parseList(val);
        }
        else if(ruleType.value === "EXCLUDE" && csv.test(val)){
            charset.value = parseList(val);
        }
        else if (ruleType.value === "ALL" || ruleType.value === "EPSILON"){
            charset.value = [];
        }
    },
    get() {
        return charset.value.toString()
    }
})

const label = computed(()=>{
    if (ruleType.value === "INCLUDE"){
        return charset.value.toString();
    }
    else if(ruleType.value === "EXCLUDE"){
        return (charset.value.length!==0)?"¬" + charset.value.join(", ¬"):"";
    } else if (ruleType.value==="EPSILON"){
        return "ε"
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

<style>
.r{}

    .editor {
        background-color: var(--background-alternative);
        position:fixed;
        top: 0;
        right: 0;
        padding: .3em;
        padding-top: .2em;
        border: solid;
        border-color: var(--background-alternative);
        border-radius: 0 0 0 1em;
        max-width: 25vw;
        min-width: min-content;
    }

   
    .editor input[type='radio'] {
        color: var(--accent);
        background-color: var(--background-alternative);
        margin: .3em;
    }
    .editor input[type="text"]{
        background-color: var(--background);
        /* border: none; */
        height: 2em;
        text-align: right;


    }
    .editor input[type="text"]:disabled{
        opacity: 50%;
        background-color: var(--background-alternative);
    }

    .editor input[type="text"]:invalid {
        text-decoration: line-through;
    }

    .editor .section{
        padding-bottom: .5em;
        display: flex;
        justify-content: right;
        gap: 1em;
    }
    .editor h3 {
        text-align: center;
        font-size: 1.5em;
        padding-bottom: .5em;
        font-weight: bold;
    }
    .editor p {
        display: inline-block;
    }

    @media screen and (orientation: portrait){
        .editor{
            width:100vw;
            max-width: 100vw;
            border-radius: 0 0 1em 1em;
            z-index: 2;
        }
        .section>input, p {
            font-size: 1.3em
        }
    };
</style>