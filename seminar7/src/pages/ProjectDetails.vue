<template>
  <div class="box-content">
    <main class="main">
      <section class="poject-details center"></section>
      <section class="poject-details__content center">
        <div
          class="poject-details__content_about"
          v-for="(item, index) in data"
          :key="index"
        >
          <h1 class="poject-details__content_title">{{ item.title }}</h1>
          <p class="poject-details__content_text1">{{ item.text1 }}</p>
          <p class="poject-details__content_text2">{{ item.text2 }}</p>
        </div>
        <Swipers />
      </section>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Swipers from "../components/Swipers.vue";

export default {
  name: "ProjectDetails",
  components: { Swipers },

  data() {
    return {};
  },
  computed: {
    ...mapState(["data"]),
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.poject-details {
  margin-top: 57px;
  margin-bottom: 107px;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  height: 360px;
  flex-shrink: 0;
  align-items: flex-end;
  &__content {
    margin-left: 270px;
    margin-top: 164px;
    margin-bottom: 170px;
    width: 658px;
    &_title {
      color: #292f36;
      font-family: DM Serif Display;
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 1px;
      padding-bottom: 11px;
    }
    &_text1 {
      color: #4d5053;
      font-family: Jost;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.22px;
      padding-bottom: 40px;
    }
    &_text2 {
      color: #4d5053;
      font-family: Jost;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.22px;
      padding-bottom: 80px;
    }
  }
}

.swiper-slide {
  overflow: hidden;
}
</style>
