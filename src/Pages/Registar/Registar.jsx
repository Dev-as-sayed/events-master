import { useContext, useState} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { BiShow, BiHide } from "react-icons/bi";

const Registar = () => {

    const [showPasswor, setShowpassword] = useState(false);


    const {creatNewUser, continewWithGoogle} = useContext(AuthContext);
    const handelReister = e => {
        e.preventDefault();

        const firstName = e.target.firstname.value;
        const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if(password != confirmPassword){
            return <p>chlek your confirm passeord</p>
        }

        console.log(creatNewUser);
        creatNewUser(email, password)
            .then( result => {
                console.log(result.user)
            })
            .catch(error => {console.log(error.message)})
        
    }
    const handelLoginGoogle = () => {
        return continewWithGoogle();
    }
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/J7xPczh/Event-Concept-and-Design.jpg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="w-[640px] px-5 py-8 rounded-lg bg-gray-300 bg-opacity-50">
                
                <form onSubmit={handelReister}>
                        <div className="my-4">
                            <input type="text" name="firstname" placeholder="Your first name" className="w-72 h-10 pl-2 mr-4 border-2 text-white bg-transparent rounded" required/>
                            <input type="text" name="lastName" placeholder="Your last name" className="w-72 h-10 pl-2 border-2 text-white bg-transparent rounded"/>
                        </div>
                        <div className="my-4">
                            <input type="email" name="email" placeholder="Email" className="w-full h-10 pl-2 mr-10 border-2 text-white bg-transparent rounded" required/>
                        </div>
                        <div className="my-4">
                            <div>
                               <input type={showPasswor ? "text" : "password"} name="password" placeholder="Passwod" className="w-full h-10 pl-2 mr-10 border-2 text-white bg-transparent rounded " required/>
                                <span className="text-black relative bottom-7 left-[96%]" onClick={ () => setShowpassword(!showPasswor)}>{showPasswor ? <BiHide></BiHide> : <BiShow></BiShow>}</span>
                            </div>
                            <div>
                               <input type={showPasswor ? "text" : "password"} name="confirmPassword" placeholder="Passwod" className="w-full h-10 pl-2 mr-10 border-2 text-white bg-transparent rounded " required/>
                                <span className="text-black relative bottom-7 left-[96%]" onClick={ () => setShowpassword(!showPasswor)}>{showPasswor ? <BiHide></BiHide> : <BiShow></BiShow>}</span>
                            </div>
                        </div>
                        <div className="w-full flex">
                            <button type="submit" className="btn-primary h-12 w-1/3 mx-auto rounded-lg">Register</button>
                        </div>
                </form>
                <div className="divider">OR</div>
                <div className="w-full flex">
                    <button type="" onClick={handelLoginGoogle} className="btn-primary h-12 w-1/3 mx-auto rounded-lg">Continew with google</button>
                </div>
                <p className="text-center mt-4 text-slate-700">alrady have an <Link to='/login' className="text-blue-500 font-semibold decoration-clone">login</Link></p>
            </div>
        </div>
    );
};

export default Registar;