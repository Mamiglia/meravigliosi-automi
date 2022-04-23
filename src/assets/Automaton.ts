//import * as vNG from "v-network-graph"
import data from "./data"

class Node{
    name; //identificatore

    constructor(myName){
        this.name = myName;
    }

    getName(){
        return this.name;
    }

    setName(newName){
        this.name = newName;
    }

    toString(){
        ris = "NODEID: "+this.name;
        if(this.success){
            ris += "(S)";
        }
        return ris;
    }

}

class Edge{
    source;
    target;
    label;

    constructor(mySource, myTarget, myLabel){
        this.source=mySource; //oggetto di tipo nodo
        this.target=myTarget; //oggetto di tipo nodo
        this.label=myLabel;
    }

    getSource(){
        return this.source;
    }

    getTarget(){
        return this.target;
    }

    getLabel(){
        return this.label;
    }

    setSource(newSource){
        this.source=newSource;
    }

    setTarget(newTarget){
        this.target=newTarget;
    }

    setLabel(newLabel){
        this.label = newLabel;
    }

    toString(){
        return "SOURCEID: "+this.source.toString()+" TARGETID: "+this.target.toString()+" LABEL: "+this.label;
    }
}

export class Automaton{
    nodes;
    edges;
    initialNode;
    finalNodes;
    alphabet;

    constructor(myAlphabet){
        //to do, inizializzazione di initialNode e finalNode
        const myNodes = Array();
        const myEdges = Array();
        for (const key of data.nodes) {
            myNode = Node(data.nodes[key][name]);
            myNodes.push(myNode);
        }
        for (const key of data.edges) {
            myEdge = Edge( data.edges[key][source] , data.edges[key][target] , data.edges[key][label] )
            myEdges.push(myEdge);
        }
        this.alphabet = myAlphabet
        this.nodes = myNodes;
        this.edges = myEdges;
    }

    //UN PO' DI GETTER E SETTER

    getNodes(){
        return JSON.parse(JSON.stringify(this.nodes)); //sta cosa dovrebbe fare una copia profonda MA si accettano idee più leggibili
    }

    getEdges(){
        return JSON.parse(JSON.stringify(this.edges));
    }

    getInitialNode(){
        return JSON.parse(JSON.stringify(this.InitialNode));
    }

    getFinalNodes(){
        return JSON.parse(JSON.stringify(this.FinalNodes));
    }

    getAlphabet(){
        return this.alphanbet;
    }

    //Eventualmente si occupa anche di modificare nodo iniziale
    //e/o di aggiungere ai nodi finali
    addNode(myNode, isInitial, isFinal){
        if (isInitial){
            this.nodes.shift(myNode);
            setInitialNode(myNode);
        }
        else{
            this.nodes.push(myNode);
        }
        if(isFinal){
            addFinalNode(myNode);
        }
    }

    addEdge(myEdge){
        this.edges.push(myEdge);
    }

    setInitialNode(newInitialNode){
        this.initialNode = newInitialNode;
    }

    addFinalNode(myNode){
        this.finalNodes.push(myNode);
    }

    setAlphabet(newAlphabet){
        this.alphabet = newAlphabet;
    }

    //FINE GETTER E SETTER (Per ora ho saltato i remove che sono meno banali, poi se serve si fanno)

    toString(){
        ris = "INITIAL NODE: "+this.initialNode.toString()+"\n";
        ris += "NODES: ";
        for (node of this.nodes){
            ris += node.toString();
            if(this.finalNodes.includes(node)){ //forse per far funzionare questa cosa bisogna definite un operatore di confronto tra nodi
                ris+="(final)"
            }
            ris += "\n";
        }
        ris += "EDGES:\n";
        for (edge of this.edges){
            ris += edge.toString();
            ris += "\n";
        }
        ris+="ALPHABET: "+this.alphabet;
        return ris;
    }

    isSuccess(myNode){
        if(this.finalNodes.includes(myNode)){
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
    checkTransition(myString, path){
        //todo
        return false;
    }

    evaluate(myString){
        const myAutomaton = new Automaton();
        const myNodes = Array();
        myNodes.push(myAutomaton.initialNode);
        return ricorsiveEvaluate(myAutomaton, myNodes, myString); //myNodes è l'insieme dei nodi "attivi", inizialmente la sola radice
    }

    //A ogni ricorsione viene consumato un carattere di myString e
    //la vecchia lista di nodi "attivi" viene completamente sostituita con i nodi raggiunti.
    //Se l'automa è a stati finiti la lista conterrà sempre un solo nodo.
    //Con un check si può usare quest'ultimo fatto anche per verificare che il automaton in input
    //rappresenti effettivamente un automa a stati finiti.
    //Ho provato a usare il commento multiriga ma ho fallito :)
    ricorsiveEvaluate(myAutomaton, myNodes, myString){
        if (myString===""){                              //caso base
            if(checkSucces(myNodes)){                    //se nodes contiene uno stato finale
                return true;
            }
            return false;
        }
        const newNodes = Array();
        for(edge of myAutomaton.edges){
            if( myNodes.includes(edge.source) && checkTransition(edge) && !newNodes.contains(edge.target) ){
                newNodes.push(edge.target);
            }
        }
        const newString = myString.slice(1); //dovrebbe scartare il primo carattere, ossia quello usato per la transizione
        return ricorsiveEvaluate(myAutomaton, newNodes, newString);
    }

    //ausiliaria per toRegex
    hasLoop(node){
        for (edge of this.edges){
            if(edge.source === node && edge.source===node){
                return; //edge.transition
            }
        }
        return ""; //assumendo che nell'automa non ci siano cappi con transizioni nulle
    }

    //Seguendo lo state elimination method
    toRegex(){
        const a = Automaton();
        
        const originalStart = a.initialNode;
        const newStart = Node("TemporaryStart");
        a.addNode(newStart,true,false);
        const newEdge = Edge(newStart,originalStart,"");
        a.edges.push(newEdge);

        const originalEnds = a.getFinalNodes();
        const newEnd = Node("TemporaryEnd");
        a.addNode(newStart,false,true);
        a.finalNodes = Array(newEnd);
        for (node of originalEnds){
            newEdge = Edge(node,newEnd,"");
            a.edges.push(newEdge);
        }


        for(let i = 1; i<a.nodes.length-1; i++){ //itera escludendo nodo inizale e nodo finale
            const transition = hasLoop(a.nodes[i]);
            if(transition!=""){
                //TO DO: aggiorna le transizioni in entrata concatenando (transition)*
            }
            //TO DO:per ogni coppia entrata/uscita del nodo crea un arco con opportuna transizione
            //Leva il nodo e gli archi che lo riguardano
        }
        //si possono resettare nodi iniziali e finali ma forse non serve
        return //la transizione dell'unico arco rimasto
    }

}

//const, var, let