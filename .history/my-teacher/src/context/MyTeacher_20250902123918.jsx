import { createContext, useContext, useEffect, useState } from "react";
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
    const [user, setUser] = useState('')
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user)
      }
    })
  }, [])


  const [teacher, setTeacher] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getLists = async (filters = {}) => {
    setLoading(true)
    setError(null)
    try {
      let q = collection(firestore, 'teachers')

      const querySnapshot = await getDocs(q)
      const propertiesData = []

      querySnapshot.forEach((doc) => {
        propertiesData.push({
          id: doc.id,
          ...doc.data()
        })
      })
      // console.log(propertiesData)
      setTeacher(propertiesData)
      return propertiesData
    } catch (err) {
      setError(err.message)
      console.error("Error fetching properties:", err)
      return []
    } finally {
      setLoading(false)
    }
  }

    return(
        <MyTeacherContext.Provider value={{signUpEp, signInEp, signGoogle, removeSign, user}}>
            {props.children}
        </MyTeacherContext.Provider>
    )
}