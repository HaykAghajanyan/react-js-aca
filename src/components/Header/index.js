import PropTypes from "prop-types";

const navigation = [
    {
        id: '1',
        title: 'Home',
    },
    {
        id: '2',
        title: 'Messages',
    },
    {
        id: '3',
        title: 'Settings',
    },
    {
        id: '4',
        title: 'Login/Registration',
    },
]

const Header = ({color}) => {
    return (
        <header className='header' style={{backgroundColor: color}}>
            <span>Logo</span>
                <nav>
                    <ul className='nav'>
                        {
                            navigation.map(({ id, title }) => (
                                <li key={id} className='navLi'>{title}</li>
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
