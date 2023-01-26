<template>
    <div class="card">
        <div class="card-content">
            <div class="content">
                <h2>
                    {{cardContent.display_name}}
                </h2>
                <p>
                  Coordinates are : Lat:{{ cardContent.lat }} ,Lon:{{ cardContent.lon }}
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: ['cardContent']
})
</script>