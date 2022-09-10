<template>
  <nav :class="$style.root">
    <ul :class="$style.list">
      <li :class="$style.item">
        <router-link :class="$style.btn" to="/">Home</router-link>
      </li>
      <li :class="$style.item">
        <router-link :class="$style.btn" to="/posts">Posts</router-link>
      </li>
      <li :class="$style.item">
        <router-link :class="$style.btn" to="/posts">Posts</router-link>
      </li>
      <li :class="$style.item">
        <router-link :class="$style.btn" to="/posts">Posts</router-link>
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
    .btn {
      padding: 10px 15px 6px;
      display: inline-block;
      border: 2px solid #f39c12;
      color: #000000;
      text-decoration: none;
      transition: 0.2s ease-in-out;
      border-radius: 4px;
      &:hover {
        color: #FFFFFF;
        background-color: #f39c12;
      }
    }
  }
  .list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: -8px -12px;
    padding-left: 0;
  }
  .item {
    padding: 8px 12px;
  }
</style>
