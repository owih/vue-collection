<template>
  <div v-if="posts.length" :class="$style.root">
    <transition-group name="posts">
      <PostItem @removePost="removePost(post)" :class="$style.item" :post="post" v-for="post in posts" :key="post.id"/>
    </transition-group>
  </div>
  <div v-else>Nothing to show :(</div>
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
<style scoped>
.posts-item {
  display: inline-block;
  margin-right: 10px;
}
.posts-enter-active,
.posts-leave-active {
  transition: all 0.2s ease;
}
.posts-enter-from,
.posts-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.posts-move {
  transition: transform 0.3s ease;
}
</style>
