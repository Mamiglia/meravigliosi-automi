// File for memory and data-persistence related functions
import { Parameters } from "./types";
import { send, toClipboard, unzip } from "./utilities";
import { server } from "./predefined";
import { graphString } from "./graph";
import { VNetworkGraphInstance } from "v-network-graph";

export function readParams(url: string): Parameters {
    const init: Parameters = {
        nodes: { "0": { "name": "0" }, "1": { "name": "1" }, "2": { "name": "2" }, "3": { "name": "3", "final": true } },
        edges: { "0": { "source": "0", "target": "1", "label": "a", "ruleType": "INCLUDE", "charset": ["a"] }, "1": { "source": "0", "target": "2", "label": "b", "ruleType": "INCLUDE", "charset": ["b"] }, "2": { "source": "2", "target": "0", "label": "b", "ruleType": "INCLUDE", "charset": ["b"] }, "3": { "source": "1", "target": "0", "label": "a", "ruleType": "INCLUDE", "charset": ["a"] }, "4": { "source": "0", "target": "3", "label": "c", "ruleType": "INCLUDE", "charset": ["c"] } },
        alphabet: ["a", "b", "c"],
        initial: "0",
        determinism: true,
        layout: { "nodes": { "0": { "x": 200, "y": 200 }, "1": { "x": 320, "y": 80 }, "2": { "x": 320, "y": 320 }, "3": { "x": 440, "y": 200 } } }
    }
    const params = new URLSearchParams(url);

    const p = params.get('graph')
    const local = localStorage.getItem("graph")

    try {
        if (p != null) {
            console.log("Taking graph from url")
            return unzip(decodeURI(p))
        } else if (local != null) {
            console.log("Taking graph from local")
            // console.log(decodeURI(local))
            return unzip(decodeURI(local))
        } else {
            return init
        }
    } catch (SyntaxError) {
        console.log("Graph is unreadeable - starting with default")
        return init
    }
}

export function share(params :Parameters) {
    const url = window.location.hostname + "/" + window.location.pathname + "?graph=" + graphString(params)
    toClipboard(encodeURI(url));
}

export function save(params: Parameters, graph: VNetworkGraphInstance) {
    send(server.save, { 'thumbnail': graph.getAsSvg(), 'graph': graphString(params) })
}


export function reset() {
    localStorage.removeItem('graph');
    window.location.reload()
}