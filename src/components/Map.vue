<script lang="ts">
import L from 'leaflet/dist/leaflet.js'
import { defineComponent } from 'vue'

export default defineComponent({
  // type inference enabled
  
  data() {
    return {
      map: {},
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
 <div class="card">
      <div class="card-image">
        <figure class="image">
          <div id="map" class="image is-2by1"></div>
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">John Smith</p>
            <p class="subtitle is-6">@johnsmith</p>
          </div>
        </div>

        <div class="content">
          Population of this location is :
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>

</template>
