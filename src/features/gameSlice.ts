import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { createSelector } from "@reduxjs/toolkit";

type GameState = typeof initialState;

const gameSlice = createSlice({
  name: "game",
  initialState,

  reducers: {
    setDraggedShip: (state, { payload: ship }) => {
      state.draggedShip = ship;
    },
    toggleFlip: (state) => {
      state.flip = !state.flip;
    },
    toggleIsPlayer1Turn: (state) => {
      state.isPlayer1Turn = !state.isPlayer1Turn;
    },
    toggleIsPlayerBoardSet: (state, { payload: playerNumber }) => {
      if (playerNumber === 1) {
        state.isPlayer1BoardSet = !state.isPlayer1BoardSet;
      } else if (playerNumber === 2) {
        state.isPlayer2BoardSet = !state.isPlayer2BoardSet;
      }
    },
    toggleIsGameStarted: (state) => {
      state.isGameStarted = !state.isGameStarted;
    },
    toggleIsGameOver: (state) => {
      state.isGameOver = !state.isGameOver;
    },
    setBoard: (state, action) => {
      const { boardNumber, content } = action.payload;
      if (boardNumber === 1) {
        state.board1 = content;
      } else if (boardNumber === 2) {
        state.board2 = content;
      }
    },
    setShips: (state, action) => {
      const { shipsNumber, content } = action.payload;
      if (shipsNumber === 1) {
        state.ships1 = content;
      } else if (shipsNumber === 2) {
        state.ships2 = content;
      }
    },
    setWinner: (state, { payload: winner }) => {
      state.winner = winner;
    },
    setGameMode: (state, { payload: gameMode }) => {
      state.gameMode = gameMode;
    },
    setInitialState: () => {
      return initialState;
    },
  },
});

export const selectGame = (state: { game: GameState }) => state.game;
export const selectShips1 = createSelector(selectGame, (game) => game.ships1);
export const selectShips2 = createSelector(selectGame, (game) => game.ships2);
export const selectBoard1 = createSelector(selectGame, (game) => game.board1);
export const selectBoard2 = createSelector(selectGame, (game) => game.board2);
export const selectIsGameStarted = createSelector(
  selectGame,
  (game) => game.isGameStarted
);
export const selectIsGameOver = createSelector(
  selectGame,
  (game) => game.isGameOver
);
export const selectIsPlayer1Turn = createSelector(
  selectGame,
  (game) => game.isPlayer1Turn
);
export const selectFlip = createSelector(selectGame, (game) => game.flip);
export const selectDraggedShip = createSelector(
  selectGame,
  (game) => game.draggedShip
);
export const selectWinner = createSelector(selectGame, (game) => game.winner);
export const selectGameMode = createSelector(
  selectGame,
  (game) => game.gameMode
);
export const selectIsPlayer1BoardSet = createSelector(
  selectGame,
  (game) => game.isPlayer1BoardSet
);
export const selectIsPlayer2BoardSet = createSelector(
  selectGame,
  (game) => game.isPlayer2BoardSet
);

export const {
  setDraggedShip,
  toggleIsPlayer1Turn,
  toggleIsGameStarted,
  toggleIsPlayerBoardSet,
  toggleIsGameOver,
  toggleFlip,
  setBoard,
  setShips,
  setWinner,
  setGameMode,
  setInitialState,
} = gameSlice.actions;

export default gameSlice.reducer;
