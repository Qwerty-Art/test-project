<template>
  <div class="projects">
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
