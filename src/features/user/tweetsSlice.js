import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const tweetsSlice = createSlice({
  name: 'user',
  initialState: {
    value: {tweets: [], loading: true},
  },
  reducers: {
    setTweets: (state, action) => {
      state.value = {
       tweets: action.payload,
        loading: false
      };
    },
    setLoading: (state, action) => {
      state.value.loading = action.payload
    }
  },
});

export const { setTweets, setLoading } = tweetsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const reloadTweets = username => dispatch => {
  axios.get('https://ha-react-proyecto-integrador-back-end.vercel.app/tweets').then(res => {
      dispatch(setTweets(res.data.reverse().filter((t) => {
        return (!username || t.author.username === username) ? true : false
        
      })))
    })
};


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export default tweetsSlice.reducer;
