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
// import useCommonAxios from "../Hook/useCommonAxios";
import useAxiosSecure from "../Hook/useAxiosSecure";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  // const axiosCommon = useCommonAxios()
  const axiosSecure = useAxiosSecure()
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
      // console.log(loggedUser);
      setUser(loggedUser);
      if (loggedUser) {
        const userInfo = {
          email: loggedUser.email,
        };
        console.log(userInfo);
        axiosSecure.post('/jwt',userInfo)
        .then(res => {
          console.log(res)
          if(res.data.token){
            localStorage.setItem('access-token', res.data.token)
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
  }, [axiosSecure]);
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
