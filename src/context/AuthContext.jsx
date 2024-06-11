import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, } from 'firebase/auth';
import {auth, db} from '../services/firebase';
import {doc, setDoc} from 'firebase/firestore'

const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{

    const [user,setUser] = useState({});

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentuser) =>{

            setUser(currentuser);
        })
        return () =>{
            unsubscribe();
        }
    },[])

    function signUp(email, password){
       createUserWithEmailAndPassword(auth, email, password);
       setDoc(doc(db, "users", email),{
        favMovies: [],
       })
    }

    function logIn(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut(){
        return signOut(auth)
    }

    return <AuthContext.Provider value={{user, signUp, logIn, logOut}}>
        {children}
    </AuthContext.Provider>;
}

export const UserAuth = () => {
    return useContext(AuthContext);
}