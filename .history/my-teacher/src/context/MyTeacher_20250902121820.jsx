import { createContext, useContext } from "react";

const MyTeacherContext=createContext(null)
export const MyTeacherProvider=(props)=>{
    
const myContext=useContext(MyTeacherContext)
    return(
        <MyTeacherContext.Provider value={{}}>
            {props.children}
        </MyTeacherContext.Provider>
    )
}