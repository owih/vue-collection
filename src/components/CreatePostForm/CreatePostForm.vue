<template>
  <div :class="$style.root">
    <div :class="$style.input">
      <InputField
          v-model="post.title"
          placeholder="Enter the title"
      />
    </div>
    <div :class="$style.input">
      <InputField
          v-model="post.body"
          placeholder="Enter the text"
      />
    </div>
    <div :class="$style.control">
      <ButtonControl @click="createPost">
        Create post
      </ButtonControl>
    </div>
    <span :class="$style.message" v-if="!isValidated">The fields must not be <strong>empty</strong>!</span>
  </div>
</template>

<script>
export default {
  name: "CreatePostForm",
  data() {
    return {
      post: {
        title: '',
        body: '',
      },
      isValidated: true,
    }
  },
  emits: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    createPost() {
      if (this.post.title === '' || this.post.body === '') {
        this.isValidated = false;
      } else {
        this.isValidated = true;
        this.post.id = Date.now();
        this.$emit('createPost', this.post);
        this.post = {
          title: '',
          body: '',
        }
      }
    }
  }
}
</script>

<style module lang="scss">
  .root {
    .input {
      margin-bottom: 16px;
    }
    .control {
      display: inline-block;
    }
    .message {
      margin-left: 20px;
    }
  }
</style>
