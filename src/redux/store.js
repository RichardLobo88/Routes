import { configureStore } from '@reduxjs/toolkit';
import listaComprasReducer from './listaComprasSlice';



export const store = configureStore({
  reducer: {

     listaCompras:listaComprasReducer,
  },
 
});

export default store;