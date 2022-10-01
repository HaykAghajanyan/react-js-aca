import {useCallback, useState} from "react";

import Circle from "./components/Circle";
import Header from "./components/Header";
import Messages from "./pages/Messages";

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

const App = () => {
    const [activeCircle, setActiveCircle] = useState(null)

    const changeColor = useCallback((id) => {
        if (activeCircle === id) {
            setActiveCircle(null)
        } else {
            setActiveCircle(id)
        }
    }, [activeCircle])


    return (
        <>
            <Header color={circles[activeCircle - 1]?.color}/>

            <div className='container'>
                {/*{*/}
                {/*    circles.map(({id, color}) => (*/}
                {/*        <Circle*/}
                {/*            id={id}*/}
                {/*            key={id}*/}
                {/*            color={color}*/}
                {/*            changeColor={changeColor}*/}
                {/*            activeCircle={activeCircle}*/}
                {/*        />*/}
                {/*    ))*/}
                {/*}*/}
                <Messages />
            </div>
        </>
    )
}

// class App1 extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             activeCircle: null,
//             isHeaderShown: true,
//             clickCount: 0,
//         }
//         console.log(1)
//     }
//
//     componentDidMount() {
//         console.log(2, 'componentDidMount')
//     }
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log(4, 'componentDidUpdate')
//         if (!this.state.activeCircle && prevState.activeCircle) {
//             console.log('the same circle')
//         }
//     }
//
//     // shouldComponentUpdate(nextProps, nextState, nextContext) {
//     //     if (this.state.activeCircle === '2') return false;
//     //     return true
//     // }
//
//     changeColor = (id) => {
//         if (this.state.activeCircle === id) {
//             this.setState({activeCircle: null})
//         } else {
//             this.setState({activeCircle: id})
//         }
//     }
//
//     toggleHeader = () => {
//         this.setState({isHeaderShown: !this.state.isHeaderShown})
//     }
//
//     render() {
//         console.log(3, 'render')
//         return (
//             <>
//                 {
//                     this.state.isHeaderShown && <Header color={circles[this.state.activeCircle - 1]?.color}/>
//                 }
//                 <button onClick={this.toggleHeader}>
//                     {
//                         this.state.isHeaderShown ? 'hide' : 'show'
//                     }
//                 </button>
//                 <div className='container'>
//                     {
//                         circles.map(({id, color}) => {
//                             const prop = {
//                                 id,
//                                 color,
//                                 changeColor: this.changeColor,
//                                 activeCircle: this.state.activeCircle
//                             }
//                             return (
//                                 <Circle
//                                     key={id}
//                                     propObj={prop}
//                                 />
//                             )
//                         })
//                     }
//                 </div>
//             </>
//         )
//     }
// }


export default App;
