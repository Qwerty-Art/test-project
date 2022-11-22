<template>
  <header class="header">
    <div class="wrap-header-content">
      <div class="full-container">
        <div class="header-content">
          <router-link to="/" class="logo">LOGO</router-link>
          <ul class="header-menu">
            <li class="header-item" v-for="link in links" :key="link.alias">
              <router-link :to="link.url" class="navbar-link">{{
                link.title
              }}</router-link>
            </li>
          </ul>
          <div class="header-lang">
            <router-link to="#" class="-active"><span>RU</span></router-link>
            <router-link to="#"><span>EN</span></router-link>
          </div>
          <router-link to="#" class="btn header-btn">
            <span>Начать проект</span>
            <i>
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 8L12 8V6H11V8ZM0 8L11 8V6L0 6L0 8Z"
                  fill="#388AF3"
                />
                <path d="M7 13L13 7L7 1" stroke="#388AF3" stroke-width="2" />
              </svg>
            </i>
          </router-link>
          <div class="header-btn-menu btn-menu">
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
              />
              <ellipse
                cx="15.5"
                cy="3.5"
                rx="3.5"
                ry="3.5"
                transform="rotate(90 15.5 3.5)"
                fill="#388AF3"
              />
              <ellipse
                cx="27.5"
                cy="3.5"
                rx="3.5"
                ry="3.5"
                transform="rotate(90 27.5 3.5)"
                fill="#388AF3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>


<script>
import { links } from "@/_config";

export default {
  data() {
    return {
      links: links,
    };
  },
  mounted() {
    console.log(this.links);
  },
};
</script>