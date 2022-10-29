import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {userSelector} from "../../redux/slices/appSlice";

const inputs = [
    {
        id: '1',
        placeholder: 'user name',
        name: 'userName',
        type: 'text',
        value: ''
    },
    {
        id: '2',
        placeholder: 'change password',
        name: 'password',
        type: 'password',
        value: ''
    },
    {
        id: '3',
        placeholder: 'your email',
        name: 'email',
        type: 'text',
        value: ''
    },
    {
        id: '4',
        placeholder: 'channel description',
        name: 'channelDescription',
        type: 'text',
        value: ''
    },
]

const Profile = () => {
    const {userName, email, channelDescription} = useSelector(userSelector)

    const [inputsData, setInputsData] = useState(inputs)

    useEffect(() => {
        setInputsData(prev => {
            return prev.map(item => {
                if (item.name === 'userName') {
                    item.value = userName
                } else if (item.name === 'email') {
                    item.value = email
                } else if (item.name === 'channelDescription') {
                    item.value = channelDescription
                }
                return item
            })
        })
    }, [userName, email, channelDescription])

    const handleInputChange = e => {
        setInputsData(prev => {
            const currentInputIndex = prev.findIndex(item => item.id === e.target.id)
            prev[currentInputIndex].value = e.target.value
            return [...prev]
        })
    }

    const discardChanges = () => {
        setInputsData(inputs)
    }

    const saveChanges = () => {

    }

    return (
        <div className='profile-container'>
            <div className='profile-section'>
                <div>
                    <input type="file"/>
                </div>
                <p>Comments count: </p>
            </div>
            <div className='profile-section'>
                {
                    inputsData.map(({id, type, name, value, placeholder}) => (
                        <input
                            id={id}
                            key={id}
                            name={name}
                            type={type}
                            value={value}
                            placeholder={placeholder}
                            className='profile-input'
                            onChange={handleInputChange}
                        />
                    ))
                }
            </div>
            <div className='profile-section row'>
                <button onClick={discardChanges} className='btn'>Discard</button>
                <button onClick={saveChanges} className='btn'>Save changes</button>
            </div>
        </div>
    )
}

export default Profile
