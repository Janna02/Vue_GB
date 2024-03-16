<template>
  <main class="home-wrapper">
    <BannerHomeComp />

    <!--  -->

    <div class="heading center">
      <div class="heading-title">Follow Our Projects</div>
      <div class="heading-subtitle">
        It is a long established fact that a reader will be distracted by the of
        readable content of page lookings at its layouts points.
      </div>
    </div>

    <!-- kitchen-grid section -->

    <section class="project center">
      <div class="kitchen-grid">
        <div v-for="item in kitchenItems" :key="item.id" class="kitchen">
          <img :src="item.imageSrc" :alt="item.alt" class="project-image" />
          <div class="project-block_text">
            <div class="project-subcontent">
              <h3 class="project-title">{{ item.title }}</h3>
              <h3 class="project-subtitle">{{ item.subtitle }}</h3>
            </div>
            <router-link to="/Project">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="53"
                viewBox="0 0 52 53"
                fill="none"
              >
                <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                <path
                  d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- end section  -->

    <section class="counter">
      <div class="counter-block center">
        <div class="counter-item">
          <h2 class="counter-number">12</h2>
          <h2 class="counter-text">Years Of Experience</h2>
        </div>
        <div class="line"></div>
        <div class="counter-item">
          <h2 class="counter-number">85</h2>
          <h2 class="counter-text">Success Project</h2>
        </div>
        <div class="line"></div>
        <div class="counter-item">
          <h2 class="counter-number">15</h2>
          <h2 class="counter-text">Active Project</h2>
        </div>
        <div class="line"></div>
        <div class="counter-item">
          <h2 class="counter-number">95</h2>
          <h2 class="counter-text">Happy CUstomers</h2>
        </div>
      </div>
    </section>

    <!-- blog section  -->

    <section class="blog center">
      <div class="heading">
        <div class="heading-title">Articles & News</div>
        <div class="heading-subtitle">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using.
        </div>
      </div>

      <div class="blog__items">
        <ArticleCard class="trio"
            v-for="item in displayedCards"
            :key="item.id"
            :item="item"
          />
          
      </div>
    </section>

    <!-- end section -->
  </main>
</template>
<script>
import BannerHomeComp from "../components/BannerHomeComp.vue";
import ArticleCard from "../components/ArticleCard.vue";

import { mapGetters } from "vuex";


export default {
  name: "HomePage",
  components: { BannerHomeComp, ArticleCard },

  data() {
    return {
      //kitchen-grid
      kitchenItems: [
        {
          id: 1,
          imageSrc: "./imgs/kitchen-grid-photo1.png",
          alt: "photo1",
          title: "Modern Kitchen",
          subtitle: "Decor / Architecture",
        },
        {
          id: 2,
          imageSrc: "./imgs/kitchen-grid-photo2.png",
          alt: "photo2",
          title: "Modern Kitchen",
          subtitle: "Decor / Architecture",
        },
        {
          id: 3,
          imageSrc: "./imgs/kitchen-grid-photo3.png",
          alt: "photo3",
          title: "Modern Kitchen",
          subtitle: "Decor / Architecture",
        },
        {
          id: 4,
          imageSrc: "./imgs/kitchen-grid-photo4.png",
          alt: "photo4",
          title: "Modern Kitchen",
          subtitle: "Decor / Architecture",
        },
      ],
    };
  },
  computed: {
    //blog__items
    ...mapGetters(["getTrioListOfCard"]),
    displayedCards() {
      return this.getTrioListOfCard
    },
  },
};
</script>

<style lang="scss" scope> .trio {
   padding-bottom: 96px;
 }
</style>