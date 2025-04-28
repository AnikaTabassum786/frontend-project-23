import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.init';

const AuthProvider = ({children}) => {

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    onAuthStateChanged(auth, (currentUser)=>{
          if(currentUser){
            console.log('Has current user', currentUser)
          }
          else{
            console.log('Current User')
          }
    })

    const userInfo={
        createUser,
        signInUser
    }
    
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;