<template>
  <div>
    <h1>Recipe Name {{ recipe }} Id: {{ recipeId }}</h1>
  </div>
</template>

<script>

export default {
  name: 'Recipe',
  props: {
    recipeId: {
      type: Number,
      default: 1
    }
  },
  computed: {
    recipe () {
      return this.$store.state.recipes[this.recipeId].name
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
