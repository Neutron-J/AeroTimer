// import Vue from 'vue'

export default {

  SET_RECIPE_LIST: (state, { id }) => {
    state.recipesList.push(id)
  },

  SET_RECIPE: (state, { recipe }) => {
    console.log(recipe)
    state.recipes[recipe.id] = recipe
  }

}
