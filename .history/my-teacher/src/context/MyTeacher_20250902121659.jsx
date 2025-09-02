import { createContext } from "react";

const MyTeacherContext=createContext(null)
const 
export const MyTeacherProvider=(props)=>{
    return(
        <MyTeacherContext.Provider value={{}}>
            {props.children}
        </MyTeacherContext.Provider>
    )
}