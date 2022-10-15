import {useSelector} from "react-redux";
import {colorSelector} from "../../redux/slices/appSlice";

const Post = ({ author, date, text }) => {
    const selectedColor = useSelector(colorSelector)

    return (
        <div className='message-item'>
            <div className='message-item-header'>
                <p> </p>
                <p>Sent by: {author}</p>
                <p>{date}</p>
            </div>
            <div style={{color: selectedColor}}>{text}</div>
        </div>
    )
}

export default Post
