import { Outlet, createBrowserRouter } from "react-router";
import SignUpPage from "../../pages/auth/SignUpPage";
import SignInPage from "../../pages/auth/SignInPage";
import Navbar from "./navbar/Navbar";

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

export const Router = createBrowserRouter(
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