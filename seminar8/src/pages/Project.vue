<template>
  <div>
    <section class="projects-intro">
      <div class="projects-intro__content">
        <div class="projects-intro__title-content">
          <h2 class="projects-intro__heading">Our Project</h2>
          <ul class="projects-intro__breadcrumbs">
            <li class="projects-intro__breadcrumbs-item">
              <router-link to="/" class="projects-intro__breadcrumbs-link">
                Home
              </router-link>
            </li>
            <li class="projects-intro__breadcrumbs-item">
              <a href="#" class="projects-intro__breadcrumbs-link">Project</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <div class="projects center">
      <div class="projects__content">
        <!-- categories -->
        <div class="categories">
          <div class="categories__content">
            <button
              v-for="button in listOfButtons"
              :key="button.id"
              @click="changeCurrentCategoryList(button.id)"
              type="button"
              :class="[
                'categories__btn',
                button.id === buttonIsActive ? 'categories__btn_active' : false,
              ]"
            >
              {{ button.title }}
            </button>
          </div>
        </div>
        <!-- projects -->
        <!-- <div class="projects__items">
          <div
            v-for="project in displayedCards"
            :key="project.id"
            class="projects__item"
          >
            <div class="star-box">
              <svg
                @click="changeStarColor"
                class="star"
                :id="project.id"
                width="36"
                height="35"
                viewBox="0 0 36 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_993_156)">
                  <path
                    d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_993_156"
                    x="0.186424"
                    y="0.431396"
                    width="35.6271"
                    height="34.3619"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_993_156"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_993_156"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <img
              class="projects__item-image"
              :src="project.src"
              :alt="project.alt"
            />
            <div class="projects__item-content">
              <div class="projects__item-box">
                <p class="projects__item-title">{{ project.title }}</p>
                <p class="projects__item-subtitle">
                  {{ project.subject }}
                </p>
              </div>
              <router-link
                :to="{ name: 'ProjectDetails', params: { id: project.id } }"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                        <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
              </router-link>
            </div>
          </div>
        </div> -->
        <ProjectCards :projects="displayedCards" />

        <PaginationComp
          :totalNumberPaginationPages="setTotalNumberOfPages()"
          :currentPage="currentPage"
          @pagechanged="changeCurrentPage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PaginationComp from "../components/Pagination.vue";
import ProjectCards from "../components/ProjectCard.vue"
import { mapGetters } from "vuex";

export default {
  name: "ProjectPage",

  watch: {
    $route() {
      //   console.log(to, from);
      this.currentPage = this.$route.params.page;
    },
  },

  components: {
    PaginationComp, ProjectCards
  },

  data() {
    return {
      currentPage: 1,
      limitOfCardsPerPage: 8,

      currentCategoryList: [],

      listOfButtons: [
        { id: "bathroom", title: "Bathroom" },
        { id: "bedroom", title: "Bedroom" },
        { id: "kitchen", title: "Kitchen" },
        { id: "livingroom", title: "LivingArea" },
      ],
      buttonIsActive: "kitchen",
    };
  },

  methods: {
    setTotalNumberOfPages() {
      //вычисляем общее кол-во страниц
      return Math.ceil(
        this.currentCategoryList.length / this.limitOfCardsPerPage
      );
    },
    paginateListOfCards(currentCategoryList) {
      const newList = currentCategoryList;
      // console.log(newList);
      let page = this.currentPage;
      let perPage = this.limitOfCardsPerPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return newList.slice(from, to);
    },
    changeCurrentPage(page) {
      // console.log(page);
      this.currentPage = page;
    },
    changeCurrentCategoryList(id) {
      const buttonId = id;
      this.currentCategoryList = [];
      this.getAllCategoriesList.forEach((category) => {
        if (category.tag === buttonId) {
          this.buttonIsActive = buttonId;
          return this.currentCategoryList.push(category);
        }
      });
    },
    changeStarColor(e) {
      const star = e.target.closest(".star");
      this.currentCategoryList.forEach((project) => {
        if (star.id === project.id) {
          star.classList.toggle("star_active");
        }
      });
    },
    updatedCurrentCategoryiesList() {
      return (this.currentCategoryList = this.changeCurrentCategoryList);
    },
  },
  computed: {
    displayedCards() {
      return this.paginateListOfCards(this.currentCategoryList);
    },
    ...mapGetters(["getAllCategoriesList"]),
  },

  //Начальная активная категория
  created() {
    this.changeCurrentCategoryList("kitchen");
  },
};
</script>

<style scoped lang="scss">
.projects-intro {
  padding-top: 50px;
  margin-bottom: 200px;

  &__content {
    background-image: url("@/assets/images/project_banner.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
  }

  &__title-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    // width: 503px;
    padding: 41px 78px;
    border-radius: 37px 37px 0px 0px;
    background: #fff;
    // max-width: 503px;
    margin-top: 178px;
  }

  &__heading {
    color: #292f36;
    font-family: Arial, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 50px;
    line-height: 1.25;
    margin: 0;
  }

  &__breadcrumbs {
    margin: 0;
    padding: 0;
  }

  &__breadcrumbs-item {
    display: inline-block;
    align-items: center;

    &:not(:last-child)::after {
      content: "/";
      margin-left: 8px;
      margin-right: 8px;
    }
  }

  &__breadcrumbs-link {
    color: #4d5053;
    font-family: Arial, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 22px;
    line-height: 1.5;
    letter-spacing: 0.22px;

    &:hover {
      color: #cda274;
    }

    &:active {
      color: #4d5053;
    }

    &:focus {
      color: #cda274;
    }
  }
}

.categories {
  margin-bottom: 61px;

  &__content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    border-radius: 18px;
    border: 1px solid #e7e7e7;
    margin-left: 140px;
    margin-right: 140px;
  }

  &__btn {
    color: #292f36;
    font-family: Arial, sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 18px;
    line-height: 1.25;
    text-align: center;
    letter-spacing: 0.36px;
    border: none;
    border-radius: 18px;
    background-color: #ffffff;
    padding: 26px 66px;
    width: 230px;

    &:hover {
      background-color: #cda274;
    }

    &:focus {
      color: #ffffff;
      background-color: #292f36;
    }
  }

  &__btn_active {
    color: #ffffff;
    background-color: #292f36;
  }
}

.projects {
  margin-bottom: 200px;

  &__items {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 30px;
    max-height: 3230px;
    margin-bottom: 61px;

  }

  &__item {
    max-width: calc(50% - 30px);
    position: relative;

    &:hover {
      background: #f4f0ec;
    }

    &:hover circle {
      fill: white;
    }

  }

  &__item-image {
    display: flex;
    width: 100%;
  }

  &__item-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 22px;
  }

  &__item-box {
    display: flex;
    min-width: 290px;
    height: 70px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-content: flex-start;
    justify-content: flex-end;
  }

  &__item-title {
    color: #292f36;
    font-family: Arial, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 25px;
    line-height: 1.25;
    letter-spacing: 0.5px;
    margin: 0;
  }

  &__item-subtitle {
    color: #4d5053;
    font-family: Arial, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 22px;
    line-height: 1.5;
    letter-spacing: 0.22px;
    margin: 0;
  }

  &__item-button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    height: 52px;
    width: 52px;
    border-radius: 50%;
    background-color: #f4f0ec;
    cursor: pointer;
    padding: 0;

    &:hover {
      background-color: #ffffff;
      border: 1px solid #e7e7e7;
    }

    &:active {
      background-color: #4d5053;
      border: none;
    }

    &:focus {
      background-color: #cda274;
      border: none;
    }
  }
}

.star-box {
  position: absolute;
  top: 5px;
  right: 5px;
}

.star_active path {
  fill: #ffa928;
}
</style>
