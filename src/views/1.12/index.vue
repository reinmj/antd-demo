<template>
  <div>
    {{ count }}
    <button @click="$store.commit('increment')">count++</button>
    <br />
    <button @click="$store.commit('increment2', 2)">count+2</button>
    <br />
    <button @click="$store.dispatch('increment')">count++</button>
    <br />
    {{ $store.getters.doubleCount }}
  </div>
</template>

<script>
export default {
  // name: "Vuex App",
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};
</script>

<style>

</style>
