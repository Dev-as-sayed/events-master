import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRout = ({ children }) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(loading);

    if(loading){
        return <span className="loading loading-infinity loading-lg"></span> ;
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRout;