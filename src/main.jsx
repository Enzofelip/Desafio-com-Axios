import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";

//Páginas do Routers

//Home
import Home from './routers/Home';

//New
import New from './routers/New';

// Posts
import Posts from './routers/Posts';

// Admin
import Admin from './routers/Admin';

//Edit
import Edit from './routers/Edit';

const  router = createBrowserRouter([
  {
    element:<App/>,

    children : [
      {
        path:"/",
        element:<Home/>
      },
      {
        path: "/new",
        element: <New/>
      },
      {
        path:"/posts/:id",
        element:<Posts/>
      },
      {
        path: "/admin",
        element: <Admin/>
      },
      {
        path: "/posts/edit/:id",
        element:<Edit/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
