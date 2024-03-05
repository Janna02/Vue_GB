<template>
  <main class="main">
    <div class="tags">
      <div>
        <button
          @click="cardsFilter"
          v-for="button in buttons"
          :key="button.id"
          :id="button.id"
          class="tags_btn"
        >
          <h1 class="tags_btn-text">{{ button.title }}</h1>
        </button>
      </div>
    </div>
    <div class="cards">
      <ProjectCard
        :project="project"
        v-for="project in currentCards"
        :key="project.id"
      />
    </div>
  </main>
</template>

<script>
import ProjectCard from "../components/ProjectCard.vue";
export default {
  name: "ProjectVue",
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

      // currentTab: "Bedroom",

      cards: [
        {
          id: 1,
          nameid: "Bedroom",
          text: "Minimal Bedroom",
        },
        {
          id: 2,
          nameid: "Bedroom",
          text: "Minimal Bedroom",
        },
        {
          id: 3,
          nameid: "Bedroom",
          text: "Classic Minimal Bedroom",
        },
        {
          id: 4,
          nameid: "Bedroom",
          text: "Modern Bedroom",
        },
        {
          id: 5,
          nameid: "Bedroom",
          text: "Minimal Bedroom table",
        },
        {
          id: 6,
          nameid: "Bedroom",
          text: "System Table",
        },
        {
          id: 7,
          nameid: "Bedroom",
          text: "Modern Medroom",
        },
        {
          id: 8,
          nameid: "Bedroom",
          text: "Modern Medroom",
        },
        {
          id: 9,
          nameid: "Kitchen",
          text: "Modern Medroom",
        },
        {
          id: 10,
          nameid: "Kitchen",
          text: "Modern Medroom",
        },
        {
          id: 11,
          nameid: "Bathroom",
          text: "Modern Medroom",
        },
        {
          id: 12,
          nameid: "Bathroom",
          text: "Modern Medroom",
        },
        {
          id: 13,
          nameid: "Living Area",
          text: "Modern Medroom",
        },
        {
          id: 14,
          nameid: "Living Area",
          text: "Modern Medroom",
        },
      ],

      currentCards: [
        {
          id: 1,
          nameid: "Bedroom",
          text: "Minimal Bedroom",
        },
        {
          id: 2,
          nameid: "Bedroom",
          text: "Minimal Bedroom",
        },
        {
          id: 3,
          nameid: "Bedroom",
          text: "Classic Minimal Bedroom",
        },
        {
          id: 4,
          nameid: "Bedroom",
          text: "Modern Bedroom",
        },
        {
          id: 5,
          nameid: "Bedroom",
          text: "Minimal Bedroom table",
        },
        {
          id: 6,
          nameid: "Bedroom",
          text: "System Table",
        },
        {
          id: 7,
          nameid: "Bedroom",
          text: "Modern Medroom",
        },
        {
          id: 8,
          nameid: "Bedroom",
          text: "Modern Medroom",
        },
      ],
    };
  },

  methods: {
    cardsFilter(el) {
      this.currentCards = this.cards.filter(
        (project) => project.nameid === el.target.innerText
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.tags {
  display: flex;
  justify-content: center;
  &_btn {
    border: none;
    &-text {
      color: #292f36;
      text-align: center;
      font-family: Jost;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 125%;
      letter-spacing: 0.36px;
      background-color: #fff;
      padding: 16px 20px;
      cursor: pointer;
      &:hover {
        color: #fff;
        background-color: #cda274;
      }
    }
  }
}
.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: start;
  column-gap: 28px;
}
</style>
