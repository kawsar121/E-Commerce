import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} 
from "react-router-dom";
import Main_layout from './Layout/Main_layout';
import Home from './Page/Home/Home';
import Product from './Page/Home/Product/Product';
import router from './Route/Route';
// Bejal komanor jonno main.jsx theke route gula soriye route.jsx e niye gesi
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main_layout></Main_layout>,
//     children: [
//       {
//         path: "/",
//         element: <Home></Home>,
//       },
//       {
//         path: "/lol",
//         element: <div>Hey Bangla you are my country</div>,
//       },
//       {
//         path: "/product",
//         element: <Product></Product> ,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
