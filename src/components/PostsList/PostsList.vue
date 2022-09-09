<template>
  <div v-if="posts.length" :class="$style.root">
      <PostItem @removePost="removePost(post)" :class="$style.item" :post="post" v-for="post in posts" :key="post.id"/>
  </div>
  <div v-else>Not </div>
</template>

<script>

import PostItem from "@/components/PostItem/PostItem";

export default {
  name: "PostsList",
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    }
  },
  methods: {
    removePost(post) {
      this.$emit('removePost', post)
    }
  }
}
</script>

<style module lang="scss">
.root {
  font-size: 16px;
  .item {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
}
</style>
