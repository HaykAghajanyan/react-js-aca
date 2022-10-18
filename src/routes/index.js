import {lazy} from "react";
import {Navigate} from "react-router-dom";

import App from "../App";
import Settings from "../pages/Settings";

const Circles = lazy(() => import("../pages/Circles"))
const Messages = lazy(() => import("../pages/Messages"))
const Authentication = lazy(() => import("../pages/Authentication"))

const routes = [
    {
        path: '/',
        element: <App />,
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
              element: <Settings />
            },
            {
              path: 'auth',
              element: <Authentication />
            },
            {
                path: '*',
                element: <Navigate to='/circles' />,
            }
        ]
    },
]

export default routes;
