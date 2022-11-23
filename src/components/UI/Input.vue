<template>
  <div class="field">
    <input :type="type" :value="value" :required="required" @input="val"/>
    <label>
      <slot />
      <span v-if="required">*</span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
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