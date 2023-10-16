import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { BiShow, BiHide } from "react-icons/bi";
// import GoogleProvider from "../../AuthProvider/GoogleProvider";

const Login = () => {
    
    const [showPasswor, setShowpassword] = useState(false);

    const {logiIn, continewWithGoogle} = useContext(AuthContext)
    const handelLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        logiIn(email, password)
            .then( result => console.log(result.user))
            .catch(error => console.error(error.message))
    }
    const handelLoginGoogle = () => {
        return continewWithGoogle();
    }

    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/J7xPczh/Event-Concept-and-Design.jpg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="w-[640px] px-5 py-8 text-white rounded-lg bg-gray-300 bg-opacity-50">
                <form onSubmit={handelLogin}>
                    <div className="my-4">
                        <input type="email" name="email" placeholder="Email" className="w-full h-10 pl-2 mr-10 border-2 text-white bg-transparent rounded" required/>
                    </div>
                    <div className="my-4">
                        <input type={showPasswor ? "text" : "password"} name="password" placeholder="Passwod" className="w-full h-10 pl-2 mr-10 border-2 text-white bg-transparent rounded " required/>
                        <span className="text-black relative bottom-7 left-[96%]" onClick={ () => setShowpassword(!showPasswor)}>{showPasswor ? <BiHide></BiHide> : <BiShow></BiShow>}</span>
                    </div>
                    <div className="w-full flex">
                        <button type="submit" className="btn-primary h-12 w-1/3 mx-auto rounded-lg">Login</button>
                    </div>
                </form>
                <div className="divider">OR</div>
                <div className="w-full flex">
                    <button type="" onClick={handelLoginGoogle} className="btn-primary h-12 w-1/3 mx-auto rounded-lg">Continew with google</button>
                </div>
                <p className="text-center mt-4 text-slate-700" >If your new in our site? <Link to='/registar' className="text-blue-500 font-semibold decoration-clone">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;