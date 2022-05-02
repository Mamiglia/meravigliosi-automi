import {Edge, Node} from "v-network-graph"

type Nodes = {[key:string] : Node}
type Edges = {[key:string] : Edge}

export class Automaton{
    nodes: Nodes;
    edges: Edges;
    initialNode: string;
    finalNodes: Array<string>;
    alphabet: Array<string>;

    constructor(myNodes: Nodes, myEdges: Edges, myInitialNode: string, myFinalNodes: Array<string>, myAlphabet: String){
        this.nodes = myNodes;
        this.edges = myEdges;
        this.initialNode = myInitialNode;
        this.finalNodes = myFinalNodes;
        this.alphabet = myAlphabet.replaceAll(/\s/g, "").split(",");
        //console.log(this.alphabet);
    }

    toString(){
        let ris: string = "INITIAL NODE: " + this.initialNode + "\n"; //spero che le classi Nodes e Edges abbiano toString
        ris += "NODES: \n";
        for (let key in this.nodes){
            ris += key;
            if(this.finalNodes.includes(key)){
                ris+=" (final)"
            }
            ris += "\n";
        }
        ris += "EDGES:\n";
        for (let key in this.edges){
            let e = this.edges[key];
            ris += key.toString() + ": source = " + e.source + " target = " + e.target + " label = " + e.label; //forse label si chiamerà cost o in qualche altro modo
            ris += "\n";
        }
        ris += "ALPHABET: " + this.alphabet.toString();
        return ris;
    }

    //ausiliaria per evaluate
    isSuccess(myNode: string){
        if(this.finalNodes.includes(myNode)){
            return true;
        }
        return false;
    }

    //ausiliaria per evaluate
    checkSuccess(myNodes: Array<string>){
        for (let n of myNodes){
            if(this.isSuccess(n)){
                return true;
            }
        }
        return false;
    }

    //ausiliaria per evaluate
    checkTransition(ruleType: string, charset: Array<string>, myChar: string){
        if (ruleType === "All"){
            return true;
        }
        if(ruleType === "Include"){
            return charset.includes(myChar);
        }
        if(ruleType === "Exclude"){
            return !charset.includes(myChar);
        }
        console.log("Error: unrecognized ruleType");
        return false;
    }

    evaluate(myString: string){
        //const myAutomaton = new Automaton(); Non è evaluate a chiamare il costruttore, giusto?
        let activeNodes: Array<string> = [this.initialNode] //myNodes è l'insieme dei nodi "attivi", inizialmente la sola radice
        return this.ricorsiveEvaluate(activeNodes, myString);
    }

    //A ogni ricorsione viene consumato un carattere di myString e
    //la vecchia lista di nodi "attivi" viene completamente sostituita con i nodi raggiunti.
    //Se l'automa è a stati finiti la lista conterrà sempre un solo nodo.
    //Con un check si può usare quest'ultimo fatto anche per verificare che il automaton in input
    //rappresenti effettivamente un automa a stati finiti.
    //Ho provato a usare il commento multiriga ma ho fallito :)
    ricorsiveEvaluate(myNodes: Array<string>, myString: string): boolean{
        if (myString===""){                              //caso base
            if(this.checkSuccess(myNodes)){              //se nodes contiene uno stato finale
                return true;
            }
            return false;
        }
        let newNodes: Array<string> = [];
        for(let key in this.edges){
            let e = this.edges[key];
            if( myNodes.includes(e.source) && this.checkTransition(e.ruleType, e.charset, myString.charAt(0)) && !newNodes.includes(e.target) ){ //label non so se si chiama davvero label
                newNodes.push(e.target);
            }
        }
        const newString = myString.slice(1); //dovrebbe scartare il primo carattere, ossia quello usato per la transizione
        return this.ricorsiveEvaluate(newNodes, newString);
    }

    /*
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
    }*/

}

//const, var, let

export function unreactiveCopy(obj:any){
    return JSON.parse(JSON.stringify(obj))
}