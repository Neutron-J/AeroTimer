<template>
  <nav class="navbar">
    <div class="container">
      <ul class="nav">
        <!-- Add "active" class when you're on that page" -->
        <li class="nav-item">
          <router-link
            to="/"
            class="nav-link"
          >
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/recipes"
            class="nav-link"
          >
            Recipes
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/create"
            class="nav-link"
          >
            Create
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li.nav-item {
  display: inline-block;
  margin: 0 10px;
  font-size: $font-size-m;
}
a {
  color: $color-primary;
  text-decoration: none;
  &.router-link-exact-active {
    font-style: italic;
    font-weight: bold;
  }
  &.router-link-active{

  }
  &:hover {
    text-decoration: underline;
  }
}
</style>
