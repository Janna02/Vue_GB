<template>
    <div class="box-content">
        <main class="main">
            <section class="blog center">
                <div class="blog__info">
                    <div class="blog__info__heading">
                        <h1 class="blog__info__heading_text">Articles & News</h1>
                        <nav class="blog__info__heading_breadcrumb">
                            <ul class="blog__info__heading_breadcrumb_ul">
                                <li class="blog__info__heading_breadcrumb_li">
                                    <router-link to="/" class="blog__info__heading_breadcrumb_link">Home</router-link>
                                </li>
                                <li class="blog__info__heading_breadcrumb_li">
                                    <router-link to="/Blog" class="blog__info__heading_breadcrumb_link">Blog</router-link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </section>
            <section class="post center">
                <div class="post__heading">
                    <h1 class="post__heading_text">Latest Post</h1>
                </div>
                <div class="post__content">
                    <img class="post__content_img" src="@/assets/img/post.svg" alt="post">
                    <div class="post__content_info">
                        <h3 class="post__content_info_heading">Low Cost Latest Invented Interior Designing Ideas</h3>
                        <p class="post__content_info_text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                            turpis
                            dignissim maximus.posuere in.Contrary to popular belief.</p>
                        <p class="post__content_info_text"> Lorem Ipsum is not simply random text. It has roots in a piece
                            of
                            classica.</p>
                        <div class="post__content_info_min">
                            <p class="post__content_info_min_text">26 December,2022 </p>
                            <div class="post__content_info_min_button">
                                <router-link to="/BlogDetails" class="post__content_info_min_btn"><svg xmlns="http://www.w3.org/2000/svg"
                                        width="52" height="53" viewBox="0 0 52 53" fill="none">
                                        <circle cx="26" cy="26.5" r="26" fill="#F4F0EC" />
                                        <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></router-link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section class="articles center">
                <div class="articles__heading">
                    <h1 class="articles__heading_text">Articles & News</h1>
                </div>
                <div id="app" class="articles__all">
                    <div v-for="article in articles" :key="article.id" class="articles__all_item">
                        <img :src="article.src" :alt="article.alt" class="articles__all_item_img">
                        <a class="articles__all_item_text" href="blog_details.html">{{ article.text }}
                        </a>
                        <div class="articles__all_item_content">
                            <p class="articles__all_item_content_text">{{ article.contentText }}</p>
                            <div class="articles__all_item_content_contentmin">
                                <p class="articles__all_item_content_texting">{{ article.date }}</p>
                                <div class="articles__all_item_content_button">
                                    <router-link to="/BlogDetails" class="articles__all_item_content_btn"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53"
                                            fill="none">
                                            <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                                            <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="pagination center">
                <ul class="pagination__list">

                    <li class="pagination__list_item">
                        <a class="pagination__list_item_hov" href="#">
                            <h1 class="pagination__list_item_text"></h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
                                <circle cx="26.5" cy="26" r="26" fill="#F4F0EC" />
                            </svg>
                        </a>
                    </li>
                    <li class="pagination__list_item">
                        <a class="pagination__list_item_hov" href="#">
                            <h1 class="pagination__list_item_text"></h1><svg xmlns="http://www.w3.org/2000/svg" width="53"
                                height="52" viewBox="0 0 53 52" fill="none">
                                <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                            </svg>
                        </a>
                    </li>
                    <li class="pagination__list_item">
                        <a class="pagination__list_item_hov" href="#">
                            <h1 class="pagination__list_item_text"></h1><svg xmlns="http://www.w3.org/2000/svg" width="53"
                                height="52" viewBox="0 0 53 52" fill="none">
                                <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                            </svg>
                        </a>
                    </li>

                    <li class="pagination__list_item">
                        <a class="pagination__list_item_hov" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
                                <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                                <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </li>


                </ul>
            </section>
        </main>
    </div>
</template>
<script>
export default {
    name: 'Blog',
    data() {
        return {
            articles: [{
                id: 1,
                src: require('@/assets/img/articles1.png'),
                alt: 'design',
                text: 'Kitchan Design',
                contentText: 'Let’s Get Solution For Building ',
                date: '26 December,2022 ',

            }, {
                id: 2,
                src: require('@/assets/img/articles2.png'),
                alt: 'design',
                text: 'Living Design',
                contentText: 'Low Cost Latest Invented Interior Designing Ideas.',
                date: '22 December,2022 ',

            }, {
                id: 3,
                src: require('@/assets/img/articles3.png'),
                alt: 'design',
                text: 'Interior Design',
                contentText: 'Best For Any Office & Business Interior    Solution',
                date: '25 December,2022 ',

            }, {
                id: 4,
                src: require('@/assets/img/articles4.png'),
                alt: 'design',
                text: 'Kitchan Design',
                contentText: 'Best For Any Office & Business Interior  Solution ',
                date: '26 December,2022 ',

            }, {
                id: 5,
                src: require('@/assets/img/articles5.png'),
                alt: 'design',
                text: 'Living Design',
                contentText: 'Low Cost Latest Invented Interior Designing Ideas.',
                date: '22 December,2022 ',

            }, {
                id: 6,
                src: require('@/assets/img/articles6.png'),
                alt: 'design',
                text: 'Interior Design',
                contentText: 'Best For Any Office & Business Interior Solution ',
                date: '25 December,2022 ',

            },]
        }
    },
    methods: {

    },

};
</script>