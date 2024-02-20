import {
    createBrowserRouter
} from "react-router-dom";
import { Home } from "../pages/Home";
import { Layout } from "../components/Layout";
import { Discover } from "../pages/Discover";
import { Join } from "../pages/Join";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },

    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/discover",
                element: <Discover />
            },
            {
                path: "/Join",
                element: <Join />
            }
        ]
    },



]);
