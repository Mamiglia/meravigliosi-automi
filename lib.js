import * as vNG from "v-network-graph"
import data from "./data"

class automaton{
    nodes
    edges

    constructor(){ //Da controllare se aggiungere i nodi così ha senso
        const myNodes = Array()
        const myEdges = Array()
        for (node of data.nodes) {
            myNodes.push(node)
        }
        for (edge of data.edges) {
            myEdges.push(edge)
        }
        this.nodes = myNodes
        this.edges = myEdges
    }

    toString(){
        print("NODES: ")
        for (node of nodes){
            print(node.name)
        }
        print("EDGES: ")
        for (edge of edges){
            print("Source: ",edge.source, " Target: ", edge.target, " Label: ",edge.label)
        }

    }

    //ausiliaria per evaluate
    checkSuccess(nodes){
        for (node of nodes){
            if(node è finale??){    //to do
                return true
            }
        }
        return false
    }

    //ausiliaria per evaluate
    checkContains(myNode, myNodes){
        for (node of myNodes){
            if (node==myNode){
                return true
            }
        }
    }

    //ausiliaria per evaluate
    checkTransition(myString, path){
        //todo
        return false
    }

    evaluate(myString){
        const myAutomaton = new Automaton()
        myNodes = Array(myAutomaton.nodes[0])                    //assumendo che la radice sia il primo nodo di nodes
        return ricorsiveEvaluate(myAutomaton, myNodes, myString) //nodes è l'insieme dei nodi "attivi", inizialmente la sola radice
    }

    //A ogni ricorsione viene consumato un carattere di myString e
    //la vecchia lista di nodi "attivi" viene completamente sostituita con i nodi raggiunti.
    //Se l'automa è a stati finiti la lista conterrà sempre un solo nodo.
    //Con un check si può usare quest'ultimo fatto anche per verificare che il automaton in input
    //rappresenti effettivamente un automa a stati finiti.
    //Ho provato a usare il commento multiriga ma ho fallito :)
    ricorsiveEvaluate(myAutomaton, myNodes, myString){
        if (myString==""){                               //caso base
            if(checkSucces(myNodes)){                    //se nodes contiene uno stato finale
                return true
            }
            return false
        }
        const newNodes = Array();
        for(edge of myAutomaton.edges){
            if( checkContains(edge.source, myNodes) && checkTransition(edge) && !checkContains(edge.target, newNodes) ){
                newNodes.push(edge.target)    //aggiungo il nodo di arrivo di edge a newNodes

        }
        const newString = myString.slice(1)
        return ricorsiveEvaluate(myAutomaton, newNodes, newString);
    }

}

//const, var, let