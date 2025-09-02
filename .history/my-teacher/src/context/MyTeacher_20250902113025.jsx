import { createContext } from "react";

export const MyTeacherContext=createContext(null)
export const MyTeacherProvider=(props)=>{
    return(
        <MyTeacherContext.Provider value={{}}>
            {props.children}
        </MyTeacherContext.Provider>
    )
}