<template>
  <button :class="$style.root">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonControl",
}
</script>

<style module lang="scss">
  .root {
    color: white;
    text-align: center;
    border: 2px solid transparent;
    background-color: teal;
    padding: 10px 15px 6px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover {
      color: #000000;
      background-color: transparent;
      border: 2px solid antiquewhite;
    }
  }
</style>
