import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import auth from "../Firebase/Firebase.config";

const NavBar = () => {

    const {user, logOut} = useContext(AuthContext);

    const handelSingOut = () => {

        logOut(auth)
            .then()
            .catch()
    }
    console.log(user);
    return (

        <div className="flex justify-between p-4  bg-white opacity-50">
            <div><h1 className="text-3xl ">Event Mater</h1></div>
            <nav>
                <NavLink className="text-lg p-1 mr-2 focus-within:bg-slate-600 rounded" to='/'>Home</NavLink>
                <NavLink className="text-lg p-1 mr-2 focus:bg-slate-600 rounded" to='/event'>Event</NavLink>
                <NavLink className="text-lg p-1 mr-2 focus:bg-slate-600 rounded" to='/booking'>Booking</NavLink>

            </nav>
            <div>
                <NavLink className="text-lg p-1 mr-2 focus:bg-slate-600 rounded" to='/registar'>Registar</NavLink>
                {
                    user ?
                    <NavLink onClick={handelSingOut} className="text-lg p-1 mr-2 focus:bg-slate-600 rounded" to='/'>LogOut</NavLink>
                    :
                    <NavLink className="text-lg p-1 mr-2 focus:bg-slate-600 rounded" to='/login'>Login</NavLink>
                }
            </div>
        </div>
    );
};

export default NavBar;