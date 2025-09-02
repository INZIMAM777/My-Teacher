import { createContext } from "react";

const MyTeacherContext=createContext(null)
export const MyTeacherProvider=()=>{
    return(
        <MyTeacherContext.Provider value={{}}>
            
        </MyTeacherContext.Provider>
    )
}