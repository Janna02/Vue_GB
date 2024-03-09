<template>
  <div class="box-content">
    <main class="main">
      <section class="project center">
        <div class="project__info">
          <div class="project__info__heading">
            <h1 class="project__info__heading_text">Our Project</h1>
            <nav class="project__info__heading_breadcrumb">
              <ul class="project__info__heading_breadcrumb_ul">
                <li class="project__info__heading_breadcrumb_li">
                  <router-link
                    to="/"
                    class="project__info__heading_breadcrumb_link"
                    >Home</router-link
                  >
                </li>
                <li class="project__info__heading_breadcrumb_li">
                  <router-link
                    to="/Project"
                    class="project__info__heading_breadcrumb_link"
                    >Project</router-link
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <section class="categories center">
        <div class="categories__tags">
          <div class="categories__tags_button">
            <button
              @click="cardsFilter"
              v-for="button in buttons"
              :key="button.id"
              :id="button.id"
              class="categories__tags_btn"
            >
              <h1 class="categories__tags_btn_text">{{ button.title }}</h1>
              <!-- @click="show = button.id"  -->
            </button>
          </div>
        </div>
        <div class="categories__all">
          <ProjectCard
            :project="project"
            v-for="project in currentCards"
            :key="project.id"
          />
        </div>
      </section>
      <section class="pagination center">
        <ul class="pagination__list">
          <li class="pagination__list_item">
            <a class="pagination__list_item_hov" href="#">
              <h1 class="pagination__list_item_text"></h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="52"
                viewBox="0 0 53 52"
                fill="none"
              >
                <circle cx="26.5" cy="26" r="26" fill="#F4F0EC" />
              </svg>
            </a>
          </li>
          <li class="pagination__list_item">
            <a class="pagination__list_item_hov" href="#">
              <h1 class="pagination__list_item_text"></h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="52"
                viewBox="0 0 53 52"
                fill="none"
              >
                <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
              </svg>
            </a>
          </li>
          <li class="pagination__list_item">
            <a class="pagination__list_item_hov" href="#">
              <h1 class="pagination__list_item_text"></h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="52"
                viewBox="0 0 53 52"
                fill="none"
              >
                <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
              </svg>
            </a>
          </li>

          <li class="pagination__list_item">
            <a class="pagination__list_item_hov" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="52"
                viewBox="0 0 53 52"
                fill="none"
              >
                <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                <path
                  d="M23.5571 32L29.5 25.3143L23.5571 18.6286"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
import ProjectCard from "../components/ProjectCard.vue";
export default {
  name: "ProjectPage",
  components: {
    ProjectCard,
  },

  data() {
    return {
      buttons: [
        { id: 1, title: "Bathroom" },
        { id: 2, title: "Bedroom" },
        { id: 3, title: "Kitchen" },
        { id: 4, title: "Living Area" },
      ],
      // show: 2,
      // currentTab: "Bedroom",

      cards: [
        {
          id: 1,
          nameid: "Bedroom",
          images: require("@/assets/imgs/project-bedroom1.png"),
          text: "Minimal Bedroom",
          link1: "Decor",
          link2: "Artchitecture",
        },
        {
          id: 2,
          nameid: "Bedroom",
          images: require("@/assets/imgs/project-bedroom2.png"),
          text: "Minimal Bedroom",
          link1: "Decor",
          link2: "Artchitecture",
        },
        {
          id: 3,
          nameid: "Bedroom",
          images: require("@/assets/imgs/project-bedroom3.png"),
          text: "Classic Minimal Bedroom",
          link1: "Decor",
          link2: "Artchitecture",
        },
        {
          id: 4,
          nameid: "Bedroom",
          images: require("@/assets/imgs/project-bedroom4.png"),
          text: "Modern Bedroom",
          link1: "Decor",
          link2: "Artchitecture",
        },
        {
          id: 5,
          nameid: "Bedroom",
          images: require("@/assets/imgs/project-bedroom5.png"),
          text: "Minimal Bedroom table",
          link1: "Decor",
          link2: "Artchitecture",
        },
        {
          id: 6,
          nameid: "Bedroom",
          images: require("@/assets/imgs/project-bedroom6.png"),
          text: "System Table",
          link1: "Decor",
          link2: "Artchitecture",
        },
        {
          id: 7,
          nameid: "Bedroom",
          images: require("@/assets/imgs/project-bedroom7.png"),
          text: "Modern Medroom",
          link1: "Decor",
          link2: "Artchitecture",
        },
        {
          id: 8,
          nameid: "Bedroom",
          images: require("@/assets/imgs/project-bedroom8.png"),
          text: "Modern Medroom",
          link1: "Decor",
          link2: "Artchitecture",
        },
        {
          id: 9,
          nameid: "Kitchen",
          images: require("@/assets/imgs/project-bedroom7.png"),
          text: "Modern Medroom",
          link1: "Decor",
          link2: "Artchitecture",
        },
        {
          id: 10,
          nameid: "Kitchen",
          images: require("@/assets/imgs/project-bedroom8.png"),
          text: "Modern Medroom",
          link1: "Decor",
          link2: "Artchitecture",
        },
        {
          id: 11,
          nameid: "Bathroom",
          images: require("@/assets/imgs/project-bedroom6.png"),
          text: "Modern Medroom",
          link1: "Decor",
          link2: "Artchitecture",
        },
        {
          id: 12,
          nameid: "Bathroom",
          images: require("@/assets/imgs/project-bedroom7.png"),
          text: "Modern Medroom",
          link1: "Decor",
          link2: "Artchitecture",
        },
        {
          id: 13,
          nameid: "Living Area",
          images: require("@/assets/imgs/project-bedroom8.png"),
          text: "Modern Medroom",
          link1: "Decor",
          link2: "Artchitecture",
        },
        {
          id: 14,
          nameid: "Living Area",
          images: require("@/assets/imgs/project-bedroom6.png"),
          text: "Modern Medroom",
          link1: "Decor",
          link2: "Artchitecture",
        },
      ],

      currentCards: [
        {
          id: 1,
          nameid: "Bedroom",
          images: require("@/assets/imgs/project-bedroom1.png"),
          text: "Minimal Bedroom",
          link1: "Decor",
          link2: "Artchitecture",
        },
        {
          id: 2,
          nameid: "Bedroom",
          images: require("@/assets/imgs/project-bedroom2.png"),
          text: "Minimal Bedroom",
          link1: "Decor",
          link2: "Artchitecture",
        },
        {
          id: 3,
          nameid: "Bedroom",
          images: require("@/assets/imgs/project-bedroom3.png"),
          text: "Classic Minimal Bedroom",
          link1: "Decor",
          link2: "Artchitecture",
        },
        {
          id: 4,
          nameid: "Bedroom",
          images: require("@/assets/imgs/project-bedroom4.png"),
          text: "Modern Bedroom",
          link1: "Decor",
          link2: "Artchitecture",
        },
        {
          id: 5,
          nameid: "Bedroom",
          images: require("@/assets/imgs/project-bedroom5.png"),
          text: "Minimal Bedroom table",
          link1: "Decor",
          link2: "Artchitecture",
        },
        {
          id: 6,
          nameid: "Bedroom",
          images: require("@/assets/imgs/project-bedroom6.png"),
          text: "System Table",
          link1: "Decor",
          link2: "Artchitecture",
        },
        {
          id: 7,
          nameid: "Bedroom",
          images: require("@/assets/imgs/project-bedroom7.png"),
          text: "Modern Medroom",
          link1: "Decor",
          link2: "Artchitecture",
        },
        {
          id: 8,
          nameid: "Bedroom",
          images: require("@/assets/imgs/project-bedroom8.png"),
          text: "Modern Medroom",
          link1: "Decor",
          link2: "Artchitecture",
        },
      ],
    };
  },

  methods: {
    // shows() {
    //     this.show = !this.show
    // }

    cardsFilter(e) {
      this.currentCards = this.cards.filter(
        (project) => project.nameid === e.target.innerText
      );
      //return this.cards;
    },
  },
  // computed: {
  //     filteredProjects() {
  //         if (this.currentTab)
  //             return this.cards.filter(
  //                 (project) => project.nameid === this.currentTab
  //             );
  //         else return this.cards;
  //     },
  // },
};
</script>

<style lang="scss" scoped></style>
