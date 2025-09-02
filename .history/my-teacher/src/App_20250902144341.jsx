
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from "./component/Layout/Layout"
import { ErrorPage } from "./component/Layout/ErrorPage"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { AddTeacher } from "./pages/AddTeacher"
export const App=()=>{
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
         {
          path:'/about',
          element:<About/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        {
          path:"/add-teacher",
          element:<AddTeacher />
        },
        

      ]


    }
  ])
  return(
    <>
       <RouterProvider router={router}/>
    </>
  )
}