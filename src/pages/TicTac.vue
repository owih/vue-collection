<template>
  <div class="container">
    <div :class="$style.root">
      <h1>Tic-Tac mini-game</h1>
      <div :class="$style.wrapper">
        <TicTacTable
            @pickField="processMove"
            :isGameRunning="isGameRunning"
            :isPlayersTurn="isPlayersTurn"
            :tableItems="currentTableItems" />
      </div>
      <div :class="$style.panel">
        <TicTacPanel
            @play="play"
            @end="end"
            :isGameRunning="isGameRunning"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TicTacTable from "@/components/TicTaсTable/TicTacTable";
import TicTacPanel from "@/components/TicTacPanel/TicTacPanel";

export default {
  name: "TicTac",
  components: {
    TicTacTable, TicTacPanel
  },
  data() {
    return {
      tableItems: [
        {id: 0, isPicked: false, type: '', owner: '', winPosition: false},
        {id: 1, isPicked: false, type: '', owner: '', winPosition: false},
        {id: 2, isPicked: false, type: '', owner: '', winPosition: false},
        {id: 3, isPicked: false, type: '', owner: '', winPosition: false},
        {id: 4, isPicked: false, type: '', owner: '', winPosition: false},
        {id: 5, isPicked: false, type: '', owner: '', winPosition: false},
        {id: 6, isPicked: false, type: '', owner: '', winPosition: false},
        {id: 7, isPicked: false, type: '', owner: '', winPosition: false},
        {id: 8, isPicked: false, type: '', owner: '', winPosition: false},
      ],
      currentTableItems: [
        {id: 0, isPicked: false, type: '', owner: '', winPosition: false},
        {id: 1, isPicked: false, type: '', owner: '', winPosition: false},
        {id: 2, isPicked: false, type: '', owner: '', winPosition: false},
        {id: 3, isPicked: false, type: '', owner: '', winPosition: false},
        {id: 4, isPicked: false, type: '', owner: '', winPosition: false},
        {id: 5, isPicked: false, type: '', owner: '', winPosition: false},
        {id: 6, isPicked: false, type: '', owner: '', winPosition: false},
        {id: 7, isPicked: false, type: '', owner: '', winPosition: false},
        {id: 8, isPicked: false, type: '', owner: '', winPosition: false},
      ],
      isGameRunning: false,
      isPlayersTurn: true,
      type: 'X',
      PCType: 'O',
      moveCounter: 0,
    }
  },
  methods: {
    play(type) {
      this.moveCounter = 0;
      this.type = type;
      this.isGameRunning = true;
      this.isPlayersTurn = this.type === 'X';
      this.PCType = this.type === 'X' ? 'O' :'X';
      this.currentTableItems = this.getStartArray();
    },
    end() {
      this.isGameRunning = false;
      this.currentTableItems = this.getStartArray();
    },
    processMove(id) {
      this.pickField(id)
      this.isPlayersTurn = !this.isPlayersTurn;
    },
    pickField(id) {
      if (!this.isGameRunning) return;
      this.currentTableItems[id].isPicked = true;
      this.currentTableItems[id].type = this.isPlayersTurn ? this.type : this.PCType;
      this.currentTableItems[id].owner = this.isPlayersTurn ? 'player' : 'pc';
      this.moveCounter++;
      console.log(this.moveCounter)
      this.checkIsGameOver();
    },
    doPCMove() {
      const availableMoves = this.currentTableItems.filter((item) => !item.isPicked);
      const randomId = Math.floor(Math.random() * availableMoves.length);
      if (availableMoves.length) this.pickField(availableMoves[randomId].id);
      this.isPlayersTurn = true;
    },
    getStartArray() {
      return JSON.parse(JSON.stringify(this.tableItems));
    },
    checkIsGameOver() {
      console.log('check')
      let combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let comb of combs) {
        if (this.currentTableItems[comb[0]].type === this.currentTableItems[comb[1]].type &&
            this.currentTableItems[comb[1]].type === this.currentTableItems[comb[2]].type &&
            this.currentTableItems[comb[0]].type !== '') {
          this.isGameRunning = false;
          this.setWinner();
        } else if (this.moveCounter === 9) {
          this.isGameRunning = false;
          this.setDraw();
        }
      }
    },
    setWinner() {
      if (this.isPlayersTurn) {
        console.log('PLAYER WIN');
      } else {
        console.log('PC WIN');
      }
    },
    setDraw() {
      console.log('ITS DRAW');
    }
  },
  watch: {
    isPlayersTurn() {
      if (!this.isPlayersTurn) this.doPCMove();
    },
  },
}
</script>

<style module lang="scss">
  .root {
    padding-top: 40px;
    .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .panel {
      text-align: center;
    }
  }
</style>
