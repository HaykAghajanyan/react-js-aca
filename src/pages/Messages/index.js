import {useCallback, useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import AreaInput from "../../components/AreaInput";
import Post from "../../components/Post";
import {Outlet} from "react-router-dom";
import {getMessages} from "../../redux/thunks/messagesThunk";
import {
    messagesSelector,
    setMessage
} from "../../redux/slices/messagesSlice";

const options = [
    {
        id: '1',
        text: 'Author',
        value: 'author',
    },
    {
        id: '2',
        text: 'Text',
        value: 'text',
    }
]

const Messages = () => {
    const dispatch = useDispatch()
    const messages = useSelector(messagesSelector)

    const [isFilter, setIsFilter] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [searchType, setSearchType] = useState(options[0].value)
    const [filteredMessages, setFilteredMessages] = useState([])

    const timeoutRef = useRef(null)

    useEffect(() => {
        dispatch(getMessages())
    }, [])

    useEffect(() => {
        filterMessages()
        return () => {
            clearTimeout(timeoutRef.current)
        }
    }, [messages, searchValue, searchType])

    const addMessage = useCallback((newMessage) => {
        dispatch(setMessage(newMessage))
    }, [messages])

    const filterMessages = () => {
        timeoutRef.current = setTimeout(() => {
            const filteredData = messages.filter(item => {
                return item[searchType].toLowerCase()
                    .includes(searchValue.toLowerCase())
            })

            setFilteredMessages(filteredData)
        }, 300)
    }

    return (
        <section className='messages-container'>
            <button
                className='messages-filter-toggle'
                onClick={() => setIsFilter(!isFilter)}
            >{isFilter ? 'close' : 'show'} filter
            </button>
            <AreaInput addMessage={addMessage}/>
            {
                isFilter && (
                    <div className='messages-filter'>
                        <input
                            type="text"
                            value={searchValue}
                            className='messages-filter-input'
                            onChange={e => setSearchValue(e.target.value)}
                        />
                        <select
                            value={searchType}
                            className='messages-filter-select'
                            onChange={e => setSearchType(e.target.value)}
                        >
                            {
                                options.map(({id, text, value}) => (
                                    <option key={id} value={value}>{text}</option>
                                ))
                            }
                        </select>
                    </div>
                )
            }
            <Outlet/>
            <div>
                {
                    filteredMessages.map(message => (
                        <Post key={message.id} {...message} />
                    ))
                }
            </div>
        </section>
    )
}

export default Messages;
