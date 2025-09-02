import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { ScrollToTop } from "./ScrollToTop"
export const Layout=()=>{
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
           
        </>
    )
}