import {Edge, Layouts, Node} from "v-network-graph"

export interface Transition extends Edge {
    label: string;
    ruleType: "ALL" | "INCLUDE" | "EXCLUDE" | "EPSILON" 
    charset: string[]
}
export interface State extends Node {
    label: string //vorrei mostrare una label customizzabile invece della chiave
    final?: boolean;
    on?: boolean;
}
export type Nodes = {[key:string] : State}
export type Edges = {[key:string] : Transition}

export type Options = {
    animated: Boolean,
    determinism: Boolean,
    alphabet: String[]
}

export type Parameters = {
    nodes :Nodes ,
    edges :Edges ,
    alphabet :string[],
    initial :string,
    determinism :boolean,
    layout: Layouts
}