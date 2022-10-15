import {useCallback, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";

import {LOGIN, REGISTRATION} from "../../constants";
import Login from "../../components/Login";
import Registration from "../../components/Registration";
import {authRouteChange, authRouteSelector} from "../../redux/slices/appSlice";


const Authentication = () => {
    const dispatch = useDispatch();
    const authRoute = useSelector(authRouteSelector);

    const navigateTo = useCallback(route => {
        dispatch(authRouteChange(route))
    }, []);

    const options = {
        [LOGIN]: <Login navigateTo={navigateTo}/>,
        [REGISTRATION]: <Registration navigateTo={navigateTo}/>,
    }

    const Component = useMemo(() => options[authRoute], [authRoute])

    return (
        <>
            {Component}
        </>
    )
}

export default Authentication;
