import {useEffect} from "react";
import {Outlet, useNavigate} from 'react-router-dom';

import Header from "./components/Header";

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
            <Header />
            <div className='container'>
                <Outlet/>
            </div>
        </>
    )
}

export default App;
