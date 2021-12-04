import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import nameReducer from './name'

//Atraves de counter pode se acessar value
//Atraves de name pode se acessar name
const store = configureStore({
  reducer: { counter: counterReducer, name: nameReducer },
});

export default store;