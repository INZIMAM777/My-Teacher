import { createContext, useContext } from "react";

const MyTeacherContext=createContext(null)
const myContext=useContext(MyTeacherContext)
export const MyTeacherProvider=(props)=>{
    
const myContext=useContext(MyTeacherContext)
    return(
        <MyTeacherContext.Provider value={{}}>
            {props.children}
        </MyTeacherContext.Provider>
    )
}