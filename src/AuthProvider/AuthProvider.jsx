import { createContext, useEffect, useState} from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const provider = new GoogleAuthProvider();

    const creatNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const logiIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = (auth) => {
        setLoading(true)
        return signOut(auth);
    }
    const continewWithGoogle = () =>{
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
            })
            .catch(error => console.error(error.message))
    }

    useEffect( () => {
        const unSubscrib = onAuthStateChanged(auth, carentUser => {
            console.log('current user:', carentUser);
            setUser(carentUser);
        });
        return ( () => unSubscrib())
    }, [])

    const authInformation ={
        user,
        loading, 
        creatNewUser,
        logiIn,
        continewWithGoogle,
        logOut
    };
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


// loading pass 