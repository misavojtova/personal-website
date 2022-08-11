import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 0,
};

let pageSlice = createSlice({
  name: 'counterPage',
  initialState: initialState,
  reducers: {
    currentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { currentPage } = pageSlice.actions;
export default pageSlice.reducer;
