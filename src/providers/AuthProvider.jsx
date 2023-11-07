/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";




export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()
const auth =  getAuth(app)
const AuthProvider = ({children}) => {



const [user,setUser] = useState(null)
const [loading,setLoading] =  useState(true)

const createUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const SignIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
} 


const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }






useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,currentUser =>{
setUser(currentUser);
console.log(currentUser);
setLoading(false)

    })
    return () =>{
        return unsubscribe();
    }
},[])

const authInfo ={
user,
loading,
createUser ,
SignIn,
signInWithGoogle,
logOut

}


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;