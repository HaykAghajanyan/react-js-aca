import {useState} from "react";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {REGISTRATION} from "../../constants";
import {changeUser} from "../../redux/slices/appSlice";
import CustomInput from "../CustomInput";

const Login = ({navigateTo}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { register, handleSubmit, control, reset, setValue, formState: { errors, dirtyFields } } = useForm({
        defaultValues: {
            username: 'Karen',
            password: '333',
            phoneNumber: ''
        }
    })

    const [error, setError] = useState('')

    const handleLogin = ({username, password}) => {

        // console.log('data', data)
        // fetch('http://localhost:3000/users')
        //     .then(res => res.json())
        //     .then(res => {
        //         const user = res.find(item => item.userName === username && item.password === password)
        //         if(!user) {
        //             reset({
        //                 username: '',
        //                 password: '',
        //             })
        //             // setError('Wrong username or password!')
        //         } else {
        //             localStorage.setItem('user', JSON.stringify(user))
        //             dispatch(changeUser(user))
        //             navigate('/circles')
        //         }
        //     })
    }

    return (
        <div className='auth-container'>
            <h3>LOGIN</h3>
            {
                new Array(18).fill(1).map(item => <div>{item}</div>)
            }
            <form onSubmit={handleSubmit(handleLogin)} className='auth-form'>
                <CustomInput
                    required
                    control={control}
                    name='phoneNumber'
                    placeholder='test'
                />
                <input
                    type="text"
                    className='auth-input'
                    placeholder='username'
                    {...register('username')}
                />
                <input
                    type="password"
                    className='auth-input'
                    placeholder='password'
                    {...register('password', {
                        required: true,
                    })}
                />
                <button
                    className='auth-submit'
                    onClick={handleLogin}
                >
                    Log in
                </button>
            </form>
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
