import { useState, useCallback } from "react";
import {LOGIN} from "../../constants";
import instance from "../../api/axios";



const Registration = ({navigateTo}) => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isActive, setIsActive] = useState(false)


    const checkInputFields = useCallback(() => {
        if(userName === '' || email === ''|| password === '') return true;

    }, [userName, email, password])



    const handleRegistration = () => {
        const userInfoObj = {
            userName,
            email,
            password
        }

        if(!checkInputFields()) {
            instance.post('users', userInfoObj)
            .then(navigateTo(LOGIN))
            .catch(err => console.log('res', err))
        } else {
            setIsActive(true)
        }
    }

    return (
        <div className='auth-container'>
            <h3>REGISTRATION</h3>
            <input
                type="text"
                className={isActive  && userName === '' ? 'error-input' : 'auth-input'}
                placeholder='username'
                value={userName}
                onChange={e => setUserName(e.target.value)}
            />
            {isActive  && userName === '' ? <div className='error-field'>This is required.</div> : <></>}
            <input
                type="email"
                className={isActive  && email === '' ? 'error-input' : 'auth-input'}
                placeholder='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            {isActive  && email === '' ? <div className='error-field'>This is required.</div> : <></>}
            <input
                type="text"
                className={isActive  && password === '' ? 'error-input' : 'auth-input'}
                placeholder='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            {isActive  && password === '' ? <div className='error-field'>This is required.</div> : <></>}
            <button 
                className='auth-submit'
                onClick={handleRegistration}
                >Register</button>
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