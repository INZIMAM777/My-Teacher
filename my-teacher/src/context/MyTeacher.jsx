// context/MyTeacher.js
import { createContext, useContext, useEffect, useState } from "react";
import { app } from "../utils/firebase";
import { 
  collection, 
  getFirestore, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDoc,
  query,
  where,
  orderBy
} from "firebase/firestore";
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
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSubject, setFilterSubject] = useState("");

  // Track current user
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  // ✅ Fetch teachers with filtering and search
  const getLists = async (options = {}) => {
    setLoading(true);
    setError(null);
    try {
      let q = collection(firestore, "teachers");
      
      // Apply subject filter if provided
      if (options.subject) {
        q = query(q, where("Subject", "==", options.subject));
      }
      
      // Apply ordering
      q = query(q, orderBy("Name"));
      
      const querySnapshot = await getDocs(q);
      const teachersData = [];
      querySnapshot.forEach((doc) => {
        teachersData.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      
      // Apply search term filtering if provided
      let filteredTeachers = teachersData;
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filteredTeachers = teachersData.filter(
          t => 
            t.Name.toLowerCase().includes(term) || 
            t.Subject.toLowerCase().includes(term) ||
            (t.Email && t.Email.toLowerCase().includes(term))
        );
      }
      
      setTeacher(filteredTeachers);
      return filteredTeachers;
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
      // Re-fetch list
      getLists({ subject: filterSubject || null });
      return docRef.id;
    } catch (err) {
      console.error("Error adding teacher:", err);
      throw err;
    }
  };

  // ✅ Update teacher
  const updateTeacher = async (id, teacherData) => {
    try {
      const teacherRef = doc(firestore, "teachers", id);
      await updateDoc(teacherRef, teacherData);
      console.log("Teacher updated with ID: ", id);
      // Re-fetch list
      getLists({ subject: filterSubject || null });
    } catch (err) {
      console.error("Error updating teacher:", err);
      throw err;
    }
  };

  // ✅ Delete teacher
  const deleteTeacher = async (id) => {
    try {
      await deleteDoc(doc(firestore, "teachers", id));
      console.log("Teacher deleted with ID: ", id);
      // Re-fetch list
      getLists({ subject: filterSubject || null });
    } catch (err) {
      console.error("Error deleting teacher:", err);
      throw err;
    }
  };

  // ✅ Get single teacher by ID
  const getTeacherById = async (id) => {
    try {
      const docRef = doc(firestore, "teachers", id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
      } else {
        throw new Error("Teacher not found");
      }
    } catch (err) {
      console.error("Error getting teacher:", err);
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
        addTeacher,
        updateTeacher,
        deleteTeacher,
        getTeacherById,
        teacher,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        filterSubject,
        setFilterSubject,
      }}
    >
      {props.children}
    </MyTeacherContext.Provider>
  );
};