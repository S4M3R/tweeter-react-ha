import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import tweetReducer from '../features/user/tweetsSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    tweets: tweetReducer
  },
});
