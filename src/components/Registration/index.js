import { useState } from "react";
import {LOGIN} from "../../constants";

const Registration = ({navigateTo}) => {
    const [userName, setUserName] = useState('')
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegistration = () => {
        const userInfoObj = {
            userName: userName,
            mail: mail,
            password: password,
        }

        fetch('http://localhost:3000/register', {
            method: 'POST',
            body: JSON.stringify(userInfoObj),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(res => console.log('res', res))
    }

    return (
        <div className='auth-container'>
            <h3>REGISTRATION</h3>
            <input
                type="text"
                className='auth-input'
                placeholder='username'
                value={userName}
                onChange = { e => setUserName(e.target.value)}
            />
            <input
                type="email"
                className='auth-input'
                placeholder='email'
                value={mail}
                onChange ={e => setMail(e.target.value)}
            />
            <input
                type="text"
                className='auth-input'
                placeholder='password'
                value={password}
                onChange = {e => setPassword(e.target.value)}
            />
            <button onClick={handleRegistration} className='auth-submit'>Register</button>
            <div className='auth-navigate'>
                <p className='auth-notification'>Already have an account?</p>
                <button
                    className='auth-submit'
                    onClick={() => navigateTo(LOGIN)}
                >Sign in</button>
            </div>
        </div>
    )
}

export default Registration;
