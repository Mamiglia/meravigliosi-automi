<!-- Umile tentativo -->

<template>
    <form name="EdgeLabelForm" onSubmit="updateLabel()">
        Tipo di regola:
        Tutto l'alfabeto <input type="radio" name="ruleType" value="all"/>
        Includi solo alcuni caratteri <input type="radio" name="ruleType" value="include"/>
        Escludi alcuni caratteri <input type="radio" name="ruleType" value="exclude"/>
        <br>
        Caratteri da includere/escludere: <input type="textbox" name="charset"/>
        Conferma <input type="Submit"/>
    </form>
</template>

<script lang="ts">

    //Assumo che ogni arco abbia i seguenti campi:
    //label: l'etichetta mostrata all'utente
    //ruleType: una striga che indica se la regola dell'arco è di tipo All, Include o Exclude
    //charset: un array di stringhe (caratteri) da includere (nel caso include) o escludere (nel caso esclude)
    //La seguente funzione prende i dati dalla form e setta opportunamente i tre campi.
    function updateLabel(){
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
    }
</script>

<style>
</style>