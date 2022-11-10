import {useEffect, useState} from "react";
import {Outlet, useNavigate} from 'react-router-dom';

import Header from "./components/Header";
import instance from "./api/axios";

// hooks
// forceUpdate

// controlled and uncontrolled components
// memoize
// chunk

const App = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('circles');
    }, [])

    return (
        <>
            <Header/>
            <div className='container'>
                <Outlet/>
            </div>
        </>
    )
}

export default App;
