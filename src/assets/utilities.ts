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
    const {toClipboard} = useClipboard()
    await toClipboard(text);
}

const gzip = require('gzip-js') 
export function zip(text: Parameters) :string {
    console.log(JSON.stringify(text))
    const zipped = compress(text)
    console.log(JSON.stringify(zipped))
    return JSON.stringify(zipped)
}

export function unzip(zipped: string) : Parameters {
    return decompress(JSON.parse(zipped))

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
    const params = new URLSearchParams(url);

    // let nodes :Nodes = JSON.parse(params.get('nodes') ?? init.nodes);
    // let edges :Edges = JSON.parse(params.get('edges') ?? init.edges);
    // let alphabet :string[] = JSON.parse(params.get('alphabet') ?? init.alphabet);
    // let initial :string = JSON.parse(params.get('initial') ?? init.initialNode);
    // let determinism :boolean = JSON.parse(params.get('determinism') ?? init.determinism);
    // let layout : Layouts = JSON.parse(params.get('layout')?? init.layout)
    // return {nodes, edges, alphabet, initial, determinism, layout}
    const p = params.get('graph')
    const local = localStorage.getItem("graph")

    if (p != null) {
        console.log("Taking graph from url")
        return unzip(decodeURI(p))
    } else if (local != null){
        console.log("Taking graph from local")
        // console.log(decodeURI(local))
        return unzip(decodeURI(local))
    } else {
        return init
    }
}

export function compressSVG(svg:string) {
    const gzip = require('gzip-js'),
	options = {
		level: 7
	};

    return gzip.zip(svg, options)

}

export function downloadAsSvg(graph: VNetworkGraphInstance) {
    if (!graph) return
    // graph = unreactiveCopy(graph)
    const text = compressSVG(graph.getAsSvg())
    // BUG: Le variabili CSS dei colori non sono portate dietro, l'immagine é brutta e buggata
    
    const url = URL.createObjectURL(new Blob([text], { type: "octet/stream" }))
    console.log(url)
    const a = document.createElement("a")
    a.href = url
    a.download = "automa.svg" // filename to download
    a.click()
    window.URL.revokeObjectURL(url)
  }

export function sample(arr: Array<any>) : any{
    return arr[Math.floor(Math.random()*arr.length)];
}
