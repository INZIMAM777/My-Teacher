import { Children } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
export const App=()=>{
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      errorE:<ErrorPage/>,
      Children:[
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
        }

      ]


    }
  ])
  return(
    
  )
}