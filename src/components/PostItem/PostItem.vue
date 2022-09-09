<template>
<div :class="$style.root">
  <div :class="$style.header">
    {{ post.title }}
  </div>
  <div :class="$style.body">
    {{ post.body }}
  </div>
  <div :class="$style.remove" @click="emitRemovePost"></div>
</div>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
  methods: {
    emitRemovePost() {
      this.$emit('removePost', this.post.id);
    }
  }
}
</script>

<style module lang="scss">
.root {
  border: 1px solid #bdc3c7;
  position: relative;
  .header {
    padding: 16px;
    border-bottom: 1px solid #bdc3c7;
    font-size: 18px;
    font-weight: bold;
  }
  .body {
    padding: 16px;
  }
  .remove {
    color: red;
    position: absolute;
    right: 16px;
    top: 16px;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &:hover {
      &:before, &:after {
        background-color: #f39c12;
      }
    }
    &:before, &:after {
      content: ' ';
      transition: background-color 0.1s ease-in-out;
      position: absolute;
      left: 7px;
      bottom: 0;
      height: 16px;
      width: 2px;
      background-color: #333;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
}
</style>
