<script lang="ts">
import MapVue from '../components/Map.vue'
import { defineComponent } from 'vue'
import SearchBox from '@/components/SearchBox.vue'
import SearchResult from '@/components/SearchResult.vue'
import * as ExternAPIService from '../ExternAPIService'
import axios from 'axios'
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
      searchQuery: '',
      searchResults: [
    {
        "place_id": 297978730,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "relation",
        "osm_id": 2315704,
        "boundingbox": [
            "42.2279112",
            "42.3969775",
            "-71.1912442",
            "-70.8044881"
        ],
        "lat": "42.3554334",
        "lon": "-71.060511",
        "display_name": "Boston, Suffolk County, Massachusetts, United States",
        "place_rank": 16,
        "category": "boundary",
        "type": "administrative",
        "importance": 0.9202507899404513,
        "icon": "https://nominatim.openstreetmap.org/ui/mapicons/poi_boundary_administrative.p.20.png"
    },
    {
        "place_id": 297569786,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "relation",
        "osm_id": 58553,
        "boundingbox": [
            "52.8628045",
            "53.0866624",
            "-0.246714",
            "0.2385499"
        ],
        "lat": "52.9770408",
        "lon": "-0.0239836",
        "display_name": "Boston, Lincolnshire, England, United Kingdom",
        "place_rank": 16,
        "category": "boundary",
        "type": "administrative",
        "importance": 0.6072557220197782,
        "icon": "https://nominatim.openstreetmap.org/ui/mapicons/poi_boundary_administrative.p.20.png"
    },
    {
        "place_id": 297593859,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "relation",
        "osm_id": 119728,
        "boundingbox": [
            "30.7811345",
            "30.802999",
            "-83.8026067",
            "-83.7774578"
        ],
        "lat": "30.7918613",
        "lon": "-83.7898868",
        "display_name": "Boston, Thomas County, Georgia, United States",
        "place_rank": 16,
        "category": "boundary",
        "type": "administrative",
        "importance": 0.5971911731091724,
        "icon": "https://nominatim.openstreetmap.org/ui/mapicons/poi_boundary_administrative.p.20.png"
    },
    {
        "place_id": 457781,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "node",
        "osm_id": 158490861,
        "boundingbox": [
            "37.5892987",
            "37.6292987",
            "-75.8627096",
            "-75.8227096"
        ],
        "lat": "37.6092987",
        "lon": "-75.8427096",
        "display_name": "Boston, Accomack County, Virginia, 23420, United States",
        "place_rank": 20,
        "category": "place",
        "type": "hamlet",
        "importance": 0.5386682544076837,
        "icon": "https://nominatim.openstreetmap.org/ui/mapicons/poi_place_village.p.20.png"
    },
    {
        "place_id": 299463021,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "relation",
        "osm_id": 13642223,
        "boundingbox": [
            "42.608963",
            "42.69869",
            "-78.814525",
            "-78.696863"
        ],
        "lat": "42.6289858",
        "lon": "-78.7376213",
        "display_name": "Town of Boston, Erie County, New York, 14025, United States",
        "place_rank": 14,
        "category": "boundary",
        "type": "administrative",
        "importance": 0.4468437919960061,
        "icon": "https://nominatim.openstreetmap.org/ui/mapicons/poi_boundary_administrative.p.20.png"
    },
    {
        "place_id": 397572,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "node",
        "osm_id": 153782997,
        "boundingbox": [
            "38.2172927",
            "38.2572927",
            "-85.4552363",
            "-85.4152363"
        ],
        "lat": "38.2372927",
        "lon": "-85.4352363",
        "display_name": "Boston, Louisville, Jefferson County, Kentucky, 40023, United States",
        "place_rank": 20,
        "category": "place",
        "type": "hamlet",
        "importance": 0.4451618757867978,
        "icon": "https://nominatim.openstreetmap.org/ui/mapicons/poi_place_village.p.20.png"
    },
    {
        "place_id": 105972,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "node",
        "osm_id": 20473093,
        "boundingbox": [
            "52.9731191",
            "52.9831191",
            "-0.0361968",
            "-0.0261968"
        ],
        "lat": "52.9781191",
        "lon": "-0.0311968",
        "display_name": "Boston, Station Approach, Haven Village, Staniland, Boston, Lincolnshire, England, PE21 8RN, United Kingdom",
        "place_rank": 30,
        "category": "railway",
        "type": "station",
        "importance": 0.42356076917902974,
        "icon": "https://nominatim.openstreetmap.org/ui/mapicons/transport_train_station2.p.20.png"
    },
    {
        "place_id": 443335,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "node",
        "osm_id": 158291511,
        "boundingbox": [
            "40.2920141",
            "40.3320141",
            "-79.8431024",
            "-79.8031024"
        ],
        "lat": "40.3120141",
        "lon": "-79.8231024",
        "display_name": "Boston, Elizabeth Township, Allegheny County, Pennsylvania, 15135, United States",
        "place_rank": 20,
        "category": "place",
        "type": "hamlet",
        "importance": 0.41672804158338317,
        "icon": "https://nominatim.openstreetmap.org/ui/mapicons/poi_place_village.p.20.png"
    },
    {
        "place_id": 298042985,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "relation",
        "osm_id": 2776224,
        "boundingbox": [
            "52.9560574",
            "53.0016379",
            "-0.0602528",
            "0.0033826"
        ],
        "lat": "52.9788362",
        "lon": "-0.03152722670958481",
        "display_name": "Boston, Lincolnshire, England, United Kingdom",
        "place_rank": 18,
        "category": "place",
        "type": "town",
        "importance": 0.41000000000000003,
        "icon": "https://nominatim.openstreetmap.org/ui/mapicons/poi_place_town.p.20.png"
    },
    {
        "place_id": 433857,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "node",
        "osm_id": 154386494,
        "boundingbox": [
            "39.8681269",
            "39.9081269",
            "-81.2184426",
            "-81.1784426"
        ],
        "lat": "39.8881269",
        "lon": "-81.1984426",
        "display_name": "Boston, Belmont County, Ohio, United States",
        "place_rank": 20,
        "category": "place",
        "type": "hamlet",
        "importance": 0.3815966805698038,
        "icon": "https://nominatim.openstreetmap.org/ui/mapicons/poi_place_village.p.20.png"
    }
],
    }
  },
  mounted() {

  },
  methods: {
    cons(payload: any) {
      console.log(payload, '~~event caught with the following payload')
      this.searchQuery = payload["searchLocation"]
      this.fetchExternData()
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
        <a class="link is-info">
          <SearchBox @submitSearchEvent="cons"></SearchBox>
        </a>
      </p>
    </div>
    <div class="container">
      <SearchResult class="my-3" v-for="result in searchResults" :cardContent="result"></SearchResult>
    </div>
  </main>
</template>
