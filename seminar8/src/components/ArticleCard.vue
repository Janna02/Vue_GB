<template>
  <div class="blog__items">
        <div class="blog__item">
          <img :src="item.src" :alt="item.alt" class="blog__item_img" />
          <router-link  to='/BlogDetails' class="blog__item_tag">{{ item.tag }}</router-link>
          <p class="blog__item_text">{{ item.title }}</p>
          <div class="blog__item_content">
            <div class="blog__item_content-date">{{ item.date }}</div>
            <router-link to="/BlogDetails" class="blog__item_content-elem">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="53"
                viewBox="0 0 52 53"
                fill="none"
              >
                <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                <path
                  d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </router-link>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",

  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
