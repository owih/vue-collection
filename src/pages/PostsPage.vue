<template>
  <div class="container">
    <div :class="$style.root">
      <h1>Posts page</h1>
      <h3>Create new post</h3>
      <CreatePostForm :class="$style.form" @createPost="createNewPost"/>
      <h3>Posts list</h3>
      <div :class="$style.panel">
        <div :class="$style.item">
          <ButtonControl @click="setFetchPosts" :class="$style.control">
            Update posts list
          </ButtonControl>
        </div>
        <div :class="$style.item">
          <ButtonControl @click="savePostListState" :class="$style.control">
            Save current list state
          </ButtonControl>
        </div>
        <div :class="[$style.item, $style.filter]">
          <PostsFilter @filterValue="setFilteredValue" @searchType="changeSearchType"/>
        </div>
      </div>
      <PostsList @removePost="removePost" :posts="filteredPosts" />
    </div>
  </div>
</template>

<script>

import getPosts from "@/api/getPosts";
import PostsList from "@/components/PostsList/PostsList";
import CreatePostForm from "@/components/CreatePostForm/CreatePostForm";
import PostsFilter from "@/components/PostsFilter/PostsFilter";

export default {
  name: "PostsPage",
  postsLimit: 10,

  components: {
    PostsList, CreatePostForm, PostsFilter,
  },
  data() {
    return {
      posts: [],
      searchType: '',
      filterValue: '',
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
    },
    getLocalStoragePosts() {
      return localStorage.getItem('postsList');
    },
    updatePostsFromFetch() {

    },
    async setFetchPosts() {
      this.posts = await getPosts(10);
    },
    removePost(postToRemove) {
      this.posts = this.posts.filter((post) => post.id !== postToRemove.id);
    },
    createNewPost(post) {
      this.posts.push(post);
    },
    savePostListState() {
      localStorage.setItem('postsList', JSON.stringify(this.filteredPosts));
    },
    setFilteredValue(value) {
      this.filterValue = value;
    },
    changeSearchType(type) {
      this.searchType = type;
    }
  },
  computed: {
    filteredPosts() {
      return this.posts.filter((item) => item[this.searchType].includes(this.filterValue));
    }
  },
}
</script>

<style module lang="scss">
  .root {
    padding: 40px 0;
    .form {
      margin-bottom: 30px;
    }
    .control {
      &:not(:last-child) {
        margin-right: 16px;
      }
    }
    .panel {
      display: flex;
      flex-wrap: wrap;
      margin: -8px -8px 20px;
    }
    .item {
      padding: 8px;
    }
    .filter {
      flex: 1 0 auto;
    }
  }
</style>
