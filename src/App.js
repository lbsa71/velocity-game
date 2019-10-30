import { Client } from 'boardgame.io/react';
import { TicTacToeBoard } from './Board.js';

const TicTacToe = {
  setup: () => ({ cells: Array(9).fill(null) }),

  moves: {
    clickCell: (G, ctx, id) => {
      G.cells[id] = ctx.currentPlayer;
    },
  },
};

const App = Client({ game: TicTacToe,
board: TicTacToeBoard
 });

export default App;
