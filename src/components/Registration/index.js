import { useState } from "react";

import {LOGIN} from "../../constants";
import instance from "../../api/axios";

const Registration = ({navigateTo}) => {
	
	const [email, setEmail] = useState("")
	const [error, setError] = useState('')
	const [userName, setUserName] = useState("")
	const [password, setPassword] = useState("")

	const handleRegistration = () => {
		const userInfoObj = {
			email,
			userName,
			password,
		}

		instance.post("users", userInfoObj)
			.then(res=> res.data)
			console.log(userInfoObj, "usersInfoObj");
	}

	return (
		<div className='auth-container'>
			<h3>REGISTRATION</h3>
			<input
				type="text"
				value={userName}
				className='auth-input'
				placeholder='username'
				onChange={e => setUserName(e.target.value)}
			/>
			<input
				type="email"
				value={email}
				className='auth-input'
				placeholder='email'
				onChange={e => setEmail(e.target.value)}
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
				onClick={handleRegistration}
			>
				Register
			</button>
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
