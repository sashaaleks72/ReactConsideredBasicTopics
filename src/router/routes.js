import { Navigate } from "react-router-dom";
import About from "../pages/About";
import Login from "../pages/Login";
import PostInfo from "../pages/PostInfo";
import Posts from "../pages/Posts";

export const privateRoutes = [
    {
        path: "/posts",
        element: <Posts />,
    },
    {
        path: "/posts/:id",
        element: <PostInfo />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "*",
        element: <Navigate replace to="/posts" />,
    },
];

export const publicRoutes = [
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "*",
        element: <Navigate replace to="/login" />,
    },
];
