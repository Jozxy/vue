<template>
  <div id="app">
    <nav>
      <router-link to="/">v-if</router-link>
      <router-link to="/v-show">v-show</router-link>
      <router-link to="/v-for">v-for</router-link>
      <router-link to="/keys">v-bind:key</router-link>
    </nav>
    
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
nav {
  background: #42b983;
  padding: 1rem;
  margin-bottom: 20px;
}

nav a {
  color: white;
  margin-right: 15px;
  text-decoration: none;
  font-weight: bold;
}

nav a.router-link-active {
  text-decoration: underline;
}

#app {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>