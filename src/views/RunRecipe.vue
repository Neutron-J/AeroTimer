<template>
  <div>
    <div>
      <h1>Recipe Name {{ recipe.name }} Id: {{ recipeId }}</h1>
      <Timer />
    </div>
    <div>
      <RecipeStep
        v-for="step in recipe.steps"
        :key="step.id"
        :step="step"
      />
    </div>
  </div>
</template>

<script>
import Timer from '../components/Timer.vue'
import RecipeStep from '../components/RecipeStep.vue'

export default {
  name: 'RunRecipe',
  components: {
    Timer,
    RecipeStep
  },
  props: {
    recipeId: {
      type: Number,
      default: 1
    }
  },
  computed: {
    recipe () {
      return this.$store.state.recipes[this.recipeId]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
