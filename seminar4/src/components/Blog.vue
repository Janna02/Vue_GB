<template>
  <div class="blog" @click="showDetails(blog.id)">
    <div class="blog-content">
      <div class="blog-header">
        <p class="blog-header__text">{{ blog.header }}</p>
      </div>
      <div class="blog-content-img-wrapper">
        <img class="blog-content-img" :src="blog.img" alt="blog-img" />
      </div>
      <div class="blog-footer">
        <div class="blog-date">
          <p class="blog-date__text">{{ blog.date }}</p>
        </div>
        <div class="blog-crumbs">
          <p class="blog-crumbs__text">{{ blog.crumbs }}</p>
        </div>
      </div>
      <div class="blog-text">
        {{ blog.text1 }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InteriorDesignWebsiteVueCliBlog",

  props: ["blog"],
  methods: {
    showDetails(id) {
      this.$emit("showFullBlog", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.blog {
  margin-bottom: 96px;

  &__title {
    margin-bottom: 10px;
    color: var(--primary-text-color);
    text-align: center;
    font-family: var(--serif-font);
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
  }

  &__text {
    margin-bottom: 52px;
    width: 811px;
    margin-left: auto;
    margin-right: auto;
    color: var(--secondary-text-color);
    text-align: center;
    font-family: var(--sans-serif-font);
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
  }

  &__items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  &__item {
    position: relative;
    padding: 20px;
    border-radius: 62px;
    border: 1px solid #e7e7e7;
    box-shadow: var(--box-shadow);
    transition: 0.2s;

    &_img {
      margin-bottom: 21px;
      border-radius: 43px 43px 0 0;
    }

    &_tag {
      position: absolute;
      width: 124px;
      top: 247px;
      left: 40px;
      color: var(--secondary-text-color);
      font-family: var(--sans-serif-font);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.16px;
      background-color: #fff;
      border-radius: 8px 8px 8px 0px;
      padding: 7px 9px 10px 11px;
      transition: 0.3s;
    }

    &_text {
      display: flex;
      width: 305px;
      height: 70px;
      flex-direction: column;
      justify-content: center;
      color: var(--primary-text-color);
      font-family: var(--serif-font);
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 0.5px;
      margin-bottom: 30px;
    }

    &_content {
      display: flex;
      width: 340px;
      align-items: center;
      gap: 65px;

      &-date {
        display: flex;
        width: 223px;
        height: 33px;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;
        color: var(--secondary-text-color);
        font-family: var(--sans-serif-font);
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.16px;
        text-transform: capitalize;
      }
    }

    &:hover {
      background: var(--background-color);
    }

    &:hover circle {
      fill: #fff;
    }
  }
}
</style>
