<script lang="ts">
import MapVue from '../components/Map.vue'
console.log('checking the window object for L')
import { defineComponent } from 'vue'

export default defineComponent({
  // type inference enabled
  components:{
    MapVue
  },
  props: {
   
  },
  data() {
    return {
      count: 1
    }
  },
  mounted() {
   
  }
})
</script>

<template>
  <main class="container is-max-desktop	">
    <section class="section">
      <h1 class="title">Map Locater</h1>
      <h2 class="subtitle">
        A simple webapp to search and file locations.
        <!-- <strong>sections</strong>  -->
      </h2>
    </section>

    <MapVue></MapVue>
   
  </main>
</template>
