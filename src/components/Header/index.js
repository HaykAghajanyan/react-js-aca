import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeUser, selectColor, userSelector} from "../../redux/slices/appSlice";

const navigation = [
    {
        id: '1',
        title: 'Home',
        to: 'circles',
    },
    {
        id: '2',
        title: 'Messages',
        to: 'messages',
    },
    {
        id: '3',
        title: 'Settings',
        to: 'settings',
    },
    {
        id: '4',
        title: 'Cats',
        to: 'cats',
    },
]

const Header = ({color = 'brown'}) => {
    const dispatch = useDispatch()
    const {userName} = useSelector(userSelector)

    useEffect(() => {
        dispatch(selectColor(color))
    }, [color])

    const logout = () => {
        dispatch(changeUser({}))
        localStorage.removeItem('user')
    }

    return (
        <header className='header' style={{backgroundColor: color}}>
            <span>Logo</span>
            <nav>
                <ul className='nav'>
                    {
                        navigation.map(({id, title, to}) => (
                            <NavLink
                                to={to}
                                key={id}
                                className={({isActive}) => isActive ? 'active-nav-li' : 'nav-li'}
                            >{title}
                            </NavLink>
                        ))
                    }
                    {
                        !userName ?
                            <NavLink
                                to='auth'
                                className={({isActive}) => isActive ? 'active-nav-li' : 'nav-li'}
                            >
                                Login/Registration
                            </NavLink>
                            :
                            <>
                                <NavLink
                                    to='profile'
                                    className={({isActive}) => isActive ? 'active-nav-li' : 'nav-li'}
                                >
                                    Profile
                                </NavLink>
                                <NavLink
                                    to='auth'
                                    onClick={logout}
                                    className={({isActive}) => isActive ? 'active-nav-li' : 'nav-li'}
                                >
                                    Logout
                                </NavLink>
                            </>

                    }
                </ul>
            </nav>
        </header>
    )
}


Header.propTypes = {
    color: PropTypes.string.isRequired
}

Header.defaultProps = {
    color: 'red'
}

export default Header
