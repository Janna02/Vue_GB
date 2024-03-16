<template>
 <main>
  <section class="details-intro">
    </section>
   <article>
     <div class="wrapper center">
      <div
        v-for="info in getProjectInfo"
        :key="info.id"
        class="details center"
      >
        <h2 class="details__heading">{{ info.heading }}</h2>
        <div class="details__text-box">
          <p class="details__text">{{ info.firstparagraph }}</p>
          <p class="details__text">{{ info.secondparagraph }}</p>
        </div>
      </div>
    </div>
    <Slider class="details__image" :slider-pictures="getSliderPictures" />
  </article>
</main>
</template>

<script>
import { mapGetters } from "vuex";
import Slider from "../components/Slider.vue";

export default {
  name: "ProjectDetails",

  components: {
    Slider,
  },
  computed: mapGetters(["getProjectInfo", "getSliderPictures"]),
};
</script>

<style scoped lang="scss">
.details-intro {
  margin-top: 45px;
  background-image: url('@/assets/images/project-details-banner.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  height: 356px;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
}

.details {



  &__heading {
    color: #292F36;
    font-family: 'Jost' 'DM Serif Display', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 50px;
    line-height: 1.25;
    letter-spacing: 1px;
    margin: 0;
    margin-bottom: 11px;
  }

  &__text-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    max-width: 658px;
    margin-bottom: 100px;
  }

  &__text {
    color: #4D5053;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 22px;
    line-height: 1.5;
    letter-spacing: 0.22px;
    margin: 0;
  }

  &__image {
    width: 100%;
    padding-bottom: 107px;

  }
}




.project-details {
  margin-top: 200px;
  margin-bottom: 107px;

  &__content {
    max-width: 658px;
    margin: 0 auto 100px;
    font-style: normal;
    font-weight: 400;

    & h3 {
      color: #292F36;
      font-size: 50px;
      line-height: 125%;
      letter-spacing: 1px;
    }

    & p {
      color: #4D5053;

      font-family: Jost;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;

      letter-spacing: 0.22px;
    }
  }

}
</style>