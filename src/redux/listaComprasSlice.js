import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
}

const listaComprasSlice = createSlice({
  name: 'listaCompras',
  initialState,
  reducers: {
    addItem: (state, action) => {
    state.items = [...state.items,action.payload]
    // state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = listaComprasSlice.actions;
export default listaComprasSlice.reducer;