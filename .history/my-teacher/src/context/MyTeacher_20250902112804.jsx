import { createContext } from "react";

const MyTeacherContext=createContext(null)
export const MyTeacherProvider=(props)=>{
    return(
        <MyTeacherContext.Provider value={{}}>
            {}
        </MyTeacherContext.Provider>
    )
}