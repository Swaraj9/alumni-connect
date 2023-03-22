import React, {useContext} from 'react';
import { Navigate, Route} from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

const PrivateRoute = ({children, roles, ...rest}) => {
    const {isAuthenticated, user} = useContext(AuthContext);
    if(!isAuthenticated)
        return <Navigate to='/'/>

    if(!roles.includes(user.role))
        return <Navigate to={`/${user.role}`}/>
    
    return children;
}

export default PrivateRoute;