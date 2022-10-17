import {LOGIN} from "../../constants";

const Registration = ({navigateTo}) => {

    const handleRegistration = () => {
        const userInfoObj = {
            // userName,
            // password,
        }

        fetch('http://localhost:3000/users', {
            method: 'POST',
            body: JSON.stringify(userInfoObj),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }

    return (
        <div className='auth-container'>
            <h3>REGISTRATION</h3>
            <input
                type="text"
                className='auth-input'
                placeholder='username'
            />
            <input
                type="email"
                className='auth-input'
                placeholder='email'
            />
            <input
                type="text"
                className='auth-input'
                placeholder='password'
            />
            <button className='auth-submit'>Register</button>
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
