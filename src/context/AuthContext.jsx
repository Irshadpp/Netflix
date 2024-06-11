import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, } from 'firebase/auth';
import {auth, db} from '../util/firebase';
import {doc, setDoc} from 'firebase/firestore'
import { getErrorMessage } from "../util/errorMessages";

const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{

    const [user,setUser] = useState({});
    // const [errorMessage, setErrorMessage] = useState();

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentuser) =>{

            setUser(currentuser);
        })
        return () =>{
            unsubscribe();
        }
    },[])

     const signUp = async (email, password) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db, "users", email),{
            favMovies: [],
       })
        } catch (error) {
            throw new Error(getErrorMessage(error.code));
        }
       
    }

    async function logIn(email, password){
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            throw new Error(getErrorMessage(error.code));
        }
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