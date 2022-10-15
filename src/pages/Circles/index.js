import { useState } from "react";

import Circle from "../../components/Circle";
import { CIRCLES } from "../../constants";

const Circles = () => {
    const [activeCircle, setActiveCircle] = useState(null)

    const changeColor = (id) => {
        if (activeCircle === id) {
            setActiveCircle(null)
        } else {
            setActiveCircle(id)
        }
    }

    return (
        <>
            {
                CIRCLES.map(({id, color}) => (
                    <Circle
                        id={id}
                        key={id}
                        color={color}
                        changeColor={changeColor}
                        activeCircle={activeCircle}
                    />
                ))
            }
        </>
    )
}

export default Circles
