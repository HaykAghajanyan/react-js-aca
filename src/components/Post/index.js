import {useDispatch, useSelector} from "react-redux";
import {colorSelector, userSelector} from "../../redux/slices/appSlice";
import {useState} from "react";
import instance from "../../api/axios";
import {addComment, deleteMessage} from "../../redux/slices/messagesSlice";
import dayjs from "dayjs";
import {hash} from "../../helpers";

const Post = ({id, author, date, text, type, isCommentsOpened, setActiveCommentId, comments = []}) => {
    const dispatch = useDispatch()
    const {userName} = useSelector(userSelector)
    const selectedColor = useSelector(colorSelector)

    const [textValue, setTextValue] = useState(text)
    const [isEditing, setIsEditing] = useState(false)
    const [commentValue, setCommentValue] = useState('')

    const isAuthor = userName === author

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

    const handleAddingComment = () => {
        const obj = {
            id: `${hash()}${hash()}`,
            text: commentValue,
            author: userName,
            date: dayjs(new Date()).format('DD.MM.YYYY')
        }

        const commentsArr = [obj, ...comments]

        const body = {comments: commentsArr}
        instance.patch(`messages/${id}`, body)
            .then(res => {
                console.log('comment res ->', res)
                dispatch(addComment({id, commentsArr}))
                setCommentValue('')
            })
            .catch(err => console.log('error while adding comment', err))
    }

    const toggleComments = () => {
        setActiveCommentId(() => {
            if (isCommentsOpened) return null
            return id
        })
        setCommentValue('')
    }

    return (
        <>
            <div className={`message-item${type === 'comment' ? ' comment' : ''}`}>
                <div className='message-item-header'>
                    <p></p>
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
                    {isAuthor && <button onClick={handleDelete} className='btn'>Delete</button>}
                    <button onClick={toggleComments} className='btn'>Comments</button>
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
            {
                isCommentsOpened && (
                    <>
                        <div>
                        <textarea
                            value={commentValue}
                            onChange={e => setCommentValue(e.target.value)}
                            className='message-item-area'
                        />
                            <button className='btn' onClick={handleAddingComment}>Send</button>
                        </div>
                        <div style={{display: "flex", flexDirection: 'column', width: '100%'}}>
                            {
                                comments.map(item => (
                                    <Post key={item.id} {...item} type='comment'/>
                                ))
                            }
                        </div>
                    </>
                )
            }
        </>
    )
}

export default Post
