<template>
  <img src="../logo.png">
  <h1>Hello Vue 3!</h1>
  <button @click="store.commit('increment')">Clicked {{ store.state.count }} times.</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
		const store = useStore()
		return {store}
  }
})
</script>

<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
