import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: 'games',
  initialState: {
    currentGame: null
  },
  reducers: {
    setCurrentGame: (state, action) => {
      state.currentGame = action.payload
    }
  },
});

export const { setCurrentGame } = gameSlice.actions;
export default gameSlice.reducer;