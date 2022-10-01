import {useCallback, useEffect, useState} from "react";

import AreaInput from "../../components/AreaInput";
import Post from "../../components/Post";

const Messages = () => {
    const [messages, setMessages] = useState([])

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
