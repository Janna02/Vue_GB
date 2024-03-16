<template>
  <div class="projects__items">
    <div v-for="project in projects" :key="project.id" class="projects__item">
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
      <img class="projects__item-image" :src="project.src" :alt="project.alt" />
      <div class="projects__item-content">
        <div class="projects__item-box">
          <p class="projects__item-title">{{ project.title }}</p>
          <p class="projects__item-subtitle">{{ project.tag }}</p>
        </div>
        <router-link :to="{ name: 'ProjectDetails', params: { id: project.id } }">
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  methods: {
    changeStarColor(e) {
      const star = e.target.closest(".star");
      this.currentCategoryList.forEach((project) => {
        if (star.id === project.id) {
          star.classList.toggle("star_active");
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.projects__items {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 30px;
  max-height: 3230px;
  margin-bottom: 61px;
}

.projects__item {
  max-width: calc(50% - 30px);
  position: relative;
  transition: background-color 0.3s ease;
  /* Анимация при наведении */
}

.projects__item:hover {
  background: #f4f0ec;
}

.star-box {
  position: absolute;
  top: 5px;
  right: 5px;
}

.star_active path {
  fill: #ffa928;
  /* Цвет активной звезды */
}

.projects__item-image {
  display: flex;
  width: 100%;
}

.projects__item-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 22px;
}

.projects__item-box {
  display: flex;
  min-width: 290px;
  height: 70px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-content: flex-start;
  justify-content: flex-end;
}

.projects__item-title {
  color: #292f36;
  font-family: Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 25px;
  line-height: 1.25;
  letter-spacing: 0.5px;
  margin: 0;
}

.projects__item-subtitle {
  color: #4d5053;
  font-family: Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 22px;
  line-height: 1.5;
  letter-spacing: 0.22px;
  margin: 0;
}

.projects__item-button {
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
  transition: background-color 0.3s ease;
  /* Анимация при наведении */

}

.projects__item-button:hover {
  background-color: #ffffff;
  border: 1px solid #e7e7e7;
}

.projects__item-button:active {
  background-color: #4d5053;
  border: none;
}

.projects__item-button:focus {
  background-color: #cda274;
  border: none;
}
</style>

