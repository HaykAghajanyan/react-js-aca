import {memo} from 'react'
import PropTypes from "prop-types";

const Circle = ({id, color, activeCircle, changeColor}) => {
    console.log('rerendered');
    return (
        <div
            id={id}
            className='circle-item'
            onClick={() => changeColor(id)}
            style={{backgroundColor: activeCircle === id ? 'rebeccapurple' : color}}
        >
            {id}
        </div>
    )
}

Circle.propTypes = {
    id: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    changeColor: PropTypes.func.isRequired,
    activeCircle: PropTypes.string.isRequired,
}

// shallow comparison
export default memo(Circle)
