import React from 'react';
import { Route, Redirect} from 'react-router-dom'

function PrivateRoute({component:Component, ...otherProps}) {
 return (
   <Route
   {...otherProps}
   render={(props) => localStorage.getItem('token') ? (
     <Component {...props} />
   ): (
     <Redirect to="/login" />
   )} />
 )
}

export default PrivateRoute;
