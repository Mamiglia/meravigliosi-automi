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
    import {ref, computed, watch} from "vue"
    import {AutEdge} from "../assets/Automaton"

    const emits = defineEmits(["update:modelValue"]);
    const props = defineProps<{
        modelValue: AutEdge;    
    }>()

    const ruleType = ref<"ALL"|"INCLUDE"|"EXCLUDE">(props.modelValue.ruleType);

    const textInclude = ref(props.modelValue.charset.join(","));
    const textExclude = ref(props.modelValue.charset.join(","));


    const charset = computed(()=>{
        if (ruleType.value === "INCLUDE"){
            return textInclude.value.replaceAll(/\s/g,"").split(",");
        }
        else if(ruleType.value === "EXCLUDE"){
            return textExclude.value.replaceAll(/\s/g,"").split(",");
        }
        else{
            return [];
        }
    })

    const label = computed(()=>{
        if (ruleType.value === "INCLUDE"){
            return charset.value.toString();
        }
        else if(ruleType.value === "EXCLUDE"){
            return "¬" + charset.value.join(", ¬");
        }
        else{
            return "*";
        }
    })

    const edge = computed<AutEdge>( () => {
        return{
            source: props.modelValue.source,
            target: props.modelValue.target,
            label: label.value,
            ruleType: ruleType.value,
            charset: charset.value
        }
    })

    watch(edge,async(newEdge) => {
        emits("update:modelValue", newEdge);
    })

</script>

<style scoped>
    div {
        background-color: red;
        color: black;
        position:fixed;
        top: 0;
        right: 0;
    }
</style>