<template>
  <div>
    <h1>Create a new recipe</h1>
    <form @:submit.prevent="onSubmit">
      <!-- Will need to add an ID -->
      <div class="input__container">
        <label for="recipe-name">
          Name
          <input
            id="recipe-name"
            v-model="form.name"
            name="recipe-name"
            type="text"
          >
        </label>
      </div>
      <div class="input__container">
        Standard or Inverted method?
        <label for="false">
          <input
            id="false"
            v-model="form.inverted"
            name="orientation"
            value="false"
            type="radio"
          >
          Standard
        </label>
        <label for="true">
          <input
            id="true"
            v-model="form.inverted"
            name="orientation"
            value="true"
            type="radio"
          >
          Inverted
        </label>
      </div>
      <div class="input__container">
        <label for="grind-setting">
          Grind setting
        </label>
        <select
          id="grind-setting"
          v-model="form.grindSetting"
        >
          <option value="">
            --Please choose a grind setting--
          </option>
          <option value="Extra Fine">
            Extra Fine
          </option>
          <option value="Fine">
            Fine
          </option>
          <option value="Medium Fine">
            Medium Fine
          </option>
          <option value="Medium">
            Medium
          </option>
          <option value="Medium Coarse">
            Medium Coarse
          </option>
          <option value="Coarse">
            Coarse
          </option>
          <option value="Extra Coarse">
            Extra Coarse
          </option>
        </select>
      </div>
      <div class="input__container">
        <label for="coffee-weight">
          Coffee Weight
          <input
            id="coffee-weight"
            v-model="form.coffeeWeight"
            name="coffee-weight"
            type="text"
          >
        </label>
      </div>
      <div class="input__container">
        Metric or Imperial Weight
        <label for="true">
          <input
            id="true"
            v-model="form.coffeeWeightMeasure"
            name="coffee-weight-measure"
            value="true"
            type="radio"
          >
          Metric
        </label>
        <label for="false">
          <input
            id="false"
            v-model="form.coffeeWeightMeasure"
            name="coffee-weight-measure"
            value="false"
            type="radio"
          >
          Imperial
        </label>
      </div>
      <div class="input__container">
        <label for="">
          Coffee to water ratio <br>
          <span>1:</span>
          <input
            id="ratio"
            v-model="form.ratio"
            name="ratio"
            type="text"
          >
        </label>
      </div>
      <div class="input__container">
        <label for="total-liquid">
          Total liquid
          <input
            id="total-liquid"
            v-model="form.totalLiquid"
            name="total-liquid"
            type="text"
          >
        </label>
      </div>
      <div class="input__container">
        <label for="water-temp">
          Water Temperature
          <input
            id="water-temp"
            v-model="form.waterTemp"
            name="water-temp"
            type="text"
          >
        </label>
      </div>
      <div class="input__container">
        Metric or Imperial Temperature
        <label for="true">
          <input
            id="true"
            v-model="form.waterTempMetric"
            name="temp-measure"
            value="true"
            type="radio"
          >
          Metric
        </label>
        <label for="false">
          <input
            id="false"
            v-model="form.waterTempMetric"
            name="temp-measure"
            value="false"
            type="radio"
          >
          Imperial
        </label>
      </div>
      <div class="button__container">
        <button @click="addRecipe">
          Add +
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreateRecipe',
  data () {
    return {
      form: {
        id: 3,
        name: '',
        inverted: false,
        grindSetting: '',
        coffeeWeight: '',
        coffeeWeightMeasure: true,
        ratio: '',
        totalLiquid: '',
        waterTemp: '',
        waterTempMetric: true
      }
    }
  },
  methods: {
    addRecipe () {
      this.$store.commit('SET_RECIPE', { recipe: this.form })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
