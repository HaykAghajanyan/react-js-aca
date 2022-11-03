import {lazy} from "react";
import {Navigate} from "react-router-dom";

import App from "../App";
import SingleCat from "../pages/SingleCat";

const Cats = lazy(() => import("../pages/Cats"))
const Circles = lazy(() => import("../pages/Circles"))
const Profile = lazy(() => import("../pages/Profile"))
const Settings = lazy(() => import("../pages/Settings"))
const Messages = lazy(() => import("../pages/Messages"))
const Authentication = lazy(() => import("../pages/Authentication"))

const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: 'circles',
                element: <Circles/>,
            },
            {
                path: 'messages',
                element: <Messages/>,
                children: [
                    {
                        path: ':id',
                        element: <div>MESSAGE</div>
                    }
                ]
            },
            {
                path: 'settings',
                element: <Settings/>
            },
            {
                path: 'cats',
                element: <Cats/>,
            },
            {
                path: 'cats/:id',
                element: <SingleCat />
            },
            {
                path: 'auth',
                element: <Authentication/>
            },
            {
                path: 'profile',
                element: <Profile/>
            },
            {
                path: '*',
                element: <Navigate to='/circles'/>,
            }
        ]
    },
]

export default routes;
