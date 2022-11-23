<template>
  <div class="field -textarea">
    <textarea :value="value" :required="required" @input="val"></textarea>
    <label>
      <slot />
      <span v-if="required">*</span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    val(e) {
      this.$emit('onInput', e.target.value)
    }
  },
  mounted() {
  }
};
</script>