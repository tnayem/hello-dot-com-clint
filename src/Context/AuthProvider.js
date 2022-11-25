import React, {createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    //handle error
    const[error,setError] = useState('')
    //set user
    const [user,setUser] = useState(null)
    // Create User
    const createUser=(email,password)=>{
        console.log(email,password);
       return createUserWithEmailAndPassword(auth,email,password)
    }
    // create user wirh google
    const googleSignUp = (provider)=>{
       return signInWithPopup(auth,provider)
    }
    // Sign In Email and Password
    const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    // Sign Out
    const logOut =()=>{
        return signOut(auth)
    }
    //Auth state change
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    const authInfo = {
        createUser,
        googleSignUp,
        error,
        setError,
        signIn,
        user,
        logOut
    }
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;