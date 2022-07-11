import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  item: 'undercontruction',
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    selectCategory: (state, action) => {
            state.item = action.payload; // eslint-disable-line
    },
  },
});
export const { selectCategory } = categorySlice.actions;
export default categorySlice.reducer;
