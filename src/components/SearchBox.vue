<template>

    <div class="field has-addons">
        <div class="control">
            <input class="input" type="text" placeholder="Find a repository">
        </div>
        <div class="control">
            <a class="button is-info">
                Search
            </a>
        </div>
    </div>
</template>

<script lang="ts">
export default {
  methods: {
    submit() {
      this.$emit('someEvent')
    }
  }
}
</script>
