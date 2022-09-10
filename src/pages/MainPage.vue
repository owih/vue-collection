<template>
  <div class="container">
    <div :class="$style.root">
      <h1>Main page</h1>
      <p>This is my collection for Vue applications created in the learning process or as pet projects </p>
    </div>
  </div>
</template>

<script>


export default {
  name: "MainPage",
}
</script>

<style module lang="scss">
  .root {
    padding-top: 40px;
  }
</style>
