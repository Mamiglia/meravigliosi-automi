<template>
<button class='btn' @click="func()">
    {{text}}
</button>
</template>

<script>
export default {
    name:"action-component",
    props: {
        text: String,
        func: Function,
        icon: String
    }
}
</script>