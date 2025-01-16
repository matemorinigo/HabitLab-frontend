import { Outlet, createBrowserRouter } from "react-router";
import SignUpPage from "../../pages/auth/sign-up/SignUpPage";
import SignInPage from "../../pages/auth/sign-in/SignInPage";
import Navbar from "../navbar/Navbar";

const WithNavbar = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}

/**
 * TODO implement protected routes
 * TODO add WithNav elem to the protected routes
 * 
 */

export const ROUTER = createBrowserRouter(
    [
        {
            path: "/sign-up",
            element: <SignUpPage/>
        },
        {
            path: "/sign-in",
            element: <SignInPage/> 
        }
    ]
)