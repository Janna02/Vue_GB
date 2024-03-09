<template>
  <div class="box-content">
    <main class="main">
      <section class="not-found center">
        <div class="not-found__page">
          <div class="not-found__page_about">
            <h1 class="not-found__page_about_heading">404</h1>
            <h3 class="not-found__page_about_text">
              We are sorry, but the page you requested was not found
            </h3>
            <router-link to="/" class="not-found__page_about_btn"
              >Back To Home
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
              >
                <path
                  d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887"
                  stroke="#CDA274"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
              </svg>
            </router-link>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "NotFound",

  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.not-found {
  margin-top: 164px;
  margin-bottom: 170px;
  &__page {
    display: flex;
    gap: 81px;
    &_about {
      &_heading {
        display: flex;
        width: 395px;
        height: 172px;
        flex-direction: column;
        justify-content: center;
        color: #cda274;
        font-family: DM Serif Display;
        font-size: 250px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        padding-bottom: 15px;
      }
      &_text {
        display: flex;
        width: 569px;
        height: 139px;
        flex-direction: column;
        justify-content: center;
        color: #292f36;
        font-family: DM Serif Display;
        font-size: 35px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.35px;
        padding-bottom: 21px;
      }
      &_btn {
        width: 150px;
        cursor: pointer;
        flex-direction: row;
        display: flex;
        padding: 26px 54px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 18px;
        background: #292f36;
        box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
        color: #fff;
        text-align: center;
        font-family: Jost;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%;
        letter-spacing: 0.36px;
      }
    }
  }
}
</style>
