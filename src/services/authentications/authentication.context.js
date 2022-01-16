import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { initializeApp, setLogLevel } from "firebase/app";

import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState([]);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      //   const uid = user.uid;
      setIsAuthenticated(true);
      setUser(user);
      // ...
    } else {
      setUser(null);
    }
  });
  const onLogin = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsLoading(false);
        // Signed in

        setIsAuthenticated(true);
        const user = userCredential.user;
        // console.log(user);

        // ...
      })
      .catch((error) => {
        const errorCode = error.toString();
        setError(errorCode);
        console.log(errorCode);
        setIsLoading(false);
        // ..
      });
  };

  const onRegister = (email, password, confirmPassword) => {
    if (password !== confirmPassword) {
      setError("Error: Password not match");
    }
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsLoading(false);
        // Signed in

        setIsAuthenticated(true);
        const user = userCredential.user;
        // console.log(user);

        // ...
      })
      .catch((error) => {
        const errorCode = error.toString();
        setError(errorCode);
        console.log(errorCode);
        setIsLoading(false);
        // ..
      });
  };

  const onLogout = () => {
    setUser(null);
    signOut(auth);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoading,
        error,
        user,
        onLogin,
        isAuthenticated,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
