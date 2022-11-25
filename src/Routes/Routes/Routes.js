import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Oppo from "../../Pages/Brand/Oppo/Oppo";
import Realme from "../../Pages/Brand/Realme/Realme";
import Samsung from "../../Pages/Brand/Samsung/Samsung";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

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
                element:<Samsung></Samsung>
            },
            {
                path:'/oppo',
                element:<Oppo></Oppo>
            },
            {
                path:'/realme',
                element:<Realme></Realme>
            }
        ]
    }
])
export default router;