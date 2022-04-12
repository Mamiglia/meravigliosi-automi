//import * as vNG from "v-network-graph"
import data from "./data"

class automaton{

    constructor(){ //Da controllare se aggiungere i nodi così ha senso
        const myNodes = Array();
        const myEdges = Array();
        for (node of data.nodes) {
            myNodes.push(node);
        }
        for (edge of data.edges) {
            myEdges.push(edge);
        }
        this.nodes = myNodes;
        this.edges = myEdges;
    }

    toString(){
        ris = "";
        ris += "NODES: ";
        for (node of nodes){
            ris += node.name;
            ris += " ";
        }
        ris += "\n";
        ris += "EDGES: (Source, Target, Label) ";
        for (edge of edges){
            ris += edge.source;
            ris += edge.target;
            ris += edge.label;
            ris += "\n";
        }
        return ris;
    }

    isSuccess(node){
        if (true){ //to do
            return true;
        }
        return false;
    }

    //ausiliaria per evaluate
    checkSuccess(myNodes){
        for (node of myNodes){
            if(isSuccess(node)){
                return true;
            }
        }
        return false;
    }

    //ausiliaria per evaluate
    checkContains(myNode, myNodes){
        for (node of myNodes){
            if (node==myNode){
                return true;
            }
        }
    }

    //ausiliaria per evaluate
    checkTransition(myString, path){
        //todo
        return false;
    }

    evaluate(myString){
        const myAutomaton = new Automaton();
        myNodes = Array(myAutomaton.nodes[0]);                    //assumendo che la radice sia il primo nodo di nodes
        return ricorsiveEvaluate(myAutomaton, myNodes, myString); //nodes è l'insieme dei nodi "attivi", inizialmente la sola radice
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
                return true;
            }
            return false;
        }
        const newNodes = Array();
        for(edge of myAutomaton.edges){
            if( checkContains(edge.source, myNodes) && checkTransition(edge) && !checkContains(edge.target, newNodes) ){
                newNodes.push(edge.target);    //aggiungo il nodo di arrivo di edge a newNodes

        }
        const newString = myString.slice(1)
        return ricorsiveEvaluate(myAutomaton, newNodes, newString);
    }

    //ausiliaria per toRegex
    isATarget(node){
        for (edge of edges){
            if (edge.target == a){ //da vedere come controllare l'uguaglianza
                return true;
            }
            return false
        }
    }

    //ausiliaria per toRegex
    checkAcceptinStates(){
        //to do, sotto alcune ipotesi si potrebbe iterare solo sugli archi
        //deve anche controllare che ci sia almeno uno stato finale e se non c'è la cosa va gestita
    }
  
    //ausiliaria per toRegex
    addNewEnd(){
        var newEnd = //nuovo nodo di successo
        this.nodes.push(newEnd);
        for (node of this.nodes){
            if(this.isSuccess(node)){
                //TO DO: rendilo non di successo
                var newEdge = //arco da node a newEnd con transizione vuota
                this.nodes.push(newEdge);
            }
        }
    }

    //ausiliaria per toRegex
    hasLoop(node){
        for (edge of this.edges){
            if(edge.source == node && edge.source==node){
                return //edge.transition
            }
        }
        return ""; //assumendo che nell'automa non ci siano cappi con transizioni nulle
    }

    //Seguendo lo state elimination method
    toRegex(){
        var a = Automaton();
        if(isSuccess(a.nodes[0]) || isATarget(a.nodes[0])){ //sempre immaginando che la radice sia il primo nodo
            newStart = //classe nodo?
            a.nodes.unshift(newStart) //aggiunge in testa
            newEdge = //arco da newStart a vecchio inizio con una transizione vuota
            a.edges.push(newEdge)
        }
        if(!checkAcceptingState()){
            a.addNewEnd();
        }
        for(let i = 1; i<a.nodes.length-1; i++){ //itera escludendo nodo inizale e nodo finale
            var transition = hasLoop(a.nodes[i]);
            if(transition!=""){
                //TO DO: aggiorna le transizioni in entrata concatenando (transition)*
            }
            //TO DO:per ogni coppia entrata/uscita del nodo crea un arco con opportuna transizione
            //Leva il nodo e gli archi che lo riguardano
        }
        return //la transizione dell'unico arco rimasto
    }

}

//const, var, let