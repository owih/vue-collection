<template>
  <div :class="$style.root" v-if="!isGameRunning">
    <div :class="$style.item">
      <input
          checked="true"
          name="search-type"
          :class="$style.input"
          type="radio"
          id="X"
          value="X"
          v-model="type"
      >
      <label :class="$style.label" for="X">Choose X</label>
    </div>
    <div :class="$style.item">
      <input
          name="search-type"
          :class="$style.input"
          type="radio"
          id="O"
          value="O"
          v-model="type"
      >
      <label :class="$style.label" for="O">Choose O</label>
    </div>
    <div :class="$style.item">
      <ButtonControl @click="play">
        Play
      </ButtonControl>
    </div>
  </div>
  <div :class="$style.root" v-else>
    <div :class="$style.item">
      <ButtonControl @click="end">
        End
      </ButtonControl>
    </div>
  </div>
</template>

<script>
export default {
  name: "TicTacPanel",
  data() {
    return {
      type: 'X',
    }
  },
  props: {
    isGameRunning: {
      type: Boolean,
      required: true,
    }
  },
  emits: {
    play: {
      type: String,
    },
    end: {},
  },
  methods: {
    play() {
      this.$emit('play', this.type)
    },
    end() {
      this.$emit('end', this.type)
    }
  },
}
</script>

<style module lang="scss">
  .root {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: -8px;
    .item {
      padding: 8px;
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
