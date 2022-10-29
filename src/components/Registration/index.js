import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {LOGIN} from "../../constants";

const Registration = ({navigateTo}) => {
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const [error, setError] = useState(false)

    const navigate = useNavigate()

    // creating values--------------------------------

    useEffect(() => {
        if(userName === '' || userEmail === ''|| userPassword === '') {
            setError(true)
        } else {
            setError(false)
        }
    }, [userName, userEmail, userPassword])

    const signUp = () => {
        const userInfoObj = {
            id: Math.round(Math.random() * 1000000000),
            name: userName,
            email:userEmail,
            password: userPassword
        }

           if(!error){
                console.log('err', error)

           } else{
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    body: JSON.stringify(userInfoObj),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(res => res.json())
                    .then(res => console.log('res', res))
                console.log('err', error)
           }
                //navigate('Signin')
            
        
    }

    // sign up-------------------------------------


    return (
        <div className='auth-container'>
            <h3>REGISTRATION</h3>
            <input
                type="text"
                className='auth-input'
                style={error && !userName ? {border: '1.5px red solid'}:null}
                placeholder='username'
                onChange={(e) => setUserName(e.target.value)}
            />
            <input
                type="email"
                className='auth-input'
                style={error && !userEmail ? {border: '1.5px red solid'}:null}
                placeholder='email'
                onChange={(e) => setUserEmail(e.target.value)}
            />
            <input
                type="text"
                className='auth-input'
                style={error && !userPassword ? {border: '1.5px red solid'}:null}
                placeholder='password'
                onChange={(e) => setUserPassword(e.target.value)}
            />
            <button onClick={signUp} className='auth-submit'>Register</button>
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
