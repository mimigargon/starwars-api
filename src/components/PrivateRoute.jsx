import { Navigate } from "react-router-dom";

const PrivateRoute = ({user, component}) => {
    if(user) return component;
    if(!user) return <Navigate to='/login'/>
}

export default PrivateRoute; 