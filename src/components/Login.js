import React, {useState, useEffect} from 'react';
import {login} from '../features/user/userSlice'
import { useSelector, useDispatch } from 'react-redux';
import {useHistory, Link} from 'react-router-dom'

function Login() {
  var [user, setUser] = useState({
    email: "",
    password: ""
  })

  const token = useSelector((state) => state.user.value);
  const history = useHistory()
   

  useEffect(() => {
    if(token !== ""){
      history.push('/tweets')
       
    }
  },[])

  var dispatch = useDispatch()
  var submit = (e) => {
    e.preventDefault()
    dispatch(login(user))
    history.push('/tweets')
  }

  return (   
        <div className="container">
          <h1 className="text-center">Iniciar sesion</h1>
          <form className="col-md-6 offset-md-3 card py-4" onSubmit={submit}>
            <div className="form-group">
            <label for="email">Email: </label>
            <input className="form-control" id="email" type="email" placeholder="Email" value={user.email} onChange={e => setUser({...user,email: e.target.value})}/>
            </div>
           
           <div className="form-group">
            <label for="password">Password: </label>
            <input className="form-control" id="password" type="password" placeholder="Password" value={user.password} onChange={e => setUser({...user,password: e.target.value})}/>
           </div>

            <button className="btn btn-primary" type="submit">Iniciar sesion</button>
            <Link className="pt-2" to="/signup">No tengo cuenta</Link>
          </form>
        </div>
  );
}

export default Login;
