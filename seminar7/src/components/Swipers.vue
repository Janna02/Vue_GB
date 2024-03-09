<template>
  <div class="box-content">
    <main class="main">
      <section class="swipers center">
        <Swiper
          :style="{
            '--swiper-navigation-color': '#292F36',
            '--swiper-pagination-color': '#fff',
            '--swiper-pagination-width': '105px',
            '--swiper-pagination-height': '105px',
          }"
          :zoom="true"
          :navigation="true"
          :pagination="{
            clickable: true,
          }"
          :modules="modules"
          class="mySwiper"
        >
          <SwiperSlide>
            <div class="swiper-zoom-container">
              <img src="@/assets/imgs/banner.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="swiper-zoom-container">
              <img src="@/assets/imgs/banner.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="swiper-zoom-container">
              <img src="@/assets/imgs/banner.png" />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </main>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./style.css";

// import required modules
import { Zoom, Navigation, Pagination } from "swiper/modules";

export default {
  name: "SwiperComp",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Zoom, Navigation, Pagination],
    };
  },
};
</script>
