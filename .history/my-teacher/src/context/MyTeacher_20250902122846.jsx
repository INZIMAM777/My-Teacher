import { createContext, useContext } from "react";
in


const MyTeacherContext=createContext(null)
export const useFirebase = () => useContext(MyTeacherContext)
export const MyTeacherProvider=(props)=>{
    return(
        <MyTeacherContext.Provider value={{}}>
            {props.children}
        </MyTeacherContext.Provider>
    )
}