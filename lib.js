import * as vNG from "v-network-graph"
import data from "./data"

function checkSuccess(nodes){
    for (node of nodes){
        if(node è finale??){
            return true;
        }
    }
    return false;
}

function checkContains(myNode, nodes){
    for (node of nodes){
        if (node==myNode){
            return true;
        }
    }
    return false;
}

function checkTransition(myString, path){
    //todo in base al path
    return false;
}

function evaluate(automaton, myString){
    //devo chiamare un costruttore per trasformare i dati in automa?
    nodes = Array(automaton.nodes[0]);                   //assumendo che la radice sia il primo nodo di nodes
    return ricorsiveEvaluate(automaton, nodes, myString); //nodes è l'insieme dei nodi "attivi", inizialmente la sola radice
}

//A ogni ricorsione viene consumato un carattere di myString e
//la vecchia lista di nodi "attivi" viene completamente sostituita con i nodi raggiunti.
//Se l'automa è a stati finiti la lista conterrà sempre un solo nodo.
//Con un check si può usare quest'ultimo fatto anche per verificare che il automaton in input
//rappresenti effettivamente un automa a stati finiti.
//Ho provato a usare il commento multiriga ma ho fallito :)
function ricorsiveEvaluate(automaton, nodes, myString){
    if (myString==""){                               //caso base
        if(checkSucces(nodes)){            //se nodes contiene uno stato finale
            return true;
        }
        return false;
    }
    newNodes = Array();
    for(edge of automaton.edges){
        if(checkContains(edge.source, nodes) and checkTransition(edge) and not checkContains(edge.target, newNodes)){
            newNodes.push(edge.target);    //aggiungo il nodo di arrivo di edge a newNodes

    }
    newString = myString.slice(1);
    return ricorsiveEvaluate(automaton, newNodes, newString);
}