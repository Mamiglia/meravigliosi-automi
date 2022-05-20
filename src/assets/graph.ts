import { VNetworkGraphInstance } from "v-network-graph";
import { Parameters } from "./types";
import { zip } from "./utilities";

export function graphString(p :Parameters) : string{
    /* parameters:
    - nodes
    - edges
    - initialNode
    - alphabet
    - determinism
    - layout
  */
  return encodeURI(zip(p))
}

export function downloadAsSvg(graph: VNetworkGraphInstance) {
    if (!graph) return
    // graph = unreactiveCopy(graph)
    const text = graph.getAsSvg()
    // BUG: Le variabili CSS dei colori non sono portate dietro, l'immagine é brutta e buggata
    
    const url = URL.createObjectURL(new Blob([text], { type: "octet/stream" }))
    console.log(url)
    const a = document.createElement("a")
    a.href = url
    a.download = "automa.svg" // filename to download
    a.click()
    window.URL.revokeObjectURL(url)
  }
