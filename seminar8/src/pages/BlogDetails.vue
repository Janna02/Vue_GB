<template>
  <main>
    <div class="top-banner">
      <div class="top-banner__content"></div>
    </div>
    <div class="blog-details center">
      <div class="blog-details__content">
        <article
          v-for="article in currentArticle"
          :key="article.id"
          class="article"
        >
          <div class="article__content">
            <h2 class="article__heading">{{ article.firstheading }}</h2>
            <img class="article__image" :src="article.src" :alt="article.alt" />
            <div class="article__subcontent">
              <p class="article__date">
                {{ article.date }}
              </p>
              <div class="breadcrumbs">
                <ul class="breadcrumbs__list">
                  <li class="breadcrumbs__item">
                    <a href="#" class="breadcrumbs__link">
                      {{ article.firstlink }}
                    </a>
                  </li>
                  <li class="breadcrumbs__item">
                    <a href="#" class="breadcrumbs__link">
                      {{ article.secondlink }}
                    </a>
                  </li>
                  <li class="breadcrumbs__item">
                    <a href="#" class="breadcrumbs__link">
                      {{ article.thirdlink }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p class="article__text">{{ article.firstparagraph }}</p>
            <p class="article__text">{{ article.secondparagraph }}</p>
          </div>
          <div class="quotes">
            <div class="quotes__content">
              <div class="quotes__marks">
                <svg
                  width="74"
                  height="56"
                  viewBox="0 0 74 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M58.2516 0.600003C62.6516 0.600003 66.2516 2.06667 69.0516 5C71.7182 7.93334 73.0516 11.8667 73.0516 16.8C73.0516 25.4667 70.1849 33 64.4516 39.4C58.5849 45.8 51.5849 51.0667 43.4516 55.2L41.4516 51.8C44.7849 49.6667 47.9182 46.9333 50.8516 43.6C53.6516 40.2667 55.8516 36.6667 57.4516 32.8L51.8516 28.6C49.5849 27.1333 47.7182 25.1333 46.2516 22.6C44.7849 20.2 44.0516 17.8667 44.0516 15.6C44.0516 11.3333 45.3849 7.73334 48.0516 4.8C50.5849 2 53.9849 0.600002 58.2516 0.600003ZM17.0516 0.599999C21.4516 0.6 25.0516 2.06667 27.8516 5C30.5182 7.93333 31.8516 11.8667 31.8516 16.8C31.8516 25.4667 28.9849 33 23.2516 39.4C17.3849 45.8 10.3849 51.0667 2.25155 55.2L0.251554 51.8C3.58489 49.6667 6.71822 46.9333 9.65155 43.6C12.4516 40.2667 14.6516 36.6667 16.2516 32.8L10.6516 28.6C8.38489 27.1333 6.51822 25.1333 5.05155 22.6C3.58489 20.2 2.85156 17.8667 2.85156 15.6C2.85156 11.3333 4.18489 7.73333 6.85156 4.8C9.38489 2 12.7849 0.599999 17.0516 0.599999Z"
                    fill="#CDA274"
                  />
                </svg>
              </div>
              <p class="quotes__text">{{ article.quotetext }}</p>
            </div>
          </div>
          <h2 class="article__heading">{{ article.secondheading }}</h2>
          <p class="article__text">{{ article.thirdparagraph }}</p>
          <div class="article__subtext-box">
            <span class="article__subtext-span">{{ article.firstspan }}</span>
            <p class="article__subtext">{{ article.firstsubtext }}</p>
          </div>
          <div class="article__subtext-box">
            <span class="article__subtext-span">{{ article.secondspan }}</span>
            <p class="article__subtext">{{ article.secondsubtext }}</p>
          </div>
          <div class="article__subtext-box">
            <span class="article__subtext-span">{{ article.thirdspan }}</span>
            <p class="article__subtext">{{ article.thirdsubtext }}</p>
          </div>
          <img
            class="article__image"
            :src="article.secondsrc"
            :alt="article.secondalt"
          />
          <p class="article__text">{{ article.forthparagraph }}</p>
        </article>
        <aside class="sidebar">
          <div class="sidebar__content">
            <h3 class="sidebar__heading">{{ sidebarTitle }}</h3>
            <div class="sidebar__buttons-box">
              <button
                v-for="button in buttons"
                :key="button.id"
                @click="changeArticle(button.id)"
                type="button"
                :class="[
                  'sidebar__button',
                  button.id === buttonIsActive
                    ? 'sidebar__button_active'
                    : false,
                ]"
              >
                {{ button.title }}
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BlogDetails",
  data() {
    return {
      currentArticle: [],

      sidebarTitle: "Tags",
      buttons: [
        { id: "kitchen", title: "Kitchen" },
        { id: "bedroom", title: "Bedroom" },
        { id: "building", title: "Building" },
        { id: "architecture", title: "Architecture" },
        { id: "kitchen-planning", title: "Kitchen Planning" },
      ],
      buttonIsActive: "kitchen",
    };
  },
  methods: {
    changeArticle(id) {
      const buttonId = id;
      this.listOfArticles.forEach((article) => {
        if (buttonId === article.id) {
          this.currentArticle = [];
          this.buttonIsActive = id;
          return this.currentArticle.push(article);
        }
      });
    },
  },
  computed: {
    ...mapGetters(["getListOfArticles"]),

    listOfArticles() {
      //Геттер для получения списка статей из хранилища
      return this.$store.getters.getListOfArticles;
    },
  },
  created() {
    this.changeArticle("kitchen");
  },
};
</script>

<style scoped lang="scss">
.top-banner {
  margin-bottom: 200px;
  padding-top: 50px;
}

.top-banner__content {
  background-image: url("@/assets/images/image_laceholder.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  height: 356px;
}

.blog-details {
  margin-bottom: 96px;
}

.blog-details__content {
  display: grid;
  grid-template-columns: 799px 345px;
  justify-content: center;
  align-items: flex-start;
  gap: 52px;
}

.article {
  &__heading {
    color: #292f36;
    font-weight: 400;
    font-style: normal;
    font-size: 50px;
    line-height: 1.25;
    letter-spacing: 1px;
    margin: 0;
    margin-bottom: 21px;
  }

  &__image {
    margin-bottom: 46px;
    max-width: 100%;
  }

  &__subcontent {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 48px;
  }

  &__date {
    color: #4d5053;
    font-family: "Jost", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.16px;
    text-transform: capitalize;
    margin: 0;
  }

  &__text {
    color: #4d5053;
    font-family: "Jost", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 22px;
    line-height: 1.5;
    letter-spacing: 0.22px;
    margin: 0;
    margin-bottom: 35px;

    &:nth-child(3) {
      margin-bottom: 24px;
    }
  }

  &__subtext-box {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 14px;
    margin-bottom: 32px;

    &:nth-child(3) {
      margin-bottom: 44px;
    }
  }

  &__subtext-span {
    color: #cda274;
    font-family: "DM Serif Display", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
    line-height: 1.25;
    letter-spacing: 0.4px;
    margin: 0;
  }

  &__subtext {
    color: #4d5053;
    font-family: "Jost", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 22px;
    line-height: 1.5;
    letter-spacing: 0.22px;
    margin: 0;
  }
}

li {
  list-style-type: none
}

.breadcrumbs {
  &__list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0;
  }

  &__item {
    &:not(:last-child)::after {
      content: "/";
      margin-left: 8px;
      margin-right: 8px;
    }
  }

  &__link {
    color: #4d5053;
    font-family: "Jost", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.16px;
    text-transform: capitalize;
    margin: 0;
    transition: all 0.5s ease-out;

    &:hover {
      color: #cda274;
      transition: all 0.8s ease-out;
    }

    &:active {
      color: #4d5053;
      transition: all 0.8s ease-out;
    }

    &:focus {
      color: #cda274;
      transition: all 0.8s ease-out;
    }
  }
}

.quotes {
  margin-bottom: 27px;
}

.quotes__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 53px 200px;
  border-radius: 50px;
  background: #f4f0ec;
}

.quotes__text {
  color: #cda274;
  font-weight: 400;
  font-style: italic;
  font-size: 25px;
  text-align: center;
  letter-spacing: 0.5px;
  margin: 0;
}

.sidebar {
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
  }

  &__heading {
    color: #292f36;
    text-align: center;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
  }

  &__buttons-box {
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    gap: 10px;
  }

  &__button {
    color: #292f36;
    font-family: "Jost", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    line-height: 1.25;
    letter-spacing: 0.36px;
    border: none;
    border-radius: 10px;
    background-color: #f4f0ec;
    padding: 9px 30px;
    transition: all 0.5s ease-out;

    &:hover {
      background-color: #cda274;
      transition: all 0.8s ease-out;
    }

    &:focus {
      color: #ffffff;
      background-color: #292f36;
      transition: all 0.8s ease-out;
    }
  }

  &__button_active {
    color: #ffffff;
    background-color: #292f36;
  }
}
</style>
