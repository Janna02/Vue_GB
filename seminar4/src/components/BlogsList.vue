<template>
  <div class="blogs-list">
    <div class="blogs-list-content">
      <div class="blogs-container" v-if="showDetails === false">
        <blog
          @showFullBlog="showAll"
          v-for="blog in filteredItems"
          :key="blog.id"
          :blog="blog"
        ></blog>
      </div>
      <div class="blogs-container" v-if="showDetails === true">
        <blog @showFullBlog="showAll" :blog="filteredBlog"></blog>
        <blog-details :blog="filteredBlog"></blog-details>
      </div>
      <div class="tags-container">
        <div
          class="tag"
          :class="{ 'tag-clicked': tag === filterItem }"
          v-for="tag in getTags"
          :key="tag"
          @click="clickTag(tag)"
        >
          {{ tag }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Blog from "./Blog.vue";
import BlogDetails from "./BlogDetails.vue";

export default {
  name: "BlogsList",
  components: {
    Blog,
    BlogDetails,
  },

  data() {
    return {
      blogs: [
        {
          id: 1,
          header: "Let’s Get Solution for Building Construction Work",
          img: "img/Image (1).png",
          date: "26 December, 2022",
          crumbs: "Interior / Home / Bedroom",
          text1:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          tags: ["Bedroom"],
          detailsHeader: "Design sprints are great",
          detailsText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          detailsText1:
            "1. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          detailsText2:
            "2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          detailsText3:
            "3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          detailsImg: "img/photo14.png",
          detailsSubText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        },
        {
          id: 2,
          header: "Let’s Get Solution for Building Construction Work",
          img: "img/Image (2).png",
          date: "26 December, 2023",
          crumbs: "Interior / Home / Architecture",
          text1:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          tags: ["Architecture"],
          detailsHeader: "Design sprints are great",
          detailsText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          detailsText1:
            "1. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          detailsText2:
            "2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          detailsText3:
            "3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          detailsImg: "img/photo14.png",
          detailsSubText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        },
        {
          id: 3,
          header: "Let’s Get Solution for Building Construction Work",
          img: "img/Image (3).png",
          date: "26 December, 2022",
          crumbs: "Interior / Home / Kitchen Planning",
          text1:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          tags: ["Kitchen Planning"],
          detailsHeader: "Design sprints are great",
          detailsText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          detailsText1:
            "1. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          detailsText2:
            "2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          detailsText3:
            "3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          detailsImg: "img/photo14.png",
          detailsSubText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        },
        {
          id: 4,
          header: "Let’s Get Solution for Building Construction Work",
          img: "img/Image (4).png",
          date: "26 December, 2022",
          crumbs: "Interior / Home / Kitchen",
          text1:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          tags: ["Kitchen"],
          detailsHeader: "Design sprints are great",
          detailsText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          detailsText1:
            "1. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          detailsText2:
            "2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          detailsText3:
            "3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          detailsImg: "img/photo14.png",
          detailsSubText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        },
        {
          id: 5,
          header: "Let’s Get Solution for Building Construction Work",
          img: "img/Image (5).png",
          date: "26 December, 2022",
          crumbs: "Interior / Home / Building",
          text1:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          tags: ["Building"],
          detailsHeader: "Design sprints are great",
          detailsText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          detailsText1:
            "1. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          detailsText2:
            "2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          detailsText3:
            "3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          detailsImg: "img/photo14.png",
          detailsSubText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        },
      ],
      filterItem: "",
      filterId: "",
      showDetails: false,
    };
  },

  mounted() {},

  computed: {
    getTags() {
      let tags = [];
      this.blogs.forEach((el) => {
        tags.push(...el.tags);
      });
      return new Set(tags);
    },

    filteredItems() {
      return this.blogs.filter((blog) => {
        if (this.filterItem === "") {
          return this.blogs;
        } else {
          return blog.tags.includes(this.filterItem);
        }
      });
    },

    filteredBlog() {
      const blog = this.blogs.filter((blog) => {
        return blog.id === Number(this.filterId);
      });

      return blog[0];
    },
  },

  methods: {
    clickTag(tag) {
      if (this.filterItem === tag) {
        this.filterItem = "";
      } else {
        this.filterItem = tag;
      }
    },

    showAll(id) {
      this.filterId === id ? (this.filterId = "") : (this.filterId = id);
      this.showDetails = !this.showDetails;
    },
  },
};
</script>

<style lang="scss" scoped>
.blogs-list {
  margin-top: 100px;

  &-content {
    padding: 25px;
    display: flex;
    gap: 52px;
    justify-content: space-between;
  }
}

.blogs-container {
  width: 67%;
}

.tags-container {
  width: 33%;
}

/* Стили для тегов */
.tag {
  padding: 9px 30px;
  border-radius: 10px;
  background: var(--background-color);
  color: var(--primary-text-color);
  text-align: center;
  font-family: var(--sans-serif-font);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 0.36px;
  cursor: pointer;

  &:hover {
    background: var(--primary-text-color);
    color: #fff;
  }

  &-clicked {
    background: var(--primary-text-color);
    color: #fff;
  }
}

/* Стили для блога */
.blog {
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #e7e7e7;

  &-content {
    margin: 15px;

    &-img {
      width: 100%;
      border-radius: 50px;

      &-wrapper {
        margin-bottom: 46px;
      }
    }
  }

  &-header {
    margin-bottom: 21px;

    &__text {
      color: var(--primary-text-color);
      font-family: var(--serif-font);
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%; /* 62.5px */
      letter-spacing: 1px;
    }
  }

  &-footer {
    display: flex;
    justify-content: space-between;
    margin-bottom: 48px;
  }

  &-date {
    &__text {
      color: var(--secondary-text-color);
      font-family: var(--sans-serif-font);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 24px */
      letter-spacing: 0.16px;
      text-transform: capitalize;
    }
  }

  &-crumbs {
    &__text {
      color: var(--secondary-text-color);
      font-family: var(--sans-serif-font);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 24px */
      letter-spacing: 0.16px;
      text-transform: capitalize;
    }
  }

  &-text {
    color: var(--secondary-text-color);
    font-family: var(--sans-serif-font);
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
  }
}

/* Стили для деталей блога */
.blog-details {
  &-content {
    &-top {
      display: flex;
      padding: 53px 12px;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      border-radius: 50px;
      background: var(--background-color);
      margin-bottom: 27px;

      &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      &__text {
        color: var(--accent-color);
        text-align: center;
        font-family: var(--serif-font);
        font-size: 25px;
        font-style: italic;
        font-weight: 400;
        line-height: 125%; /* 31.25px */
        letter-spacing: 0.5px;
      }
    }

    &-main {
      margin-bottom: 44px;

      &__header {
        color: var(--primary-text-color);
        font-family: var(--serif-font);
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%; /* 62.5px */
        letter-spacing: 1px;
        margin-bottom: 20px;
      }

      &__text {
        color: var(--secondary-text-color);
        font-family: var(--sans-serif-font);
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 33px */
        letter-spacing: 0.22px;
      }
    }

    &-wrap {
      &-img {
        border-radius: 50px;
        width: 100%;

        &-wrapper {
          margin-bottom: 35px;
        }
      }

      &__text {
        text-align: center;
        color: var(--secondary-text-color);
        font-family: var(--sans-serif-font);
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 33px */
        letter-spacing: 0.22px;
      }
    }
  }
}
</style>
