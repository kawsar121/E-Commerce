import { createBrowserRouter } from "react-router-dom";
import Main_layout from "../Layout/Main_layout";
import Home from "../Page/Home/Home";
import Product from "../Page/Home/Product/Product";
import Product_Details from "../Page/Product_Details/Product_Details";
import Login from "../Page/Login/Login";
import DashbordLayout from "../Page/Dashbord_Layout/DashbordLayout";
import Profile from "../Page/Dashbord_Layout/Dashbord/Profile/Profile";
import ProfileEdit from "../Page/Dashbord_Layout/Dashbord/ProfileEdit/ProfileEdit";
import Setting from "../Page/Dashbord_Layout/Dashbord/Setting/Setting";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main_layout></Main_layout> ,
      children: [
        {
          path: "/",
          element: <Home></Home> ,
        },
        {
          path: "/product",
          element: <Product></Product> ,
          // loader er kaz ta korse alada alada coponent e data neyar jonno
          loader : ()=>fetch (`https://dummyjson.com/products`) 
        },
        {
            path: "/product/:id",
            element: <Product_Details></Product_Details>,
            loader : ({params})=> fetch (`https://dummyjson.com/products/${params.id}`) 
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/dashbord",
          element: <DashbordLayout></DashbordLayout>,
          children: [
            {
              path: "/dashbord/profile",
              element:<Profile></Profile>
            },
            {
              path: "/dashbord/profileedit",
              element: <ProfileEdit></ProfileEdit>
            },
            {
              path: "/dashbord/setting",
              element: <Setting></Setting>
            }
            
          ]
        }


      ],
    },
  ]);

export default router;