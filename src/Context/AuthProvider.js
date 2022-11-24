import React, {createContext } from 'react';
import app from '../Firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, signInWithPopup} from 'firebase/auth';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    // Create User
    const createUser=(email,password)=>{
        console.log(email,password);
       return createUserWithEmailAndPassword(auth,email,password)
    }
    // create user wirh google
    const googleSignUp = (provider)=>{
       return signInWithPopup(auth,provider)
    }
    const authInfo = {
        createUser,
        googleSignUp
    }
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;