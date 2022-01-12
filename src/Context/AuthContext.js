import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signOut,
    signInWithPopup,
    FacebookAuthProvider,
  } from "@firebase/auth";
  import React, { useContext, createContext, useEffect, useState } from "react";
  import { auth } from "../utils/firebase-init";
  
  const AuthContext = createContext({
    currentUser: null,
    register: () => Promise,
    login: () => Promise,
    logOut: () => Promise,
    signInWithGoogle:() => Promise,
    signInWithFacebook:() => Promise,
  });
  
  export const useAuth = () => useContext(AuthContext);
  
  export default function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
      });
      return () => {
        unsubscribe();
      };
    }, []);
  
    function register(email, password) {
      return createUserWithEmailAndPassword(auth, email, password);
    }
    function login(email, password) {
      return signInWithEmailAndPassword(auth, email, password);
    }
    function logOut() {
      return signOut(auth);
    }
    function signInWithGoogle() {
      const provider = new GoogleAuthProvider()
      return signInWithPopup(auth, provider)
    }
    function signInWithFacebook(){
      const provider = new FacebookAuthProvider()
      return signInWithPopup(auth,provider)
    }
    const value = {
      currentUser,
      register,
      login,
      logOut,
      signInWithGoogle,
      signInWithFacebook,
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  }
  