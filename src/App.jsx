
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Root from './layouts/Root'
import Login from './auth/Login'
import PrivateRouting from './Middleware/PrivateRouting'
import ProductList from './components/ProductList'
import AboutUs from './components/AboutUs'
import UserSignUp from './auth/UserSignUp'
import CreateProduct from './components/CreateProduct'

function App() {
  const router =createBrowserRouter([{
    path:'/',
    element:<Root/>,
    children:[

      {
        path:'/login',
        element:<Login/>
      },
      {
        path: '/signup', 
        element: <UserSignUp />,
      },
      {
        element:<PrivateRouting/>,
        children:[
          {
            path:'/',
            element:<ProductList/>
          },
          {
            path:'/products',
            element:<ProductList/>
          },
          {
            path:'/aboutus',
            element:<AboutUs/>
          },
          {
            path:'/createproducts',
            element:<CreateProduct/>
          }
        ]

      }
    ]
   }])


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
