import {Nodes,Edges, Transition} from './types';
import { sample, sleep } from './utilities';
import "toaster-js/default.scss";
const T = require("toaster-js");


export class Automaton{
    nodes: Nodes;
    edges: Edges;
    initialNode: string;
    alphabet: Array<string>;

    constructor(myNodes: Nodes, myEdges: Edges, myInitialNode: string, myAlphabet: string[]){
        this.nodes = myNodes;
        this.edges = myEdges;
        this.initialNode = myInitialNode;
        this.alphabet = myAlphabet//.replaceAll(/\s/g, "").split(",");
    }

    toString() : string {
        let ris: string = "INITIAL NODE: " + this.initialNode + "\n"; //spero che le classi Nodes e Edges abbiano toString
        ris += "NODES: \n";
        for (const key in this.nodes){
            ris += key;
            if(this.nodes[key].final){
                ris+=" (final)"
            }
            ris += "\n";
        }
        ris += "EDGES:\n";
        for (const key in this.edges){
            const e = this.edges[key];
            ris += key.toString() + ": source = " + e.source + " target = " + e.target + " label = " + e.label + " ruleType = " + e.ruleType + " charset = " + e.charset; //forse label si chiamerà cost o in qualche altro modo
            ris += "\n";
        }
        ris += "ALPHABET: " + this.alphabet.toString();
        return ris;
    }

    //ausiliaria per evaluate
    isSuccess(myNode: string){
        if(this.nodes[myNode].final){
            return true;
        }
        return false;
    }

    //ausiliaria per evaluate
    checkSuccess(myNodes: Set<string>){
        for (const n of myNodes){
            if(this.isSuccess(n)){
                return true;
            }
        }
        return false;
    }

    //ausiliaria per evaluate
    checkTransition(ruleType: string, charset: Array<string>, myChar: string){
        if (ruleType === "ALL"){
            return true;
        }
        if(ruleType === "INCLUDE"){
            return charset.includes(myChar);
        }
        if(ruleType === "EXCLUDE"){
            return !charset.includes(myChar);
        } if (ruleType === "EPSILON"){
            return false //epsilon is evaluated at a different stage
        }
        console.log("Error: unrecognized ruleType");
        return false;
    }

    validateEdges(){
        for (const key in this.edges){
            const edge = this.edges[key];
            for (const c of edge.charset){
                if(!this.alphabet.includes(c)){
                    return false;
                }
            }
        }
        return true;
    }

    async evaluate(myString: string, animated:boolean, determinism:boolean){
        for (const i of myString){
            if (!this.alphabet.includes(i)){
                const t = new T.Toast("The string contains characters that are not in the alphabet", T.Toast.TYPE_WARNING);
                return false;
            }
        }
        if (!this.validateEdges()){
            const t = new T.Toast("Transitions refer to character that are not in the alphabet", T.Toast.TYPE_WARNING);
            return false;
        }
        if (determinism && !this.isDeterministic()) {
            const t = new T.Toast("The automaton in not deterministic", T.Toast.TYPE_WARNING);
            return false
        }
        console.log(`animated: ${animated}`)
        let activeNodes: Set<string> = new Set([this.initialNode]); 
        //myNodes è l'insieme dei nodi "attivi", inizialmente la sola radice
        activeNodes = this.epsilonTransitions(activeNodes)
        const res = await this.ricorsiveEvaluate(activeNodes, myString, animated);
        const t = new T.Toast(res, T.Toast.TYPE_DONE);
        return res
    }

    async ricorsiveEvaluate(myNodes: Set<string>, myString: string, animated: boolean): Promise<boolean>{
        if (myString==="" || myNodes.size===0){                              //base case
            if(this.checkSuccess(myNodes)){              //if myNodes contains a final state
                return true;
            }
            return false;
        }
        let newNodes: Set<string> = new Set();
        for(const key in this.edges){
            const e = this.edges[key];
            if( myNodes.has(e.source) && this.checkTransition(e.ruleType, e.charset, myString.charAt(0)) ){
                newNodes.add(e.target);
            }
        }
        newNodes = this.epsilonTransitions(newNodes);


        if (animated) {
            newNodes.forEach((v)=>this.nodes[v].on = true)
            await sleep(500)
            newNodes.forEach((v)=> this.nodes[v].on = false)
        }
        const newString = myString.slice(1); //discard the character used in the transition
        
        return this.ricorsiveEvaluate(newNodes, newString, animated);
    }

    isDeterministic() {
        for (const key1 in this.edges){
            const edge1 = this.edges[key1];
            for(const key2 in this.edges){
                const edge2 = this.edges[key2];
                if(edge1.source === edge2.source && edge1.target != edge2.target){
                    for(const c of this.alphabet){
                        if(this.checkTransition(edge1.ruleType, edge1.charset, c) && this.checkTransition(edge2.ruleType, edge2.charset, c)){
                            return false;
                        }
                    }
                }
            }
        }
        return true
    }

    epsilonTransitions(newNodes: Set<string> ){
        let newTransitions = true;
        while (newTransitions) {
            newTransitions = false
            for(const key in this.edges) {
                const e = this.edges[key];
                if (e.ruleType==="EPSILON" && newNodes.has(e.source) && !newNodes.has(e.target)) {
                    newTransitions = true;
                    newNodes.add(e.target);
                }
    
            }
        }
        return newNodes
    }

    randomWalk(nodeId?:string) : string | null{
        if (nodeId==undefined)
            nodeId = this.initialNode

        if (this.nodes[nodeId].final && Math.random() > .75) 
            return ""

        const possibleEdges :string[] = []
        Object.entries(this.edges).forEach(entry=>{
            const [key, val] = entry
            if (val.source === nodeId)
                possibleEdges.push(key)
        })
        if (possibleEdges.length===0){
            return (this.nodes[nodeId].final)? "": null;
        }

        const chosenEdgeId = sample(possibleEdges)
        
        const chosen = this.edges[chosenEdgeId]
        let candidates : string[];

        if (chosen.ruleType === "ALL") 
            candidates = this.alphabet
        else if (chosen.ruleType === "INCLUDE")
            candidates = chosen.charset
        else          
            candidates = this.alphabet.filter(x => !chosen.charset.includes(x))
        const res = this.randomWalk(chosen.target);
        if(res === null){
            console.log(res)
            return null;
        }
        return sample(candidates) + res;
    }

    //CAVEAT: THIS METHOD MODIFIES THE AUTOMATON TROUGH SIDE-EFFECT
    findAMatch(){
        const res = this.randomWalk()
        if (res===null){
            new T.Toast("MATCH NOT FOUND", T.Toast.TYPE_WARNING);
        }
        else{
            new T.Toast(res, T.Toast.TYPE_INFO)
        }
        return res

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

