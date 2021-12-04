import { createSlice } from '@reduxjs/toolkit';
/*
+Aqui usamos esse createSlice para gerir determinados atributos do estado da aplicacao

*/
const initialCounter = {
    value: 0,
  };
  
  const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounter,
    reducers: {//Aqui o state e atualizado
      increment(state) {
        state.value++;
      },
      decrement(state) {
        state.value--;
      },
      initialValue(state,action) {
        state.value=action.payload;
      },
    },
  });
  
  //Atraves deste counterActions pode-se usar:
  /*
    -increment
    -decrement
    -initialValue
  */
  export const counterActions = counterSlice.actions;
  
  export default counterSlice.reducer;