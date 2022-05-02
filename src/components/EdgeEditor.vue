
<!-- Umile tentativo -->

<template>
    <div class="edgeEditor">
        <input type="radio" value="ALL" nane="ruleType" v-model="ruleType">
        <p>Tutto l'alfabeto</p> 
        <input type="radio" value="INCLUDE" name="ruleType" v-model="ruleType">
            <input type="text" placeholder="Caratteri da includere" :disabled="ruleType!='INCLUDE'">
        <input type="radio" value="EXCLUDE" name="ruleType" v-model="ruleType"> 
            <input type="text" placeholder="Caratteri da escludere" :disabled="ruleType!='EXCLUDE'">
    </div>
</template>

<script setup lang="ts">
    import {ref} from "vue"
    import {AutEdge} from "../assets/Automaton"

    const ruleType = ref<String>("ALL");
    
    const props = defineProps<{
    modelValue: AutEdge;    
    }>()
    

    //Assumo che ogni arco abbia i seguenti campi:
    //label: l'etichetta mostrata all'utente
    //ruleType: una striga che indica se la regola dell'arco è di tipo All, Include o Exclude
    //charset: un array di stringhe (caratteri) da includere (nel caso include) o escludere (nel caso esclude)
    //La seguente funzione prende i dati dalla form e setta opportunamente i tre campi.
    
    /*function updateLabel(){
        ??.ruleType = edgeLabelForm.ruleType
        if(edgeLabelForm.ruleType==="All"){
            ??.label = "*";
        }
        elif(edgeLabelForm.ruleType==="Include"){
            temp = "";
            for (let c of edgeLabelForm.charset){
                temp = temp + c + ", ";
            }
            temp = temp.slice(-1); //rimuove la virgola finale
            ??.label = temp;
            ??.charset = edgeLabelForm.charset;
        }
        elif(edgeLabelForm.ruleType==="Exlude"){
            temp = "- ";
            for (let c of edgeLabelForm.charset){
                temp = temp + c + ", -";
            }
            temp = temp.slice(-3); //rimuove il ", -" in coda
            ??.label = temp;
            ??.charset = edgeLabelForm.charset;
        }
        else{
            log.console("Error: edgeLabelForm.ruleType unrecognized");
        }
        return;
    }*/

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