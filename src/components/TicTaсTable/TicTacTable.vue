<template>
  <div :class="[$style.root, {'available': isGameRunning && isPlayersTurn}]">
    <div :class="$style.row">
      <div
          :class="$style.item"
          v-for="tableItem in tableItems"
          :key="tableItem.id"
      >
        <TicTacItem @pickField="pickField" :tableItem="tableItem"/>
      </div>
    </div>
  </div>
</template>

<script>
import TicTacItem from "@/components/TicTacItem/TicTacItem";

export default {
  name: "TicTacTable",
  components: {
    TicTacItem,
  },
  props: {
    tableItems: {
      type: Array,
      required: true,
    },
    isGameRunning: {
      type: Boolean,
      required: true,
    },
    isPlayersTurn: {
      type: Boolean,
      required: true,
    }
  },
  emits: {
    pickField: {
      type: Number,
    }
  },
  methods: {
    pickField(event) {
      this.$emit('pickField', event)
    }
  }
}
</script>

<style module lang="scss">
  .root {
    padding: 16px;
    width: 500px;
    height: 500px;
    pointer-events: none;
    .row {
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      margin: -8px;
    }
    .item {
      padding: 8px;
      flex: 0 0 33.3333%;
      height: 33.33333%;
    }
  }
</style>
<style scoped>
  .available {
    pointer-events: unset;
  }
</style>
