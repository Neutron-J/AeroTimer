<template>
  <div id="app">
    <h1>
      <span class="italic">Aero</span>Timer
    </h1>
    <Navigation />
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
html {
  font-size: 62.5%;/*10px*/
}
body {
  background-color: $color-light-grey;
  font-weight: 400;
  line-height: 1.65;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-dark-grey;
  font-size: $font-size-default;
}
#app {
  margin-top: 60px;
}
.fade-enter-active, .fade-leave-active {
  transition: all .2s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
h1 {
  font-family: $font-family-heading;
  font-size: $font-size-xxl;
  font-weight: $font-weight-x-bold;
  color: $color-primary;
  letter-spacing: -0.07em;
  .italic {
    font-style: italic;
  }
}
</style>
