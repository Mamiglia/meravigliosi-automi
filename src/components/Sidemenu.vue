<script>
export default {
    name:"side-menu",
    data() {
        return {
            hasFocus : true
        }
    },
    computed: {
    },
}
</script>

<template >
<div 
    id="sidemenu" 
    :hide="!hasFocus">

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
<span class="outside" @click="hasFocus=false" :hide="!hasFocus"></span>
</template>

<style scoped>

#sidemenu {
    z-index: 3;
    background-color: var(--color-background-mute);
    width: 33%;
    height: 100vh;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
    transition: transform var(--normal-animation) ease;
    overflow: hidden;
    transform: translateX(0%);
}

#sidemenu[hide=true] {
    transform: translateX(-100%);
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
    transition: background var(--fast-animation) ease;
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
    transition: transform var(--fast-animation);
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

.outside {
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    background-color: var(--color-text);
    opacity: 50%;
    backdrop-filter: blur(10px);
    transition: all var(--normal-animation) ease;
}

.outside[hide=true] {
    opacity: 0%;
    z-index: -1;
}


</style>


