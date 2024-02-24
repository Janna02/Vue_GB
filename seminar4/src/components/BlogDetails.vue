<template>
  <div class="blog-details-content">
    <div class="blog-details-content-top">
      <div class="blog-details-content-top__content">
        <img src="img/vector5.svg" alt="vector5" />
        <p class="blog-details-content-top__text">
          The details are not the details.
        </p>
        <p class="blog-details-content-top__text">They make the design.</p>
      </div>
    </div>
    <div class="blog-details-content-main">
      <p class="blog-details-content-main__header">{{ blog.detailsHeader }}</p>
      <p class="blog-details-content-main__text">{{ blog.detailsText }}</p>
      <p class="blog-details-content-main__text">{{ blog.detailsText1 }}</p>
      <p class="blog-details-content-main__text">{{ blog.detailsText2 }}</p>
      <p class="blog-details-content-main__text">{{ blog.detailsText3 }}</p>
    </div>
    <div class="blog-details-content-wrap">
      <div class="blog-details-content-wrap-img-wrapper">
        <img
          class="blog-details-content-wrap-img"
          :src="blog.detailsImg"
          alt="wrap"
        />
      </div>
      <p class="blog-details-content-wrap">
        {{ blog.detailsSubText }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InteriorDesignWebsiteVueCliBlogDetails",
  props: ["blog"],
  methods: {
    showDetails(id) {
      this.$emit("showFullBlog", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-details-wrapper {
  width: 100%;

  &__intro {
    min-height: 251px;
    min-height: 351px;
    margin-top: 45px;
    // background-image: url(../img/blog-details-intro.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
}

.blog-details-content {
  &-top {
    display: flex;
    padding: 53px 12px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: 50px;
    background: var(--background-color);
    margin-bottom: 27px;
  }

  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &-text {
    color: var(--accent-color);
    text-align: center;
    font-family: var(--serif-font);
    font-size: 25px;
    font-style: italic;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0.5px;
  }

  &-main {
    margin-bottom: 44px;
  }

  &-header {
    color: var(--primary-text-color);
    font-family: var(--serif-font);
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }

  &-text {
    color: var(--secondary-text-color);
    font-family: var(--sans-serif-font);
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
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
      line-height: 150%;
      letter-spacing: 0.22px;
    }
  }
}
</style>
