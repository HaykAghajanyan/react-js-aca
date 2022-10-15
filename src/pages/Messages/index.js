import {useCallback, useEffect, useState} from "react";

import AreaInput from "../../components/AreaInput";
import Post from "../../components/Post";
import {useLocation, useParams, Outlet} from "react-router-dom";

const Messages = () => {
    const [messages, setMessages] = useState([])

    const location = useLocation();
    const {id} = useParams();


    useEffect(() => {
        fetch('http://localhost:3000/messages')
            .then(res => res.json())
            .then(res => setMessages(res))
            .catch(err => console.log(err))
    }, [])

    const addMessage = useCallback((newMessage) => {
        setMessages([newMessage, ...messages])
    }, [messages])

    return (
        <section className='messages-container'>
            <AreaInput addMessage={addMessage}/>
            <Outlet />
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
