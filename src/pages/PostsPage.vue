<template>
  <div class="container">
    <div :class="$style.root">
      <h1>Posts page</h1>
      <h3>Create new post</h3>
      <CreatePostForm :class="$style.form" @createPost="createNewPost"/>
      <h3>Posts list</h3>
      <div :class="$style.controls">
        <ButtonControl @click="setFetchPosts" :class="$style.control">
          Update posts list
        </ButtonControl>
        <ButtonControl @click="savePostListState" :class="$style.control">
          Save current list state
        </ButtonControl>
      </div>
      <PostsList @removePost="removePost" :posts="posts" />
    </div>
  </div>
</template>

<script>

import getPosts from "@/api/getPosts";
import PostsList from "@/components/PostsList/PostsList";
import CreatePostForm from "@/components/CreatePostForm/CreatePostForm";

export default {
  name: "PostsPage",
  postsLimit: 10,

  components: {
    PostsList, CreatePostForm,
  },
  data() {
    return {
      posts: [],
    }
  },
  mounted() {
    this.setPostsState();
  },
  methods: {
    setPostsState() {
      if (this.getLocalStoragePosts()) {
        this.setLocalStoragePosts();
      } else {
        this.setFetchPosts();
      }
    },
    setLocalStoragePosts() {
      this.posts = JSON.parse(this.getLocalStoragePosts());
      console.log(JSON.parse(this.getLocalStoragePosts()));
    },
    getLocalStoragePosts() {
      return localStorage.getItem('postsList');
    },
    async setFetchPosts() {
      this.posts = await getPosts(10);
      console.log(JSON.stringify(this.posts))
    },
    removePost(postToRemove) {
      this.posts = this.posts.filter((post) => post.id !== postToRemove.id);
    },
    createNewPost(post) {
      this.posts.push(post);
    },
    savePostListState() {
      localStorage.setItem('postsList', JSON.stringify(this.posts));
    }
  },

}
</script>

<style module lang="scss">
  .root {
    padding-top: 40px;
    .form {
      margin-bottom: 30px;
    }
    .control {
      &:not(:last-child) {
        margin-right: 16px;
      }
    }
    .controls {
      margin-bottom: 20px;
    }
  }
</style>
