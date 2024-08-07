import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import Home from './views/Home/Home.js'
import Login from './views/Login/Login.js'
import Signup from "./views/Signup/signup.js"
import "./global.css"
import Addbook from './views/Addbook/Addbook.js';

const root = ReactDOM.createRoot(document.getElementById('root'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/signup',
    element: <Signup/>
  },
  {
    path:'/add-book',
    element:<Addbook/>
  },
  // {
  //   path:'/transactions',

  // },
  {
    path:'*',
    element: <h1>PAGE NOT FOUND</h1>
  }
])

root.render(<RouterProvider router={router}/>);