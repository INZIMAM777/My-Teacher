import { createContext, useContext } from "react";
import { app } from "../utils/firebase";
import { collection, getFirestore, getDocs, addDoc, query, where, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, getAuth } from 'firebase/auth'


const MyTeacherContext=createContext(null)
export const useFirebase = () => useContext(MyTeacherContext)

const firestore = getFirestore(app)

const firebaseAuth = getAuth(app);

const googleAuth = new GoogleAuthProvider();
const signUpEp = (email, password) => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password)
}
const signInEp = (email, password) => {
  return signInWithEmailAndPassword(firebaseAuth, email, password)
}

const signGoogle = () => {
  return signInWithPopup(firebaseAuth, googleAuth);
}

const removeSign = () => {
  return signOut(firebaseAuth);
}

export const MyTeacherProvider=(props)=>{
    return(
        <MyTeacherContext.Provider value={{signUpEp, signInEp, signGoogle, removeSign, getLists}}>
            {props.children}
        </MyTeacherContext.Provider>
    )
}