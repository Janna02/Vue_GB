<template>
  <header class="header center">
    <div class="logo">
      <img class="logo-img" src="@/assets/logo.svg" alt="logo" />
      <h2 class="logo-text">Interno</h2>
    </div>

    <nav class="menu">
      <a href="./index.html" class="menu__link">Home</a>
      <a href="#" class="menu__link">Project</a>
      <a href="./blog.html" class="menu__link">Blog</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderWeb",
};
</script>

<style scoped lang="scss">
.header {
  min-height: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-img {
  width: 34px;
  height: 34px;
}

.logo-text {
  color: #292f36;
  font-family: "DM Serif Display", serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}

.menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  gap: 50px;
}

.menu__link {
  color: #292f36;
  text-align: center;
  font-family: "Jost", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}
</style>
