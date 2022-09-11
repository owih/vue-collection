<template>
  <div :class="$style.root">
    <div :class="$style.item">
      <InputField v-model="filterValue" placeholder="Enter search query"/>
    </div>
    <div :class="$style.item">
      <input
          checked="true"
          name="search-type"
          :class="$style.input"
          type="radio"
          id="titleSearch"
          value="title"
          v-model="searchType"
      >
      <label :class="$style.label" for="titleSearch">Search from title</label>
    </div>
    <div :class="$style.item">
      <input
          name="search-type"
          :class="$style.input"
          type="radio"
          id="bodySearch"
          value="body"
          v-model="searchType"
      >
      <label :class="$style.label" for="bodySearch">Search from body</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostsFilter",
  data() {
    return {
      filterValue: '',
      searchType: 'title',
    }
  },
  emits: {
    filterValue: {
      type: [String, Number],
    },
    searchType: {
      type: String,
    },
  },
  watch: {
    searchType() {
      this.$emit('searchType', this.searchType);
    },
    filterValue() {
      this.$emit('filterValue', this.filterValue);
    },
  },
   mounted() {
     this.$emit('searchType', this.searchType);
   }
}
</script>

<style module lang="scss">
  .root {
    display: flex;
    margin: -8px;
    .item {
      padding: 8px;
      flex: 1 0 auto;
    }
    .input {
      position: absolute;
      opacity: 0;
      z-index: -1;
    }
    .label {
      text-align: center;
      display: block;
      padding: 10px 15px 6px;
      border: 2px solid mediumseagreen;
      cursor: pointer;
      transition: 0.2s ease-in-out;
    }
    .input:checked + .label {
      color: white;
      border: 2px solid transparent;
      background-color: mediumseagreen;
    }
  }
</style>
