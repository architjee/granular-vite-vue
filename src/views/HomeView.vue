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
      selectedLocation: CONFIG_FILE.SEARCHREUSLTS_INIT_VALUE[0]
    }
  },
  mounted() {
    this.processRouterParams()
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
        const response = await axios.get(NOMINATIM_EXTERN_URL, {
          params: {
            "q": this.searchQuery,
            "format": 'jsonv2'
          }
        });
        console.log('Search Query was ', this.searchQuery, 'To which we fired an external request and got the following response', response);
        if (response.data) {
          this.searchResults = ExternAPIService.parseDataAndFilterResults(response.data)
          console.log(this.searchResults)
        }
        this.$router.push(`/${this.searchQuery}`)
      } catch (error) {
        console.error(error);
      }
      return
    },
    async selectLocationOverMap(selectedLocation: ExternAPIService.ResultantValue) {
      console.log('Selecting location over map as', selectedLocation)
      this.selectedLocation = selectedLocation
      this.$router.push(`/${this.searchQuery}/${this.selectedLocation["place_id"]}`)
    },
    async processRouterParams() {
      let place_id, location;
      try {
        location = String(this.$route.params['location'])
        try {
          place_id = String(this.$route.params["placeid"])
        } catch (error) {
          console.log("Error occured here", error)
        }
      } catch (error) {
        console.log("Error occured here", error)
      }
      console.log('This is the current parama', this.$route.params)
      try {
        if (location && location !== "undefined") {
          // We will try setting the search query to 
          console.log('We are also getting location', location)
          this.searchQuery = location;
          await this.fetchExternData();
          try {
            if (place_id && place_id !== "undefined") {
              console.log('We are also getting place id as', place_id)
              let prospective_place = this.findPlaceByPlaceId(place_id)
              console.log(prospective_place)
              if (prospective_place) {

                await this.selectLocationOverMap(prospective_place)
              }
            }
          } catch (error) {
            console.log("The place id wasn't found")
          }

        }
      } catch (error) {

      }
    },
    findPlaceByPlaceId(place_id: string): ExternAPIService.ResultantValue {
      try {
        for (let index_it = 0; index_it < this.searchResults.length; index_it++) {
          if (String(this.searchResults[index_it]["place_id"]) == place_id) {
            return this.searchResults[index_it]
          }
        }
      } catch (error) {
        console.log('An error occured while trying to find the placeid')
      }
      // Fallback to default value
      return CONFIG_FILE.SEARCHREUSLTS_INIT_VALUE[0]
    },
    async copyToClipboard() {
      let complete_url = window.location.href
      await navigator.clipboard.writeText(complete_url);
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
      <p class="level-item">
        <button @click="copyToClipboard()">Share URL | Copy URL to clipboard</button>
      </p>
      <p class="level-item has-text-centered">
        <a class="link is-info">
          <SearchBox @submitSearchEvent="selectLocation" :initialLocation="searchQuery" :key="searchQuery"></SearchBox>
        </a>
      </p>
    </div>
    <div class="container">
      <a class="link">
        <SearchResult class="my-3" v-for="result in searchResults" :cardContent="result"
        @click="selectLocationOverMap(result)"></SearchResult>
      </a>
      </div>
  </main>
</template>
