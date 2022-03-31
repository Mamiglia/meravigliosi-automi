var menuToggle = true;

function toggleMenu() {
    let el = document.getElementById("menu");
    
    if (!menuToggle) {
        Object.assign(el.style, {
            //display : "block",
            width: (window.innerHeight<window.innerWidth)? "40%" :"100%"        
        });
        Object.assign(
            document.getElementById("app").style,{
                "margin-left" : "5%"
        });
    } else {
        Object.assign(el.style, {
            //display : "none",
            width: "0%",
        })
        Object.assign(
            document.getElementById("app").style,{
                "margin-left" : "0%"
        });
    }
    menuToggle = !menuToggle;
}

function addNode() { //TODO
    let node = document.getElementById("node");
}

function addEdge() { //TODO
    let edge = document.getElementById("edge");
}

function editAlphabet() { //TODO
    let alpthabet = document.getElementById("alphabet");
}

function darkMode() {
    let dark = document.getElementById("dark");
    let sheet = document.getElementById("menu");
    let title = document.getElementById("title");
    dark.style.backgroundColor='black';
    dark.style.color="red";
    sheet.style.backgroundColor="black";
    title.style.color="red";
}

function lightMode() {
    let dark = document.getElementById("dark");
    let sheet = document.getElementById("menu");
    let title = document.getElementById("title");
    let light = document.getElementById("light");
    dark.style.backgroundColor="white";
    dark.style.color="black";
    title.style.color="black";
    sheet.style.backgroundColor="antiquewhite";
    
}