import { createSlice } from '@reduxjs/toolkit';
/*
+Aqui usamos esse createSlice para gerir determinados atributos do estado da aplicacao
ou seja, podemos ter um reducer(s) para um ou mais atributos

*/
const initialName = {
    name: '',
  };
  
  const nameSlice = createSlice({
    name: 'name',
    initialState: initialName,
    reducers: {//Aqui nao que action precisao tenha o type
      setName(state,action) {
        state.name=action.payload
      }
    },
  });
  
  //Atraves deste nameActions pode-se usar:
  /*
    -setName    
  */
  export const nameActions = nameSlice.actions;
  
  export default nameSlice.reducer;