import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    useRouteError
} from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Signin';
import Signin from '../pages/Signin';

function Router() {
    function CustomErrorComponent() {
        const error = useRouteError();
        console.error("Routing error:", error);
        return <div>Something went wrong: {error.statusText || error.message}</div>;
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <><Home /></>,
            errorElement: <><CustomErrorComponent /></>
        },
        {
            path: "/login",
            element: <><Login/></>,
            errorElement: <><CustomErrorComponent /></>
        },
        {
            path: "/signin",
            element: <> <Signin/> </>,
            errorElement: <><CustomErrorComponent /></>
        }]

    )
    return (
        <RouterProvider router={router} />
    )
}

export default Router