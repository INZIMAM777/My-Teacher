import { createBrowserRouter, RouterProvider } from "react-router-dom"
export const App=()=>{
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      error:<ErrorPage/>,
      chil:[
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