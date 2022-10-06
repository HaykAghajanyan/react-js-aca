import Circle from "../../components/Circle";

const Circles = ({circles, changeColor, activeCircle}) => (
    <>
        {
            circles.map(({id, color}) => (
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

export default Circles
