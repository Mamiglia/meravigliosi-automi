//  reference: https://dash14.github.io/v-network-graph/reference.html#configurations
import { defineConfigs } from "v-network-graph"

export const networkGraphConfigs = defineConfigs({
    view : {
        zoomEnabled: false,
        doubleClickZoomEnabled: false,  // Whether to zoom with double click. default: true
        mouseWheelZoomEnabled:  false,  // Whether to zoom with mouse wheel or not. default: true
        // autoPanAndZoomOnLoad: "center-content",
        grid: {
            visible:true,
            margin: 0, //aggiunto questo elemento per avere il grafo iniziale esattamente al centro
            interval: 40,
            // thickIncrements: 10,
            line: {                   // normal line style
                color: "var(--color-grid)" ,         //   default: "#e0e0e0"
                width: 1,          //   default: 1,
                dasharray: 5    
            },
            thick: {
                color:"var(--color-grid)",
                width: 1
            }
        }
    },
    node :{
        normal: {
            color: node => {
                if (node.final) {
                    return "var(--color-text)"
                } else if (node.on) {
                    return "var(--secondary)"
                }
                return "var(--accent)"
            },
            radius: node=> node.final||node.on? 30 : 25, 
        },
        hover: {
            color: "var(--secondary)"
        },
        // selected: {
        //     color: "var(--secondary)"
        // }, 
        // se abilitato causa uno strano errore quando si seleziona un nodo

        selectable: 2,
        label: {
            direction: "center",
            fontFamily: "Courier New",
            text: "name",
            color: node => node.final? "var(--background)" : "var(--white-ish)"
        },
        focusring: {
            color: "var(--secondary)"  
        },
    },
    
    edge : {
        normal: {
            width: 2.5,
            color: "var(--accent)",

        },
        selectable: 1,
        selected: {
            color: "var(--secondary)"
        },
        hover:{
            color: "var(--secondary)"
        },
        margin:2,
        gap:25,
        type:"curve",
        marker: {
            target:{
                type:"arrow",

            }
        },
        label:{
            color: "var(--color-text)",
            fontSize: 15
        }
    }
})