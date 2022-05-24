<script setup lang="ts">
import { ref, defineEmits, defineProps, computed } from 'vue'
import Toggle from '@vueform/toggle'
import SquareButton from '@/components/SquareButton.vue'
import { parseList } from '@/assets/utilities'
import { Nodes } from '@/assets/types'
import { reset } from '@/assets/memory'

const emits = defineEmits(["addNode", "remove", "addEdge", "validate", "update:animated", "update:alphabet", "update:determinism", "update:start", 'save', 'share', 'downloadSVG', 'findAMatch'])


const props = defineProps<{
    alphabet: string[]
    determinism: boolean
    animated: boolean
    start: string

    nodes: Nodes
}>()
const show = ref(false)

const alphabetInput = ref(props.alphabet.join(','))
const alphabetModel = computed(() =>
    parseList(alphabetInput.value)
)
const determinismModel = ref(props.determinism)
const animatedModel = ref(props.animated)
const inputText = ref("")

function updateValue(variable: "animated" | "determinism" | "alphabet" | "start", value: any) {
    console.log(value)
    emits(`update:${variable}`, value)
}

</script>

<template>
    <div id="footer">
        <!--Primo blocco-->
        <div class="popupMenu" :show="show">
            <SquareButton icon="settings" :active="show" @click="show = !show" />
            <div class="settings">
                <div class="section">
                    <label for="startNode">Starting node</label>
                    <select name="startNode" @change="updateValue('start', $event.target!.value)">
                        <option disabled value="null"></option>
                        <option
                            v-for="n in Object.keys(nodes)"
                            :key="n"
                            :value="n"
                        >{{ nodes[n].name }}</option>
                    </select>
                </div>
                <div class="section">
                    <label for="alphabetInput">Alphabet:&nbsp;</label>
                    <input
                        type="text"
                        id="alphabetInput"
                        placeholder="Alfabeto"
                        @input="updateValue('alphabet', alphabetModel)"
                        v-model="alphabetInput"
                    />
                </div>

                <div class="section">
                    <label for="determinismCheckbox">Determinstic Automa</label>
                    <Toggle
                        id="determinismCheckbox"
                        class="toggle"
                        @change="updateValue('determinism', determinismModel)"
                        v-model="determinismModel"
                        on-label="on"
                        off-label="off"
                    />
                </div>
                <div class="section">
                    <label for="animateCheckbox">Animate Evaluation</label>
                    <Toggle
                        id="animateCheckbox"
                        class="toggle"
                        @change="updateValue('animated', animatedModel)"
                        v-model="animatedModel"
                        on-label="on"
                        off-label="off"
                    />
                </div>
                <div class="section">
                    <!-- Al click si emette l'evento 'save' che verra raccolto da App.vue -->
                    <SquareButton icon="save" @click="$emit('save')" />
                    <SquareButton icon="share" @click="$emit('share')" />
                    <SquareButton icon="image" @click="$emit('downloadSVG')" />
                    <SquareButton icon="sort_by_alpha" @click="$emit('findAMatch')" />
                    <SquareButton icon="clear" @click="reset()" />
                </div>
            </div>
            <span class="outside" @click="show = false"></span>
        </div>
        <SquareButton icon="delete_forever" @click="$emit('remove')" />
        <SquareButton icon="add_circle" @click="$emit('addNode')" />
        <SquareButton icon="commit" @click="$emit('addEdge')" />

        <input
            id="String"
            type="text"
            placeholder="Insert a string to validate"
            v-model="inputText"
            @keyup.enter="$emit('validate', inputText)"
        />
        <SquareButton icon="skip_next" @click="$emit('validate', inputText)" />
    </div>
</template>

<style scoped>
#footer {
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100vw;
    position: absolute;
    z-index: 1;
    left: 0;
    bottom: 0;
    top: auto;
    background-color: var(--background-alternative);
}

#footer > * {
    height: 10vh;
}

#String {
    width: 100%;
    text-align: center;
    border-style: none;
    background-color: transparent;
    font-size: 1.3em;
    transition: background var(--normal-animation) ease-out;
    outline: none;
}

#String:hover {
    background-color: var(--background-alternative);
}

#String:focus-visible {
    border-style: none;
}

.popupMenu {
    aspect-ratio: 1/1;
    flex-shrink: 0;
}

.popupMenu > .settings {
    position: fixed;
    bottom: 0;
    left: 0;
    padding-bottom: 10vh;
    transition: opacity var(--fast-animation) ease,
        transform var(--normal-animation) ease-out;
    transition-delay: 0.5s;
    opacity: 0;
    transform: translateX(-100%);
    background-color: var(--background-alternative);
    border: solid var(--background-alternative);
    border-width: 5px 5px 0 0;
    border-radius: 0 1em 0 0;
    display: flex;
    flex-direction: column;
    gap: 0.3em;
    min-width: max-content;
    max-width: 30vw;
    z-index: -1;
}

.popupMenu:hover > .settings {
    opacity: 100%;
    transform: translateX(0%);
    transition-delay: 0s;
}
.popupMenu > .outside {
    display: none;
}

.settings input[type="checkbox"] {
    vertical-align: middle;
    display: inline-block;
    width: min-content;
}

.settings label {
    white-space: nowrap;
    display: inline-block;
}

.section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* flex-wrap: wrap; */
    gap: 1em;
    padding: 0.3em 1em 0 1em;
}

.section select {
    background-color: var(--background);
    border: solid;
    border-color: var(--background);
    border-radius: 3px;
    font-size: 1.2em;
}
.section input[type="text"] {
    background-color: var(--background);
    border: solid;
    border-color: var(--background);
    border-radius: 3px;
    width: 10em;
    text-align: center;
}


@media screen and (orientation: portrait) {
    #footer {
        height: 20vh;
        display: grid;
        grid-template-areas:
            "a b c d"
            "e e e f";
        grid-template-columns: 25vw 25vw 25vw 25vw;
        grid-template-rows: 10vh 10vh;
        place-items: center;
    }
    #footer > input[type="text"] {
        grid-area: e;
        width: 75vw;
    }

    .popupMenu > .settings {
        max-width: calc(100vw - 5px);
        width: calc(100vw - 5px);
        padding-bottom: 20vh;
        transition-delay: 0s !important;
    }
    .popupMenu[show="true"] > .settings {
        opacity: 100%;
        transform: translateX(0%);
        transition-delay: 0s;
    }
    .popupMenu[show="true"] > .outside {
        display: unset;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -2;
    }
    .settings input {
        font-size: 1.3em    ;
    }

    .settings>.section {
        width: 100vw;
    }
}
</style>


