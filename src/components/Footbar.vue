<script>
import Action from './Action.vue'

export default {
    name: "foot-bar",
    components : {
        Action
    },
    emits: ["addNode", "remove", "addEdge", "validate"],
    data() {
        return {
            openSettings: false // variabile che indica se i popup settings devono essere aperti o meno
        }
    }

}
</script>

<template>
<div id="footer">
    <div class="popupMenu">
        <Action text="*" @hover="openSettings=true"/>
        <div class="settings">
            <button>Alfabeto</button>
            <div>
                <label for="determinismCheckbox">Determinstic Automa</label>
                <input type="checkbox" id="determinismCheckbox" v-model="determinism"/>
            </div>
            <!-- Altro? -->
        </div>
    </div>
    <Action text="+" @click="$emit('addNode')"/>
    <Action text="rem."  @click="$emit('remove')"/>
    <Action text="-"  @click="$emit('addEdge')"/>
    <input 
        type="text" 
        placeholder="Inserisci la stringa da validare"
        v-model="inputText"> <!--v-model associa la stringa nell'input alla variabile inputText-->
    <Action text=">" @click="$emit('validate', inputText, )"/> <!--emette l'evento "validate" con associata la stringa in input-->
</div>
</template>

<style scoped>
#footer {
    height: 10vh;
    display: flex;
    justify-content: space-around;
    width: 100vw;
    position: absolute;
    z-index: 1;
    left:0;
    bottom:0;
    top:auto;
    background-color: var(--color-background-mute);
}

input {
    width: 100%;
    text-align: center;
    border-style: none;
    background-color: transparent;
    transition: background var(--normal-animation) ease-out;
}

input:hover{
    background-color: var(--color-background-soft);
}

input:focus-visible{
    border-style: none;
}

.popupMenu {
    aspect-ratio: 1/1;
    flex-shrink: 0;
}

.popupMenu>.settings {
    position: absolute;
    bottom: 10vh;
    background-color: var(--color-background-mute);
    /* border:1px solid var(--color-text); */
    display: flex;
    flex-direction: column;
    padding: .5em;
    gap: .3em;
    transition: opacity var(--normal-animation) ease, transform var(--normal-animation) ease-out;
    opacity: 0;
    transform: translateX(-100%);
}

.popupMenu:hover>.settings {
    opacity: 100%;
    transform: translateX(0%);
}
</style>
