import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {selectColor} from "../../redux/slices/appSlice";

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
    {
        id: '5',
        title: 'Login/Registration',
        to: 'auth',
    },
]

const Header = ({color = 'brown'}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(selectColor(color))
    }, [color])

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
                                className={({isActive}) => {
                                    return isActive ? 'active-nav-li' : 'nav-li'
                                }}
                            >{title}
                            </NavLink>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}

// class Header1 extends Component {
//     componentDidMount() {
//         document.addEventListener('click', this.clickHandler)
//     }
//
//     componentWillUnmount() {
//         console.log(5, 'componentWillUnmount')
//
//         document.removeEventListener('click', this.clickHandler)
//     }
//
//     clickHandler = e => {
//         if(e.target.localName === 'header') {
//             console.log('you just clicked on the header!')
//         }
//     }
//
//     render() {
//         return (
//             <header className='header' style={{backgroundColor: this.props.color}}>
//                 <span>Logo</span>
//                 <nav>
//                     <ul className='nav'>
//                         <li className='navLi'>Home</li>
//                         <li className='navLi'>Settings</li>
//                         <li className='navLi'>Login/Registration</li>
//                     </ul>
//                 </nav>
//             </header>
//         )
//     }
// }

Header.propTypes = {
    color: PropTypes.string.isRequired
}

Header.defaultProps = {
    color: 'red'
}

export default Header
