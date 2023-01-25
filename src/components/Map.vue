<script lang="ts">
import L from 'leaflet/dist/leaflet.js'
console.log('checking the window object for L', L)
import { defineComponent } from 'vue'

export default defineComponent({
  // type inference enabled
  props: {
    msg: { type: String, required: true }
  },
  data() {
    return {
      map: {},
      count: 1
    }
  },
  mounted() {
    console.log('this.map', this.map)
    this.map = L.map('map').setView([51.505, -0.09], 13)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
    console.log('this.map', this.map)
    

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
 
            <figure class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
            </figure>
       
</template>
