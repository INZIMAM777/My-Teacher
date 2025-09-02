import { createContext, useContext } from "react";
inmport { app } from "../utils/firebase";


const MyTeacherContext=createContext(null)
export const useFirebase = () => useContext(MyTeacherContext)
export const MyTeacherProvider=(props)=>{
    return(
        <MyTeacherContext.Provider value={{}}>
            {props.children}
        </MyTeacherContext.Provider>
    )
}