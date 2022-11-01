import {useEffect, useState} from "react";
import {Outlet, useNavigate} from 'react-router-dom';

import Header from "./components/Header";

// hooks
// forceUpdate

// controlled and uncontrolled components
// memoize
// chunk

const App = () => {
    const navigate = useNavigate()
    const [a, setA] = useState(true)

    useEffect(() => {
        navigate('circles');
    }, [])

    useEffect(() => {
        return () => {
            console.log('44')
        }
    }, [a])

    return (
        <>
            {/*<Header />*/}
            {/*<div className='container'>*/}
            {/*    <Outlet/>*/}
            {/*</div>*/}
            <button onClick={() => setA(prev => !prev)}>click me</button>
        </>
    )
}

export default App;
