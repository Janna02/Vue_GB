<template>
  <div class="card">
    <div class="img">
      Здесь могло быть фото
      <img :src="project.images" alt="img" />
    </div>
    <div class="content">
      <div>
        <p class="content_text">{{ project.text }}</p>
      </div>

      <div class="content_button">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
          >
            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
            <path
              d="M32 44L40 35L32 26"
              stroke="#292F36"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: Object,
  },

  data() {
    return {};
  },

  methods: {
    select(e) {
      e.target.classList.toggle("isSelected");
    },
  },
};
</script>

<style lang="scss" scoped>
.isSelected {
  fill: #ffa928;
}

.content {
  margin-top: 35px;
  margin-bottom: 35px;
  display: flex;
  align-items: center;
  gap: 100px;
  &_text {
    color: #292f36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0.5px;
  }
}

.img {
  height: 100px;
  display: flex;
  background: gray;
}
</style>
