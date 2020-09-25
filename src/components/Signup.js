import React, {useState, useEffect} from 'react';
import {signup} from '../features/user/userSlice'
import { useSelector, useDispatch } from 'react-redux';
import {Link, useHistory} from 'react-router-dom' 

function Signup() {
  var [user, setUser] = useState({
    email: "",
    username: "",
    password: ""
  })

  var history = useHistory()
  var dispatch = useDispatch()
  const token = useSelector((state) => state.user.value);


  var submit = (e) => {
    e.preventDefault()
    dispatch(signup(user))
    history.push('/tweets')
  }

  useEffect(() => {
    if(token !== ""){
      history.push('/tweets')
       
    }
  },[])

  return (   
    <div className="container">
      <h1 className="text-center">Registrarse</h1>
      <form className="col-md-6 offset-md-3 card py-4" onSubmit={submit}>
        <div className="form-group">
          <label for="email">Email: </label>
          <input className="form-control" id="email" type="email" placeholder="Email" value={user.email} onChange={e => setUser({...user,email: e.target.value})}/>
        </div>
        
        <div className="form-group">
          <label for="email">Username: </label>
          <input className="form-control" id="username" type="text" placeholder="Username" value={user.username} onChange={e => setUser({...user,username: e.target.value})}/>
        </div>

        <div className="form-group">
          <label for="password">Password: </label>
          <input className="form-control" id="password" type="password" placeholder="Password" value={user.password} onChange={e => setUser({...user,password: e.target.value})}/>
        </div>

        <button className="btn btn-primary" type="submit">Registrarse</button>
        <Link className="pt-2" to="/signup">No tengo cuenta</Link>
      </form>
  </div>
  );
}

export default Signup;
