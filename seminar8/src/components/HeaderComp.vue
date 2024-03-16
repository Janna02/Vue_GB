<template>
    <header class="header center">
      <nav class="logo">
        <router-link to="/" href="#"> <img class="logo-img" src="@/assets/images/logo.svg" alt="logo" /></router-link>
        <router-link to="/" class="logo-text">Interno</router-link>
      </nav>

      <nav class="menu">
        <router-link to="/"  class="menu__link" href="index.html">Home</router-link>
        <router-link to="/Project" href="#" class="menu__link">Project</router-link>
        <router-link to="/Blog" href="./blog.html" class="menu__link">Blog</router-link>
      </nav>
    </header>
</template>
<script>
export default {
  name: 'HeaderComp',
};
</script>
