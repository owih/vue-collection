<template>
  <div :class="[$style.root, tableItem.type, tableItem.owner]"
       @click="pickField">
    <div v-if="tableItem.type === 'X'">
      <i class="icon icon-clear"></i>
    </div>
    <div v-if="tableItem.type === 'O'">
      <i class="icon icon-circle"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "TicTacItem",
  props: {
    tableItem: {
      type: Object,
      required: true,
    }
  },
  emits: {
    pickField: {
      type: Number,
    }
  },
  methods: {
    pickField() {
      this.$emit('pickField', this.tableItem.id);
    }
  },
}
</script>

<style module lang="scss">
  .root {
    background-color: #E5E7EB;
    height: 100%;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    &:hover {
      background-color: #7f8c8d;
    }
  }
</style>
<style scoped lang="scss">
  .O, .X {
    position: relative;
    pointer-events: none;
    color: crimson;
  }
  .player {
    color: cornflowerblue;
  }
  .icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 40px;
  }
</style>
