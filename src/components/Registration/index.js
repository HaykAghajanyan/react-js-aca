import {LOGIN} from "../../constants";
import { useState } from "react";


const Registration = ({navigateTo}) => {

const [userName, setUserName]= useState("")
const [userEmail, setUserEmail]= useState("")
const [userPass, setUserPass]= useState("")

const hash = () => Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(2);

const userInfoObj = {
    id: hash ,
    userName :  userName,
    email: userEmail,
    password: userPass
}


    const handleRegistration = () => {




        
        fetch('http://localhost:3000/users', {
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
                onChange={e => setUserName(e.target.value)}
            />
            <input
                type="email"
                className='auth-input'
                placeholder='email'
                onChange={e => setUserEmail(e.target.value)}
            />
            <input
                type="text"
                className='auth-input'
                placeholder='password'
                onChange={e => setUserPass(e.target.value)}
            />
            <button className='auth-submit' onClick={handleRegistration}>Register</button>
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
