import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import House from "../pages/House";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import SignUp from "../pages/SignUp";
import AdminPanel from "../pages/AdminPanel";
import AllUsers from "../pages/Allusers";
import AllProducts from "../pages/AllProducts";
import CategoryProduct from "../pages/CategoryProduct";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <House/>
            },
            {
                path:"logIn",
                element:<Login/>
            },
            {
                path:"forget-password",
                element: <ForgotPassword/>
            },
            {
                path:"SignUp",
                element:<SignUp/>
            },
            {
                path : "product-category",
                element : <CategoryProduct/>
            },
            
            {
                path : "admin-panel",
                element : <AdminPanel/>,
                children : [
                    
                        {
                            path : "all-users",
                            element : <AllUsers/>
                        },
                        {
                            path : "all-products",
                            element : <AllProducts/>
                        }
                ]
            }
        ]
    }
])
export default router