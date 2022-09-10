<template>
  <input :class="$style.root" :value="modelValue" @input="updateInput" type="text">
</template>

<script>
export default {
  name: "InputField",
  props: {
    modelValue: {
      type: [String, Number],
    }
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style module lang="scss">
  .root {
    width: 100%;
    padding: 10px 16px 6px;
    border: 1px solid teal;
    outline: none;
    height: 100%;
    &:focus {
      border-color: #f39c12;
    }
  }
</style>
