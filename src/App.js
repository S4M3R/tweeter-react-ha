import React, {useEffect} from 'react';
import Header from './components/Header'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Tweets from './components/Tweets'
import Create from './components/Create'
import Login from './components/Login'
import Signup from './components/Signup'
import PrivateRoute from './components/PrivateRoute';
import { useDispatch } from 'react-redux';
import {set} from './features/user/userSlice'



function App() {

  var dispatch = useDispatch()

  useEffect(() => {
    dispatch(set(localStorage.getItem('token')))
  },[])
  return (
    <BrowserRouter>
      <div className="App">    
        <Header />
        <Switch>
          <Route path="/tweets/:username"><Tweets /></Route>
          <Route path="/tweets"><Tweets /></Route>
          <Route exact path="/new-tweet"><PrivateRoute component={Create} /></Route>
          <Route exact path="/login"><Login /></Route>
          <Route exact path="/signup"><Signup /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
