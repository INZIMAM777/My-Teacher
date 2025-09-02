import { createBrowserRouter, RouterProvider } from "react-router-dom"
export const App=()=>{
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      error:<ErrorPage/>,
      childer:[
        {
          path:'/',
          element:<Home/>
        },
         {
          path:'/about',
          element:<About/>
        },
        {
          path:''
        }

      ]


    }
  ])
  return(
    
  )
}