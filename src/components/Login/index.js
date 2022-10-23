import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {REGISTRATION} from "../../constants";
import {changeUser} from "../../redux/slices/appSlice";

const Login = ({navigateTo}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = () => {
        fetch('http://localhost:3000/users')
            .then(res => res.json())
            .then(res => {
                const user = res.find(item => item.userName === userName && item.password === password)
                if(!user) {
                    setError('Wrong username or password!')
                } else {
                    localStorage.setItem('user', JSON.stringify(user))
                    dispatch(changeUser(user))
                    navigate('/circles')
                }
            })
    }

    return (
        <div className='auth-container'>
            <h3>LOGIN</h3>
            <input
                type="text"
                value={userName}
                className='auth-input'
                placeholder='username'
                onChange={e => setUserName(e.target.value)}
            />
            <input
                type="password"
                value={password}
                className='auth-input'
                placeholder='password'
                onChange={e => setPassword(e.target.value)}
            />
            <button
                className='auth-submit'
                onClick={handleLogin}
            >
                Log in
            </button>
            {error && <p>{error}</p>}
            <div className='auth-navigate'>
                <p className='auth-notification'>Don`t have an account?</p>
                <button
                    className='auth-submit'
                    onClick={() => navigateTo(REGISTRATION)}
                >Sign up</button>
            </div>
        </div>
    )
}

export default Login
