import {useState, memo} from "react";
import dayjs from "dayjs";
import instance from "../../api/axios";
import {useSelector} from "react-redux";
import {userSelector} from "../../redux/slices/appSlice";

const AreaInput = ({ addMessage }) => {
    const { userName } = useSelector(userSelector)

    const [areaValue, setAreaValue] = useState('')

    const handleAreaChange = e => {
        setAreaValue(e.target.value)
    }

    const clearInput = () => {
        setAreaValue('')
    }

    const hash = () => Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(2);

    const postMessage = () => {
        const obj = {
            id: `${hash()}${hash()}`,
            text: areaValue,
            author: userName,
            date: dayjs(new Date()).format('DD.MM.YYYY')
        }

        instance.post('messages', obj)
            .then(res => {
                addMessage(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='area-input-container'>
            <textarea
                value={areaValue}
                className='area-input'
                onChange={handleAreaChange}
            />
            <div className='area-input-controls'>
                <button onClick={postMessage} className='button'>post</button>
                <button onClick={clearInput} className='button'>clear</button>
            </div>
        </div>
    )
}

export default memo(AreaInput)
