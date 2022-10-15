import {Outlet, useNavigate} from 'react-router-dom';

import Header from "./components/Header";
import {useEffect} from "react";

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
// color={CIRCLES[activeCircle - 1]?.color}

export default App;
