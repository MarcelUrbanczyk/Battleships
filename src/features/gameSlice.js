import { createSlice } from "@reduxjs/toolkit";
import { initialBoard } from "./initialBoard";
import { initialShips } from "./initialShips";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    ships1: initialShips.map((ship) => ({
      name: ship.name,
      size: ship.size,
      color: ship.color,
      isDropped: false,
      isSunk: false,
    })),
    ships2: initialShips.map((ship) => ({
      name: ship.name,
      size: ship.size,
      color: ship.color,
      isDropped: false,
      isSunk: false,
    })),

    board1: [...initialBoard],
    board2: [...initialBoard],

    winner: null,
    gameMode: null,
    isPlayer1BoardSet: false,
    isPlayer2BoardSet: false,
    isGameStarted: false,
    isGameOver: false,
    isPlayer1Turn: true,
    flip: false,
    draggedShip: null,
  },

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
  },
});

export const selectGame = (state) => state.game;
export const selectShips1 = (state) => selectGame(state).ships1;
export const selectShips2 = (state) => selectGame(state).ships2;
export const selectBoard1 = (state) => selectGame(state).board1;
export const selectBoard2 = (state) => selectGame(state).board2;
export const selectIsGameStarted = (state) => selectGame(state).isGameStarted;
export const selectIsGameOver = (state) => selectGame(state).isGameOver;
export const selectIsPlayer1Turn = (state) => selectGame(state).isPlayer1Turn;
export const selectFlip = (state) => selectGame(state).flip;
export const selectDraggedShip = (state) => selectGame(state).draggedShip;
export const selectWinner = (state) => selectGame(state).winner;
export const selectGameMode = (state) => selectGame(state).gameMode;
export const selectIsPlayer1BoardSet = (state) =>
  selectGame(state).isPlayer1BoardSet;
export const selectIsPlayer2BoardSet = (state) =>
  selectGame(state).isPlayer2BoardSet;

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
} = gameSlice.actions;

export default gameSlice.reducer;
