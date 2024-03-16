<template>
  <main>
    <section class="intro">
      <div class="intro__content">
        <div class="intro__title-content">
          <h2 class="intro__heading">Articles & News</h2>
          <ul class="intro__breadcrumbs">
            <li class="intro__breadcrumbs-item">
              <router-link to="/" class="intro__breadcrumbs-link">
                Home
              </router-link>
            </li>
            <li class="intro__breadcrumbs-item">
              <a href="#" class="intro__breadcrumbs-link"> Blog </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="post center">
      <div class="post__content">
        <h2 class="post__heading">Latest Post</h2>
        <div class="post__subcontent-box">
          <img src="../assets/images/blog_post.png" alt="post image" />
          <article class="post__subcontent">
            <div class="post__subcontent-container">
              <h3 class="post__subcontent-heading">
                Low Cost Latest Invented Interior Designing Ideas
              </h3>
              <p class="post__subcontent-text">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eusem vitae
                turpis dignissim maximus.posuere in. Contrary to popular belief.
              </p>
              <p class="post__subcontent-text">
                Lorem Ipsum is not simply random text. It has roots in a piece
                of classica.
              </p>
            </div>
            <div class="post__subtitle-box">
              <p class="post__subcontent-subtitle">26 December,2022</p>
              <router-link to="/BlogDetails" class="post__button">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                        <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
              </router-link>
            </div>
          </article>
        </div>
      </div>
    </section>
    <section class="news center">
      <div class="news__content">
        <h2 class="news__heading">Articles & News</h2>
        <div class="news__items">
          <ArticleCard
            v-for="item in displayedCards"
            :key="item.id"
            :item="item"
          />
        </div>
        <Pagination
          :totalNumberPaginationPages="setTotalNumberOfPages()"
          :currentPage="currentPage"
          @pagechanged="changeCurrentPage"
        />
      </div>
    </section>
  </main>
</template>

<script>
import ArticleCard from "../components/ArticleCard.vue";
import Pagination from "../components/Pagination.vue";
import { mapGetters } from "vuex";

export default {
  name: "BlogPage",

  components: {
    ArticleCard,
    Pagination,
  },
  data() {
    return {
      currentPage: 1, //Текущая просматриваемая страница
      limitOfCardsPerPage: 6, //Количество карточек на странице
    };
  },
  methods: {
    setTotalNumberOfPages() {
      //Общее кол-во страниц
      return Math.ceil(this.getListOfCards.length / this.limitOfCardsPerPage);
    },
    paginateListOfCards(listOfCards) {
      let page = this.currentPage;
      let perPage = this.limitOfCardsPerPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return listOfCards.slice(from, to);
    },
    changeCurrentPage(page) {
      //   console.log(page);
      this.currentPage = page;
    },
  },
  computed: {
    ...mapGetters(["getListOfCards"]),
    displayedCards() {
      return this.paginateListOfCards(this.getListOfCards);
    },
  },
};
</script>

<style lang="scss" scoped>
.intro {
  margin-bottom: 200px;
}

.intro__content {
  background-image: url("@/assets/images/image_laceholder.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
}

.intro__title-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 503px;
  padding: 41px 78px;
  border-radius: 37px 37px 0px 0px;
  background: #fff;
  max-width: 503px;
  margin-top: 178px;
}

.intro__heading {
  color: #292f36;
  font-family: "DM Serif Display", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 49px;
  line-height: 1.25;
  margin: 0;
}

.intro__breadcrumbs {
  margin: 0;
  padding: 0;
}

.intro__breadcrumbs-item {
  display: inline-block;
  align-items: center;

  &:not(:last-child)::after {
    content: "/";
    margin-left: 8px;
    margin-right: 8px;
  }
}

.intro__breadcrumbs-link {
  color: #4d5053;
  font-family: "Jost", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 22px;
  line-height: 1.5;
  letter-spacing: 0.22px;
}

.news {
  margin-bottom: 200px;
}

.news__heading {
  color: #292f36;
  font-family: "DM Serif Display", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 50px;
  line-height: 1.25;
  letter-spacing: 1px;
  margin: 0;
  margin-bottom: 30px;
}

.news__items {
  display: grid;
  grid-template-columns: repeat(3, calc(34% - 20px));
  grid-template-rows: repeat(2, auto);
  justify-content: center;
  align-content: center;
  gap: 20px;
  margin-bottom: 51px;
}

.post {
  margin-bottom: 150px;
}

.post__heading {
  color: #292f36;
  font-family: "DM Serif Display", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 50px;
  line-height: 1.25;
  letter-spacing: 1px;
  margin: 0;
  margin-bottom: 27px;
}

.post__subcontent-box {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 65px;
  border-radius: 62px;
  border: 1px solid #e7e7e7;
  box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
  padding: 22px;

  &:hover {
    background: #f4f0ec;
  }

  &:hover circle {
    fill: white;
  }

}

.post__subcontent {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: calc(50% - 65px);
  gap: 31px;

}

.post__subcontent-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 469px;
  gap: 22px;

}

.post__subcontent-heading {
  color: #292f36;
  font-family: "DM Serif Display", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 25px;
  line-height: 1.25;
  letter-spacing: 0.5px;
  margin: 0;
}

.post__subcontent-text {
  color: #4d5053;
  font-family: "Jost", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 22px;
  line-height: 1.5;
  letter-spacing: 0.22px;
  margin: 0;
  margin-bottom: 10px;
}

.post__subtitle-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.post__subcontent-subtitle {
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

.post__button {
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
  transition: all 0.8s ease-out;


}

.post__button:nth-child(1) {
  background-color: #ffffff;
}
</style>
