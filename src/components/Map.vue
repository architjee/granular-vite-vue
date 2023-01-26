<script lang="ts">
import L from 'leaflet/dist/leaflet.js'
import { defineComponent } from 'vue'

export default defineComponent({
  // type inference enabled
  props:['selectedLocation'],
  data() {
    return {
      map: {},
      
    }
  },
  mounted() {
    this.map = L.map('map').setView([this.selectedLocation.lat, this.selectedLocation.lon],13)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);



    const circle = L.circle([51.508, -0.11], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(this.map);

    const polygon = L.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047]
    ]).addTo(this.map);

  }
})
</script>

<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <div id="map" class="image is-2by1"></div>
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <p>
          Coordinates are : {{ selectedLocation.lat }} , {{ selectedLocation.lon }}

        </p>
      </div>
    </div>
  </div>

</template>
