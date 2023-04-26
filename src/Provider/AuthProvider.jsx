import React, { useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import { createContext } from 'react';

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, createUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUserWithPasswordAndEmail = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginWithEmailAndPassword = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const registerWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const registerWithGitHub = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }
    
    const registerWithFacebook = () =>{
        setLoading(true)
        return signInWithPopup(auth, facebookProvider);
    }

    const resetUserPassword = () =>{
        setLoading(true)
        if(user.email){
            return sendPasswordResetEmail(auth, user.email)
        }
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            createUser(currentUser);
            setLoading(false);
        })

        return ()=>{
            return unsubscribe();
        }
    })

    const userLogOut = () =>{
        return signOut(auth);
    }

    const authInfo ={
        user,
        loading,
        createUserWithPasswordAndEmail,
        loginWithEmailAndPassword,
        registerWithGoogle,
        registerWithGitHub,
        registerWithFacebook,
        resetUserPassword,
        userLogOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;