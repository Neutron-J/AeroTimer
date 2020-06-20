<template>
  <div>
    <h5> {{ step.stepAction }} </h5>
    <p> {{ step.durationSecs }} </p>
    <p> {{ step.stepText }} </p>
  </div>
</template>

<script>
export default {
  name: 'RecipeStep',
  props: {
    step: {
      type: Object,
      default: function () {
        return {
          id: 1,
          stepAction: '',
          durationSecs: 2,
          stepText: ''
        }
      }
    }
  }
}
</script>

<style>

</style>
