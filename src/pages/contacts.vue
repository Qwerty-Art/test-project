<template>
  <div class="page-content">
    <div class="wrap-contacts-form">
      <div class="contacts-form-descr zero-m">
        <p>
          Заполните форму ниже и мы свяжемся с вами. Не любите формы? Напишите
          нам на почту <a href="mailto:info@site.com">info@site.com</a>
        </p>
      </div>
    </div>
    <form @submit.prevent="onSubmit" class="contacts-form">
      <div class="wrap-field">
        <div class="group-field">
          <div class="field">
            <input type="text" v-model="contacts.name" required />
            <label>Ваше имя <span>*</span></label>
          </div>
          <div class="field">
            <input type="text" v-model="contacts.email" required />
            <label>Ваш E-Mail <span>*</span></label>
          </div>
        </div>
        <div class="field -textare">
          <textarea v-model="contacts.comment" required></textarea>
          <label>Комментарий <span>*</span></label>
        </div>
      </div>
      <div class="wrap-check">
        <label class="custom-check">
          <input type="checkbox" required checked />
          <span class="shadow-check"></span>
          <span class="custom-check-text"
            >Согласен с <a href="#">Политикой конфиденциальности</a></span
          >
        </label>
      </div>
      <button class="btn-form" :class="{ '-sent': isSent }">
        <div class="btn-form-bg"></div>
        <i>
          <img :src="require('@/assets/img/img.svg')" />
        </i>
        <span class="-default" v-if="!isSent">Отправить</span>
        <span class="-finish" :class="{ '-show': isSent }"
          >Ваше сообщение <br />
          отправлено!</span
        >
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: {
        name: "",
        email: "",
        comment: "",
      },
      isSent: false
    };
  },
  methods: {
    onSubmit() {
      console.log(this.contacts);
      this.isSent = true
    },
  },  
};
</script>
