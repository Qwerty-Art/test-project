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
           <AppInput @onInput="changeName" :required="true" >Ваше имя</AppInput>
           <AppInput @onInput="changeEmail" :required="true" >Ваш E-Mail</AppInput>
        </div>
         <AppTextarea @onInput="changeComment" :required="true" >Комментарий</AppTextarea>
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
import AppInput from '@/components/UI/Input.vue'
import AppTextarea from '@/components/UI/Textarea.vue'
export default {
  components: {
  AppInput,
  AppTextarea
  },
  data() {
    return {
      contacts: {
        name: "",
        email: "",
        comment: "",
      },
      pageInfo: {
        page: 'Контакты',
        title: 'Мы рядом'
      },
      isSent: false
    };
  },
  methods: {
    onSubmit() {
      console.log(this.contacts);
      this.isSent = true
    },
    changeName(name) {
      this.contacts.name = name
    },
    changeEmail(email) {
      this.contacts.email = email
    },
    changeComment(text) {
      this.contacts.comment = text
    }
  }, 
  mounted() {
    this.$emit('pageInfo',this.pageInfo)
  },
};
</script>
