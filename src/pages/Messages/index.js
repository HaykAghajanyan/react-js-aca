import {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";


import AreaInput from "../../components/AreaInput";
import Post from "../../components/Post";
import {Outlet} from "react-router-dom";
import {getMessages} from "../../redux/thunks/messagesThunk";
import {
    messagesErrorSelector,
    messagesLoadingSelector,
    messagesSelector,
    setMessage
} from "../../redux/slices/messagesSlice";

const Messages = () => {
    const dispatch = useDispatch()
    const messages = useSelector(messagesSelector)

    useEffect(() => {
        dispatch(getMessages())
    }, [])

    const addMessage = useCallback((newMessage) => {
        console.log('newMessage', newMessage)
        dispatch(setMessage(newMessage))
    }, [messages])

    return (
        <section className='messages-container'>
            <AreaInput addMessage={addMessage}/>
            <Outlet/>
            <div>
                {
                    messages.map(message => (
                        <Post key={message.id} {...message} />
                    ))
                }
            </div>
        </section>
    )
}

export default Messages;
