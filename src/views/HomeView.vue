<script lang="ts">
import MapVue from '../components/Map.vue'
import { defineComponent } from 'vue'
import SearchBox from '@/components/SearchBox.vue'
import SearchResult from '@/components/SearchResult.vue'
import * as ExternAPIService from '../ExternAPIService'
import axios from 'axios'
import * as CONFIG_FILE from '../CONFIG_FILE'
const NOMINATIM_EXTERN_URL = 'https://nominatim.openstreetmap.org/search.php?'
export default defineComponent({
  // type inference enabled
  components: {
    MapVue,
    SearchBox,
    SearchResult
  },
  props: {

  },
  data() {
    return {
      count: 1,
      searchQuery: CONFIG_FILE.DEFAULT_LOCATION,
      searchResults: CONFIG_FILE.SEARCHREUSLTS_INIT_VALUE,
      selectedLocation : CONFIG_FILE.SEARCHREUSLTS_INIT_VALUE[1]
    }
  },
  mounted() {

  },
  methods: {
    async selectLocation(payload: any) {
      console.log(payload, '~~event caught with the following payload')
      this.searchQuery = payload["searchLocation"]
      await this.fetchExternData();
      await this.selectLocationOverMap(this.searchResults[0]);
    },
    async fetchExternData() {

      try {
        const response = await axios.get(NOMINATIM_EXTERN_URL,{params:{
          "q": this.searchQuery,
          "format": 'jsonv2'
        }});
        console.log('Search Query was ', this.searchQuery, 'To which we fired an external request and got the following response',response);
        if(response.data){
          this.searchResults= ExternAPIService.parseDataAndFilterResults(response.data)
          console.log(this.searchResults)
        }
      } catch (error) {
        console.error(error);
      }

    },
    async selectLocationOverMap(selected_location: ExternAPIService.ResultantValue){
      console.log('Selecting location over map as', selected_location)
      this.selectedLocation = selected_location
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

    <MapVue :selectedLocation="selectedLocation" :key="selectedLocation.place_id"></MapVue>
    <div class="level mt-6">
      <p class="level-item has-text-centered">
        <a class="link is-info">
          <SearchBox @submitSearchEvent="selectLocation" :initialLocation="searchQuery"></SearchBox>
        </a>
      </p>
    </div>
    <div class="container">
      <SearchResult class="my-3" v-for="result in searchResults" :cardContent="result" @click="selectLocationOverMap(result)"></SearchResult>
    </div>
  </main>
</template>
