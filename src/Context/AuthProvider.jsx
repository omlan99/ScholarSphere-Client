import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../Firebase/firebase.init";
import useCommonAxios from "../Hook/useCommonAxios";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const axiosCommon = useCommonAxios();

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log(loggedUser);
      setUser(loggedUser);
      if (loggedUser) {
        const userInfo = {
          email: loggedUser.email,
        };
        console.log(userInfo);
        axiosCommon.post('/jwt',userInfo)
        .then(res => {
          console.log(res)
          if(res.data){
            localStorage.setItem('access-token', res.data)
          }

        })
      } else {
        localStorage.removeItem("access-token");
      }
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, [axiosCommon]);
  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const signOutUser = () => {
    setLoader(true);

    return signOut(auth);
  };
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const authValue = {
    user,
    setUser,
    loader,
    createUser,
    signInUser,
    googleSignIn,
    updateUser,
    signOutUser,
    resetPassword,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
