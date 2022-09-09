<template>
  <nav :class="$style.root">
    <ul :class="$style.list">
      <li :class="$style.item">
        <router-link class="btn" to="/">Home</router-link>
      </li>
      <li :class="$style.item">
        <router-link class="btn" to="/posts">Posts</router-link>
      </li>
      <li :class="$style.item">
        <router-link class="btn" to="/posts">Posts</router-link>
      </li>
      <li :class="$style.item">
        <router-link class="btn" to="/posts">Posts</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavList",
}
</script>

<style module lang="scss">
  .root {
    padding: 10px 16px;
    border-bottom: 1px solid #bdc3c7;
  }
  .list {
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 0 -12px;
  }
  .item {
    padding: 0 12px;
  }
</style>
