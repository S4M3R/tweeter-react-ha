import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: "",
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
      localStorage.setItem('token',action.payload)
    }
  },
});

export const { set } = userSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const signup = user => dispatch => {
  axios.post('https://ha-react-proyecto-integrador-back-end.vercel.app/users',user).then((res) => {
    dispatch(set(res.data.token))
  })
};

export const login = user => dispatch => {
  axios.post('https://ha-react-proyecto-integrador-back-end.vercel.app/sessions',user).then((res) => {
    console.log(res.data)  
    dispatch(set(res.data.token))
  })
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export default userSlice.reducer;
