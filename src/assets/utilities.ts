import { defineConfigs, Layers, Layouts, VNetworkGraphInstance } from 'v-network-graph';
import useClipboard from 'vue-clipboard3'
import { Edges, Nodes, Parameters } from './types';

export function unreactiveCopy(obj:any){
    return JSON.parse(JSON.stringify(obj))
}

export function parseList(s : string) {
    if (s.length===0) 
        return []
    return s.replaceAll(/\s/g, "").split(",");
}

export function sleep(ms: number) {
    // use as: 
    // await sleep(500)
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function toClipboard(text: string) {
    let {toClipboard} = useClipboard()
    await toClipboard(text);
}


const defaultNodes = '{"0":{"name":"0","final":false},"1":{"name":"1","final":false},"2":{"name":"2","final":false},"3":{"name":"3","final":true}}'
const defaultEdges = '{"edge0":{"source":"0","target":"1","label":"a","ruleType":"INCLUDE","charset":["a"]},"edge1":{"source":"0","target":"2","label":"b","ruleType":"INCLUDE","charset":["b"]},"edge2":{"source":"2","target":"0","label":"b","ruleType":"INCLUDE","charset":["b"]},"edge3":{"source":"1","target":"0","label":"a","ruleType":"INCLUDE","charset":["a"]},"edge4":{"source":"0","target":"3","label":"c","ruleType":"INCLUDE","charset":["c"]}}'
const defaultAlphabet = '["a","b","c"]'
const defaultInitialNode = "0"
const defaultDeterminism = "true"
export function importParameters(url: string) : Parameters {
    let params = new URLSearchParams(window.location.search);
    let nodes :Nodes = JSON.parse(params.get('nodes') ?? defaultNodes);
    let edges :Edges = JSON.parse(params.get('edges') ?? defaultEdges);
    let alphabet :string[] = JSON.parse(params.get('alphabet') ?? defaultAlphabet);
    let initial :string = JSON.parse(params.get('initial') ?? defaultInitialNode);
    let determinism :boolean = JSON.parse(params.get('determinism') ?? defaultDeterminism);
    let layout : Layouts = JSON.parse(params.get('layout')?? "{}")
    return {nodes, edges, alphabet, initial, determinism, layout}
}

export function downloadAsSvg(graph: VNetworkGraphInstance) {
    if (!graph) return
    graph = unreactiveCopy(graph)
    const text = graph.getAsSvg()
    // BUG: Le variabili CSS dei colori non sono portate dietro, l'immagine é brutta e buggata
    
    const url = URL.createObjectURL(new Blob([text], { type: "octet/stream" }))
    const a = document.createElement("a")
    a.href = url
    a.download = "automa.svg" // filename to download
    a.click()
    window.URL.revokeObjectURL(url)
  }