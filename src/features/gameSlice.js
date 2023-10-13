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
    toggleIsGameStarted: (state) => {
      state.isGameStarted = !state.isGameStarted;
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

export const {
  setDraggedShip,
  toggleIsPlayer1Turn,
  toggleIsGameStarted,
  toggleFlip,
  setBoard,
  setShips,
} = gameSlice.actions;

export default gameSlice.reducer;
