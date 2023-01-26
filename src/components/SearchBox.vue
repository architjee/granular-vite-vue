<template>

    <div class="field has-addons">
        <div class="control">
            <input class="input" type="text" placeholder="Search for a Location" v-model="searchLocation">
        </div>
        <div class="control">
            <a class="button is-info" @click="submitMySearch()">
                Search
            </a>
        </div>
    </div>
</template>

<script lang="ts">
export default {
  props: ['initialLocation'],
  data(){
   return {
     searchLocation: 'Boston MA'

   }
  },
  mounted(){
    this.searchLocation = this.initialLocation
  },
  methods: {
    submitMySearch() {
      this.$emit('submitSearchEvent', {"searchLocation": this.searchLocation})
    }
  }
}
</script>
