

<template>
    <div class="edgeEditor">
        <input type="radio" value="ALL" nane="ruleType" v-model="ruleType">
        <p>Tutto l'alfabeto</p> 
        <input type="radio" value="INCLUDE" name="ruleType" v-model="ruleType">
            <input type="text" placeholder="Caratteri da includere" :disabled="ruleType!='INCLUDE'" v-model="textInclude">
        <input type="radio" value="EXCLUDE" name="ruleType" v-model="ruleType"> 
            <input type="text" placeholder="Caratteri da escludere" :disabled="ruleType!='EXCLUDE'" v-model="textExclude">
    </div>
</template>

<script setup lang="ts">
    import {ref, computed, watch} from "vue"
    import {AutEdge} from "../assets/Automaton"

    const emits = defineEmits(["update:modelValue"]);

    const ruleType = ref<"ALL"|"INCLUDE"|"EXCLUDE">("ALL");

    const textInclude = ref("");
    const textExclude = ref("");

    const props = defineProps<{
    modelValue: AutEdge;    
    }>()

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