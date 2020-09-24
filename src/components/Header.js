import React from 'react';
import {Link, useHistory} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {set} from '../features/user/userSlice'


function Header() {
    const dispatch = useDispatch()
    const history = useHistory()
    var cerrarSession = () => {
      dispatch(set(""))
      history.push('/login')
  }
  const token = useSelector((state) => state.user.value);
  return (   
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/" className="navbar-brand">El Twitter Uruguayo</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/tweets">Tweets </Link>
        </li>
        {token !== "" ? (
            <>
            <li className="nav-item">
                <Link className="nav-link" to="/new-tweet">Twittear</Link>
            </li>
            <li className="nav-item">
                <span className="nav-link a" onClick={cerrarSession}>Cerrar sesion</span>
            </li>
            </>
        ) : (
            <>
            <li className="nav-item">
                <Link className="nav-link" to="/login">Iniciar sesion</Link>
            </li>
            <li className="nav-item">
                <Link to="/signup" className="nav-link">Registrarse</Link>
            </li>
            </>
        )}
      </ul>
    </div>
  </nav>
  );
}

export default Header;
