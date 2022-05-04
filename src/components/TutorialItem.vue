<!--Ignore for now-->

<template>
<circle-css color="#3498db" width=120 font-size=48 pv=12 bold=8 text-bg-color='#f0f0f0'></circle-css>
</template>

<script>
import CssCircle from 'v-circle/components/css-circle.vue'

export default {
  components: {
    circleCss: CssCircle
  }
}
</script>

<style scoped>
    .edgeEditor {
        background-color: red;
        position:fixed;
        top: 0;
        right: 0;
        padding: .3em;
        padding-top: .2em;
        border: solid;
        border-color: var(--accent);
        border-radius: 1em;
        max-width: 25vw;
    }

</style>