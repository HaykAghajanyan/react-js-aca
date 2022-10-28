import {useDispatch, useSelector} from "react-redux";
import {colorSelector, userSelector} from "../../redux/slices/appSlice";
import {useState} from "react";
import instance from "../../api/axios";
import {deleteMessage} from "../../redux/slices/messagesSlice";

const Post = ({id, author, date, text}) => {
    const dispatch = useDispatch()
    const user = useSelector(userSelector)
    const selectedColor = useSelector(colorSelector)

    const [textValue, setTextValue] = useState(text)
    const [isEditing, setIsEditing] = useState(false)

    const isAuthor = user.userName === author

    const handleEditing = () => {
        if (isEditing) {
            instance.patch(`messages/${id}`, {text: textValue})
                .finally(() => {
                    setIsEditing(!isEditing)
                })
        } else {
            setIsEditing(!isEditing)
        }
    }

    const handleDelete = () => {
        instance.delete(`messages/${id}`)
            .then(res => {
                if (res.status === 200) {
                    dispatch(deleteMessage(id))
                }
            })
    }

    return (
        <div className='message-item'>
            <div className='message-item-header'>
                <p> </p>
                <p>Sent by: {author}</p>
                <p>{date}</p>
            </div>
            <div className='message-actions-btns'>
                {
                    isAuthor && (
                        <button
                            className='btn'
                            onClick={handleEditing}
                        >
                            {isEditing ? 'Save' : 'Edit'}
                        </button>
                    )
                }
                <button className='btn'>Reply</button>
                {isAuthor && <button onClick={handleDelete} className='btn'>Delete</button>}
            </div>
            {
                isEditing ?
                    <div className='message-item-edit'>
                        <textarea
                            value={textValue}
                            onChange={e => setTextValue(e.target.value)}
                            className='message-item-area'
                        />
                    </div>
                    :
                    <div style={{color: selectedColor, maxWidth: '70%'}}>{textValue}</div>
            }
        </div>
    )
}

export default Post
