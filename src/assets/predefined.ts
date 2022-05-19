//  reference: https://dash14.github.io/v-network-graph/reference.html#configurations
import { defineConfigs } from "v-network-graph"

export const server = {
    hub: "http://localhost:3000/public/hub.php",
    save: "http://localhost:3000/public/save.php"
}


export const networkGraphConfigs = defineConfigs({
    view : {
        zoomEnabled: false,
        doubleClickZoomEnabled: false,  // Whether to zoom with double click. default: true
        mouseWheelZoomEnabled:  false,  // Whether to zoom with mouse wheel or not. default: true
        // autoPanAndZoomOnLoad: "center-content",    
        // layoutHandler: new GridLayout({ grid: 20 }),
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
                if (node.on) {
                    return "var(--secondary)"
                } else if (node.final) {
                    return "var(--color-text)"
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

export const palette = `
:root {
    /* colors: */
      --white: #fbfaf5;
      --white-ish: #ddd5d5;
    
      --black: #181818;
      --black-ish: #252c2c;
    
      --indigo: #2c3e50;
    
      --rosso-sapienza: #822433; /* <3 */
    
      --vt-c-text-light-1: var(--vt-c-indigo);
      --vt-c-text-light-2: rgba(60, 60, 60, 1);
      --vt-c-text-dark-1: var(--vt-c-white);
      --vt-c-text-dark-2: rgba(235, 235, 235, 1);
    
    
    /* palette: */
      --main: var(--rosso-sapienza) ;
    
      --complement: #248273;
    
      --fast-animation: 0.35s;
      --normal-animation: 0.75s; 
      background: var(--background);  
    }
    
    /* semantic color variables for this project */
    :root {
      --call-to-action: var(--rosso-sapienza);
      --secondary: var(--complement);
      --primary-dark: var(--white-ish);
      --primary-light: var(--white);
    
      --background: var(--primary-light);
      --background-alternative: var(--primary-dark);
    
      
      --color-grid: var(--primary-dark);
      
      --color-heading: var(--vt-c-text-light-1);
      --color-text: var(--vt-c-text-light-1);
      
      --accent: var(--call-to-action);
    }
    
    @media (prefers-color-scheme: dark) {
      :root {
        --call-to-action: var(--rosso-sapienza);
        --secondary: var(--complement);
        --primary-dark: var(--black);
        --primary-light: var(--black-ish);
      
        --background: var(--primary-dark);
        --background-alternative: var(--primary-light);
      
        --color-grid: var(--primary-light);
      
        --color-heading: var(--vt-c-text-dark-1);
        --color-text: var(--vt-c-text-dark-2);
      
        --accent: var(--call-to-action);
      } 
    }
`