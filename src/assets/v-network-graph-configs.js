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
            color: "#41b883",
            radius: 20,
        },
        selectable: 2,
        label: {
            direction: "center",
        }
    },
    edge : {}
}