<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Hi Vue.js App" />
    <header>
      <h1>My Blog</h1>
    </header>
    <main>
      <blogs-list></blogs-list>
    </main>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import BlogsList from "./components/BlogsList.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    BlogsList,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

:root {
  --primary-text-color: #292f36;
  --secondary-text-color: #4d5053;
  --accent-color: #cda274;
  --background-color: #f4f0ec;
  --white-color: #fff;
  --serif-font: "DM Serif Display", serif;
  --sans-serif-font: "Jost", sans-serif;
  --box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
}
</style>
