<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-top">
          <router-link to="/" class="footer-logo logo">LOGO</router-link>
          <div class="footer-info">
            <div class="footer-menu">
              <div class="footer-menu-item">
                <div class="footer-menu-title">Услуги</div>
                <ul>
                  <li v-for="link in linksServices" :key="link.alias">
                    <router-link :to="link.url">{{ link.title }}</router-link>
                  </li>
                </ul>
              </div>
              <div class="footer-menu-item">
                <div class="footer-menu-title">Компания</div>
                <ul>
                  <li v-for="link in linksCompany" :key="link.alias">
                    <router-link :to="link.url">{{ link.title }}</router-link>
                  </li>
                </ul>
              </div>
              <div class="footer-menu-item -contacts">
                <div class="footer-menu-title">Контакты</div>
                <ul>
                  <li>
                    <a href="#" class="link-load"
                      ><span>Скачать презентацию</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0711 1.96446C11.0711 1.41218 10.6234 0.964462 10.0711 0.964463L1.07107 0.964462C0.518783 0.964462 0.0710679 1.41218 0.0710679 1.96446C0.0710679 2.51675 0.518783 2.96446 1.07107 2.96446L9.07107 2.96446L9.07107 10.9645C9.07107 11.5167 9.51878 11.9645 10.0711 11.9645C10.6234 11.9645 11.0711 11.5167 11.0711 10.9645L11.0711 1.96446ZM3.70711 9.74264L10.7782 2.67157L9.36396 1.25736L2.29289 8.32842L3.70711 9.74264Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+7 (499) 999-99-99">+7 (499) 999-99-99</a>
                  </li>
                  <li><a href="mailto:info@site.com">info@site.com</a></li>
                </ul>
              </div>
            </div>
            <div class="footer-soc">
              <a href="#"><img :src="require('@/assets/img/tg.svg')"></a>
              <a href="#"><img :src="require('@/assets/img/wa.svg')"></a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-copyright">© Company 2022. All rights reserved.</div>
          <a href="#" class="footer-policy">Политика конфиденциальночти</a>
        </div>
      </div>
    </div>
  </footer>
</template>


<script>
import { linksServices, linksCompany } from "@/_config";

export default {
  data() {
    return {
      linksServices: linksServices,
      linksCompany: linksCompany,
    };
  },
};
</script>