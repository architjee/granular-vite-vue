<template>
    <div class="card">
        <div class="card-content">
            <div class="content">
                {{cardContent}}
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