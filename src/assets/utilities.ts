import { compress, decompress } from 'compress-json';
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

const gzip = require('gzip-js') 
export function zip(text: Parameters) :string {
    console.log(JSON.stringify(text))
    let zipped = compress(text)
    console.log(JSON.stringify(zipped))
    return JSON.stringify(zipped)
    // let options = {
	// 	level: 9,
	// };
    // return JSON.stringify(gzip.zip(JSON.stringify(text), options))
}

export function unzip(zipped: string) : Parameters {
    return decompress(JSON.parse(zipped))
    // console.log(zipped)
    // let decoded = ""
    // console.log(gzip.unzip(JSON.parse(zipped)))
    // gzip.unzip(JSON.parse(zipped)).forEach((ch : number) =>
    //     decoded+=(String.fromCharCode(ch))
    // );
    // return JSON.parse(decoded)
}


export function importParameters(url: string) : Parameters {
    const init : Parameters= {
        nodes: {"0":{"name":"0"},"1":{"name":"1"},"2":{"name":"2"},"3":{"name":"3","final":true}},
        edges :{"edge0":{"source":"0","target":"1","label":"a","ruleType":"INCLUDE","charset":["a"]},"edge1":{"source":"0","target":"2","label":"b","ruleType":"INCLUDE","charset":["b"]},"edge2":{"source":"2","target":"0","label":"b","ruleType":"INCLUDE","charset":["b"]},"edge3":{"source":"1","target":"0","label":"a","ruleType":"INCLUDE","charset":["a"]},"edge4":{"source":"0","target":"3","label":"c","ruleType":"INCLUDE","charset":["c"]}},
        alphabet: ["a","b","c"],
        initial: "0",
        determinism: true,
        layout: {"nodes":{"0":{"x":200,"y":200},"1":{"x":320,"y":80},"2":{"x":320,"y":320},"3":{"x":440,"y":200}}}
    }
    let params = new URLSearchParams(url);

    // let nodes :Nodes = JSON.parse(params.get('nodes') ?? init.nodes);
    // let edges :Edges = JSON.parse(params.get('edges') ?? init.edges);
    // let alphabet :string[] = JSON.parse(params.get('alphabet') ?? init.alphabet);
    // let initial :string = JSON.parse(params.get('initial') ?? init.initialNode);
    // let determinism :boolean = JSON.parse(params.get('determinism') ?? init.determinism);
    // let layout : Layouts = JSON.parse(params.get('layout')?? init.layout)
    // return {nodes, edges, alphabet, initial, determinism, layout}
    let p = params.get('graph')
    if (p != null) {
        return unzip(decodeURI(p))
    } else {
        return init
    }
}

export function downloadAsSvg(graph: VNetworkGraphInstance) {
    if (!graph) return
    // graph = unreactiveCopy(graph)
    const text = graph.getAsSvg()
    // BUG: Le variabili CSS dei colori non sono portate dietro, l'immagine é brutta e buggata
    
    const url = URL.createObjectURL(new Blob([text], { type: "octet/stream" }))
    const a = document.createElement("a")
    a.href = url
    a.download = "automa.svg" // filename to download
    a.click()
    window.URL.revokeObjectURL(url)
  }