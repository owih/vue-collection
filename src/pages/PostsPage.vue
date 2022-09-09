<template>
  <div class="container">
    <h1>Posts page</h1>
    <PostsList @removePost="removePost" :posts="posts" />
  </div>
</template>

<script>

import getPosts from "@/api/getPosts";
import PostsList from "@/components/PostsList/PostsList";

export default {
  name: "PostsPage",
  postsLimit: 10,

  components: {
    PostsList,
  },
  data() {
    return {
      posts: [],
    }
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      this.posts = await getPosts(10);
      console.log(this.posts)
    },
    removePost(postToRemove) {
      this.posts = this.posts.filter((post) => post.id !== postToRemove.id);
    }
  },

}
</script>

<style scoped>

</style>
