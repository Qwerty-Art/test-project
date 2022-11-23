<template>
  <div class="wrapper-container">
    <Header />
    <div class="wrap-page-header">
      <div class="container">
        <div class="page-header">
          <div class="breadcrumb" v-if='isBreadcrumb'>
            <a href="/" class="breadcrumb-item">Главная</a>
            <span href="/" class="breadcrumb-item -no-link">{{
              pageInfo.page
            }}</span>
          </div>
          <h1 class="page-title h1">{{ pageInfo.title }}</h1>
        </div>
      </div>
    </div>
    <div class="wrapper-content">
      <div class="container">
        <router-view @pageInfo="pageInfo" />
      </div>
      <div class="page-btn-menu btn-menu">
        <svg
          width="31"
          height="7"
          viewBox="0 0 31 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="3.5"
            cy="3.5"
            rx="3.5"
            ry="3.5"
            transform="rotate(90 3.5 3.5)"
            fill="#388AF3"
          ></ellipse>
          <ellipse
            cx="15.5"
            cy="3.5"
            rx="3.5"
            ry="3.5"
            transform="rotate(90 15.5 3.5)"
            fill="#388AF3"
          ></ellipse>
          <ellipse
            cx="27.5"
            cy="3.5"
            rx="3.5"
            ry="3.5"
            transform="rotate(90 27.5 3.5)"
            fill="#388AF3"
          ></ellipse>
        </svg>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      pageInfo: {
        page: "",
        title: "",
      },
      isBreadcrumb: false
    };
  },
  computed: {
    pageInfo() {
      this.isBreadcrumb = this.$route.matched[0].props.default.page === '' ? false : true;
      return (this.pageInfo = {
        page: this.$route.matched[0].props.default.page,
        title: this.$route.matched[0].props.default.title,
      });
    },
  },
};
</script>