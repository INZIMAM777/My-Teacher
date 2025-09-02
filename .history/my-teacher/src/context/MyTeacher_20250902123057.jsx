import { createContext, useContext } from "react";
import { app } from "../utils/firebase";

const MyTeacherContext=createContext(null)
export const useFirebase = () => useContext(MyTeacherContext)

const firestore = getFirestore(app)
export const MyTeacherProvider=(props)=>{
    return(
        <MyTeacherContext.Provider value={{}}>
            {props.children}
        </MyTeacherContext.Provider>
    )
}