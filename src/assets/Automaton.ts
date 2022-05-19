import {Nodes,Edges, Transition} from './types';
import { sample, sleep } from './utilities';
import "toaster-js/default.scss";
//import { Toast } from "toaster-js";
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
    checkSuccess(myNodes: Array<string>){
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
                const t = new T.Toast("The string contains characters that are not in the alphabet", T.Toast.TYPE_INFO);
                return false;
            }
        }
        if (!this.validateEdges()){
            const t = new T.Toast("Transitions refer to character that are not in the alphabet", T.Toast.TYPE_INFO);
            return false;
        }
        if (determinism && !this.isDeterministic()) {
            const t = new T.Toast("The automaton in not deterministic", T.Toast.TYPE_INFO);
            return false
        }
        console.log(`animated: ${animated}`)
        const activeNodes: Array<string> = [this.initialNode]; //myNodes è l'insieme dei nodi "attivi", inizialmente la sola radice
        const res = await this.ricorsiveEvaluate(activeNodes, myString, animated);
        const t = new T.Toast(res, T.Toast.TYPE_INFO);
        return res
    }

    async ricorsiveEvaluate(myNodes: Array<string>, myString: string, animated: boolean): Promise<boolean>{
        if (myString===""){                              //base case
            if(this.checkSuccess(myNodes)){              //if myNodes contains a final state
                return true;
            }
            return false;
        }
        const newNodes: Array<string> = [];
        for(const key in this.edges){
            const e = this.edges[key];
            if( myNodes.includes(e.source) && this.checkTransition(e.ruleType, e.charset, myString.charAt(0)) && !newNodes.includes(e.target) ){
                newNodes.push(e.target);
            }
        }
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

    randomWalk(nodeId?:string) : string {
        if (nodeId==undefined)
            nodeId = this.initialNode
            
        if (this.nodes[nodeId].final && Math.random() > .75) 
            return ""

        const possibleEdges :string[] = []
        Object.entries(this.edges).forEach(entry=>{
            const [key, val] = entry
            if (val.source == nodeId)
                possibleEdges.push(key)
        })

        if (possibleEdges.length==0)
            return ""

        const chosenEdgeId = sample(possibleEdges)
        
        const chosen = this.edges[chosenEdgeId]
        let candidates : string[];

        if (chosen.ruleType == "ALL") 
            candidates = this.alphabet
        else if (chosen.ruleType == "INCLUDE")
            candidates = chosen.charset
        else          
            candidates = this.alphabet.filter(x => !chosen.charset.includes(x))

        return sample(candidates) + this.randomWalk(chosen.target)
    }

    //CAVEAT: THIS METHOD MODIFIES THE AUTOMATON TROUGH SIDE-EFFECT
    findAMatch(){
        if (this.nodes[this.initialNode].final===true){     //if the starting node is final return an empty string
            return "";
        }
        const reached: Array<string> = [this.initialNode];
        const reachedWith: Array<string> = [""];
        return this.recursiveFindAMatch(reached, reachedWith); //the i-th node of reached has been reached with the i-th string of reachedWith
    }

    recursiveFindAMatch(reached: Array<string>, reachedWith: Array<string>): string{
        const temp = JSON.parse(JSON.stringify(reached));       //if at the end of the execution reached has not chenged, there is no match[*]
        for (const key in this.edges){                                              //FOR EACH EDGE
            const edge = JSON.parse(JSON.stringify(this.edges[key]));
            if(reached.includes(edge.source) && !reached.includes(edge.target)){    //IF THE SOURCE HAS BEEN REACHED BUT NOT THE TARGET
                this.edges.remove[key];                                             //(for efficiency the checked edges will be removed from the collection, hoping this wont mess the key-based loop)
                for (const c of this.alphabet){                                     //LOOK FOR A CHARACTER TO CROSS IT
                    if(this.checkTransition(edge.ruleType, edge.charset, c)){
                        const index = reached.indexOf(edge.source);
                        const s = reachedWith[index];
                        if(this.nodes[edge.target].final===true){                   //if the edge can be crossed and leads to final, return the proper string
                            return s+c;
                        }
                        reachedWith.push(s+c);                                      //if the edge can be crossed but doesn't lead to final update reached and reachedWith
                        reached.push(edge.target);
                        continue;
                    }
                }
            }
        }
        if(temp === reached){           //[*]
            return "MATCH NOT FOUND";
        }
        return this.recursiveFindAMatch(reached, reachedWith);
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

