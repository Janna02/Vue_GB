<template>
    <footer class="footer center">
    <div class="footer-logo">
        <router-link to="/" class="logo">
        <img class="logo-img" src="@/assets/images/logo.svg" alt="logo" />
        <h2 class="logo-text">Interno</h2>
      </router-link>
      <h2 class="footer-text">
        It is a long established fact that a reader will be distracted looking.
      </h2>
      <div class="icons">
        <a href="#">
          <img class="icon" src="@/assets/images/twitter.svg" alt="twitter" />
        </a>
        <a href="#">
          <img class="icon" src="@/assets/images/in.svg" alt="in" />
        </a>
      </div>
    </div>
    <div class="footer-pages">
      <h2 class="footer-title">Pages</h2>
      <router-link to="/" class="footer-text" href="#">Home</router-link>
      <router-link to="/Project" class="footer-text" href="#">Project</router-link>
      <router-link to="/Blog" class="footer-text" href="#">Blog</router-link>
    </div>
    <div class="footer-none"></div>
    <div class="footer-contacts">
      <h2 class="footer-title">Contacts</h2>
      <h2 class="footer-text">
        55 East Birchwood Ave. Brooklyn, New York 11201
      </h2>
      <h2 class="footer-text">contact@interno.com</h2>
      <h2 class="footer-text">(123) 456 - 7890</h2>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'FooterComp',
};
</script>

