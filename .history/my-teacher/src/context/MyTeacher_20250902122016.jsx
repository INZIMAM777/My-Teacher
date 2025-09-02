import { createContext, useContext } from "react";


const MyTeacherContext=createContext(null)
export const myContext=()=>useContext(MyTeacherContext);
export const MyTeacherProvider=(props)=>{
    return(
        <MyTeacherContext.Provider value={{}}>
            {props.children}
        </MyTeacherContext.Provider>
    )
}