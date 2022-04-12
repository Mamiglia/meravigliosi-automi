<script>
export default {
    name:"side-menu",
    props: {
        visible: {
            type: Boolean,
            required:true
        }
    },
    data() {
        return {
            hasFocus : true
        }
    },
    computed: {
        visibility() {
            return `transform: translateX(${this.hasFocus? "0" : "-100%"});`;
        }
    }
}
</script>

<template >
<div 
    id="sidemenu" 
    :style="visibility"   
    @focus="hasFocus = true"
    @blur="hasFocus = false">

    <h1 class="title" id="title">Meravigliosi Automi</h1>
    <ul>
        <li><a href="start.html">Start</a></li>
        <li><a href ="wiki.html">Wiki</a></li>
        <li><a href="source.html">Source Code</a></li>
    </ul>
    <button type="button" @click="hasFocus=false" >&lt;</button>
</div>
<div class="menu-btn" @click="hasFocus=true">
    <button type="button" ></button>
</div>
</template>

<style scoped>
#sidemenu {
    z-index: 2;
    background-color: var(--color-background-mute);
    width: 33%;
    height: 100vh;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
    transition: all .75s ease;
    overflow: hidden;
}

button {
    border: none;
}

ul {
    list-style: none;
    padding: 0;
}

h1 {
    margin: 0;
    padding-top: 10%;
}

.menu-btn {
    width: 10vh;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background .35s ease;
    cursor: pointer;
    position: absolute;
    z-index:1;
}
.menu-btn>button {
    height: 30%;
    background: transparent;
    border: none;
    border-top: 1px solid;
    border-bottom: 1px solid;
    position: relative;
    display: block;
    width: 50%;
    cursor: pointer;
    color: inherit;
    font-size: 0;
    transition: 0.35s;
}
.menu-btn>button::before , .menu-btn>button::after{
    position: absolute;
    left: 49%;
    display: block;
    width: 100%;
    height: 1px;
    background: currentColor;
    content: "";
    transition: transform 0.35s;
    top: 50%;
    transform: translate(-50%, -50%);
    transform-origin: 0% 0%;
}
.menu-btn:hover{
    background-color: var(--accent);
}
.menu-btn:hover>button {
    border-color: transparent;
}
.menu-btn:hover>button::after {
    transform: translate(-50%, -50%) rotate(-30deg) scaleX(0.9);
    color: var(--color-background);
}
.menu-btn:hover>button::before {
    transform: translate(-50%, -50%) rotate(30deg) scaleX(0.9);
    color: var(--color-background);
}
</style>


