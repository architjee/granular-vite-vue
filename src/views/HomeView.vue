<script lang="ts">
import MapVue from '../components/Map.vue'
console.log('checking the window object for L')
import { defineComponent } from 'vue'
import SearchBox from '@/components/SearchBox.vue'

export default defineComponent({
  // type inference enabled
  components: {
    MapVue,
    SearchBox
  },
  props: {

  },
  data() {
    return {
      count: 1
    }
  },
  mounted() {

  },
  methods:{
    cons(payload : any) {
      console.log(payload, '~~even caught with the following payload')
    }
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
    <div class="level mt-6">
      <p class="level-item has-text-centered">
        <a class="link is-info"><SearchBox @submitSearchEvent="cons"></SearchBox></a>
      </p>
    </div>
  </main>
</template>
