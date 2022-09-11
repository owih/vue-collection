<template>
  <div class="container">
    <div :class="$style.root">
      <h1>Tic-Tac mini-game</h1>
      <div :class="$style.wrapper">
        <Transition  name="message">
          <span v-if="finalMessage" :class="$style.message">
              {{ finalMessage.split(' ')[0] }}
          </span>
        </Transition >
        <TicTacTable
            @pickField="processMove"
            :isGameRunning="isGameRunning"
            :isPlayersTurn="isPlayersTurn"
            :tableItems="currentTableItems" />
        <Transition  name="message">
          <span v-if="finalMessage" :class="$style.message">
              {{ finalMessage.split(' ')[1] }}
          </span>
        </Transition >
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
      finalMessage: '',
    }
  },
  methods: {
    setInitialState() {
      this.moveCounter = 0;
      this.currentTableItems = this.getStartArray();
      this.finalMessage = '';
    },
    play(type) {
      this.setInitialState();
      this.type = type;
      this.isGameRunning = true;
      this.isPlayersTurn = this.type === 'X';
      this.PCType = this.type === 'X' ? 'O' :'X';
    },
    end() {
      this.isGameRunning = false;
      this.currentTableItems = this.getStartArray();
      this.finalMessage = '';
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
          return;
        }
      }
      if (this.isGameRunning && this.moveCounter === 9) {
        this.isGameRunning = false;
        this.setDraw();
      }
    },
    setWinner() {
      if (this.isPlayersTurn) {
        this.finalMessage = 'YOU WON!';
      } else {
        this.finalMessage = 'DUDE HOW?:(';
      }
    },
    setDraw() {
      this.finalMessage = 'ITS DRAW';
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
      position: relative;
    }
    .panel {
      text-align: center;
    }
    .message {
      position: absolute;
      right: 0;
      font-size: 60px;
      font-weight: bold;
      color: #c0392b;
      &:first-child {
        left: 0;
        color: #1abc9c;
      }
    }
  }
</style>
<style scoped>
.message-enter-active,
.message-leave-active {
  transition: all 0.25s ease-out;
}

.message-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.message-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
