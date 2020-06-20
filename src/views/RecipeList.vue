<template>
  <section>
    <div>
      <h1>Recipes</h1>
    </div>
    <div class="recipes__container">
      <div
        v-for="recipe in recipes"
        :key="recipe.id"
        class="recipes__item"
      >
        <h3>{{ recipe.name }}</h3>
        <div class="recipe-info__container">
          <div class="recipe-info__item">
            <h4>
              Method type
            </h4>
            <p>
              {{ recipe.inverted ? 'Inverted' : 'Standard' }}
            </p>
          </div>
          <div class="recipe-info__item">
            <h4>
              Grind setting
            </h4>
            <p>
              {{ recipe.grindSetting }}
            </p>
          </div>
          <div class="recipe-info__item">
            <h4>
              Coffee weight
            </h4>
            <p>
              {{ recipe.coffeeWeight }} {{ recipe.weightMeasure }}
            </p>
          </div>
          <div class="recipe-info__item">
            <h4>
              Total liquid
            </h4>
            <p>
              {{ recipe.totalLiquid }} {{ recipe.weightMeasure }}
            </p>
          </div>
        </div>
        <router-link
          :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
          class="nav-link"
        >
          View {{ recipe.name }}
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RecipeList',
  data () {
    return {
      recipesList: this.$store.state.recipesList,
      recipes: this.$store.state.recipes
    }
  },
  computed: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
