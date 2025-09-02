import { createContext, useContext, useEffect, useState } from "react";
import { app } from "../utils/firebase";
import { collection, getFirestore, getDocs, addDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  getAuth,
} from "firebase/auth";

const MyTeacherContext = createContext(null);
export const useFirebase = () => useContext(MyTeacherContext);

const firestore = getFirestore(app);
const firebaseAuth = getAuth(app);
const googleAuth = new GoogleAuthProvider();

// Auth functions
const signUpEp = (email, password) =>
  createUserWithEmailAndPassword(firebaseAuth, email, password);
const signInEp = (email, password) =>
  signInWithEmailAndPassword(firebaseAuth, email, password);
const signGoogle = () => signInWithPopup(firebaseAuth, googleAuth);
const removeSign = () => signOut(firebaseAuth);

export const MyTeacherProvider = (props) => {
  const [user, setUser] = useState("");
  const [teacher, setTeacher] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Track current user
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  // ✅ Fetch teachers
  const getLists = async () => {
    setLoading(true);
    setError(null);
    try {
      const q = collection(firestore, "teachers");
      const querySnapshot = await getDocs(q);
      const teachersData = [];
      querySnapshot.forEach((doc) => {
        teachersData.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setTeacher(teachersData);
      return teachersData;
    } catch (err) {
      setError(err.message);
      console.error("Error fetching teachers:", err);
      return [];
    } finally {
      setLoading(false);
    }
  };

  // ✅ Add new teacher
  const addTeacher = async (teacherData) => {
    try {
      const docRef = await addDoc(collection(firestore, "teachers"), teacherData);
      console.log("Teacher added with ID: ", docRef.id);
      // Optionally re-fetch list
      getLists();
      return docRef.id;
    } catch (err) {
      console.error("Error adding teacher:", err);
      throw err;
    }
  };

  return (
    <MyTeacherContext.Provider
      value={{
        signUpEp,
        signInEp,
        signGoogle,
        removeSign,
        user,
        getLists,
        addTeacher, // ✅ expose addTeacher
        teacher,
        loading,
        error,
      }}
    >
      {props.children}
    </MyTeacherContext.Provider>
  );
};
