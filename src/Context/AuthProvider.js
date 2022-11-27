import React, {createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    //handle error
    const[error,setError] = useState('')
    //handle loading
    const[loading,setLoading]=useState(true)
    //set user
    const [user,setUser] = useState(null)
    //set modal data
    const[phoneData,setPhoneData]=useState(null)
    // Create User
    const createUser=(email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }
    // create user wirh google
    const googleSignUp = (provider)=>{
        setLoading(true)
       return signInWithPopup(auth,provider)
    }
    // Sign In Email and Password
    const signIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    // Sign Out
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    //update profile
    const updateUserProfile = (profile)=>{
        return updateProfile(auth.currentUser,profile)
    }
    //Auth state change
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
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
        logOut,
        loading,
        phoneData,
        setPhoneData,
        updateUserProfile
    }
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;