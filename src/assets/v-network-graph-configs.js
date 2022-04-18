//  reference: https://dash14.github.io/v-network-graph/reference.html#configurations
export const configs = {
    view : {
        zoomEnabled: false,
        grid: {
            visible:true,
            interval: 40,
            // thickIncrements: 10,
            line: {                   // normal line style
                color: "#a9a9a9" ,         //   default: "#e0e0e0"
                width: .8,          //   default: 1,
                dasharray: 5    
            },
            thick: {
                color:"#a9a9a9",
                width: 1
            }
        }
    },
    node :{
        normal: {
            color: "var(--accent)",
            radius: 24, 
        },
        hover: {
            color: "var(--accent-2)"
        },
        // selected: {
        //     color: "white"
        // },
        selectable: 2,
        label: {
            direction: "center",
            fontFamily: "Courier New",
            text: "name"
        },
        focusring: {
            // visible: true // whether the focus ring is visible or not.     default: true
            // width: 4    // line width of the focus ring.                 default: 4
            // padding: 3  // distance between the focus ring and the node. default: 3
            color: "var(--complement)"  //per qualche motivo non funge   // fill color.                                   default: "#eebb00"
        },
    },
    
    edge : {
        normal: {
            width: 2.5,
            color: "var(--accent)",

        },
        hover: {
            color: "var(--accent-2)",
        },
        selected:{
            color: "var(--complement)"
        },
        selectable: 1,
        gap: 1,
        type:"curve",
        marker: {
            target:{
                type:"arrow",

            }
        }
    }
}