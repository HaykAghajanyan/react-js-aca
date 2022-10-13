import {lazy, useCallback, useState} from "react";
import {useRoutes, Navigate} from 'react-router-dom'

import Header from "./components/Header";

const Messages = lazy(() => import('./pages/Messages'))
const Circles = lazy(() => import('./pages/Circles'))

const circles = [
    {
        id: '1',
        color: 'red',
    },
    {
        id: '2',
        color: 'brown',
    },
    {
        id: '3',
        color: 'green',
    },
    {
        id: '4',
        color: 'yellow',
    },
    {
        id: '5',
        color: 'blue',
    },
]

// hooks
// forceUpdate

// controlled and uncontrolled components
// memoize
// chunk

const App = () => {
    const [activeCircle, setActiveCircle] = useState(null)

    const changeColor = useCallback((id) => {
        if (activeCircle === id) {
            setActiveCircle(null)
        } else {
            setActiveCircle(id)
        }
    }, [activeCircle])

    const routes = useRoutes([
        {
            path: '',
            element: <Circles
                circles={circles}
                changeColor={changeColor}
                setActiveCircle={setActiveCircle}
            />,
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
            path: '*',
            element: <Navigate to='' />,
        }
    ])

    return (
        <>
            <Header color={circles[activeCircle - 1]?.color}/>
            <div className='container'>
                {routes}
            </div>
        </>
    )
}


export default App;
