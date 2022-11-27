import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import Blog from "../../Pages/Blog/Blog";
import Oppo from "../../Pages/Brand/Oppo/Oppo";
import Realme from "../../Pages/Brand/Realme/Realme";
import Samsung from "../../Pages/Brand/Samsung/Samsung";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyProducts from "../../Pages/MyProducts/MyProducts";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/samsung',
                element:<PrivateRoute><Samsung></Samsung></PrivateRoute>
            },
            {
                path:'/oppo',
                element:<PrivateRoute><Oppo></Oppo></PrivateRoute>
            },
            {
                path:'/realme',
                element:<PrivateRoute><Realme></Realme></PrivateRoute>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/addproduct',
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path:'/myproducts',
                element:<PrivateRoute><MyProducts></MyProducts></PrivateRoute>
            }
        ]
    }
])
export default router;