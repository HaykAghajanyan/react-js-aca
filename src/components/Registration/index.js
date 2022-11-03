import {LOGIN, REGISTRATION} from "../../constants";
import { useState } from "react";
import { useForm } from "react-hook-form";
import instance from "../../api/axios";
import { queryAllByAttribute } from "@testing-library/react";
import Profile from "../../pages/Profile";
import Login from "../Login";



const Registration = ({navigateTo}) => {

const [userName, setUserName]= useState("")
const [userEmail, setUserEmail]= useState("")
const [userPass, setUserPass]= useState("")


const hash = () => Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(2);

const {register,
    handleSubmit,
    formState:{errors}} = useForm();

const obj = {
   "userName": userName,
   "userEmail":userEmail,
    "userPass":userPass
}

const onSubmit =() => {instance.post('users/',  {id: hash,...obj})
         .then(res=> console.log('res', res))}
       

   return (
  <form className='auth-container' onSubmit={handleSubmit(onSubmit)}> 
    <p>Name: 
     <input className='auth-input' type={"text"} {...register("userName", {required: true})} onChange={e => setUserName(e.target.value)} />
     {errors.userName && <p style={{color :"red"}}>Please enter your Name</p>}
    </p>
    <p>Email:
      <input className='auth-input' type={"email"} {...register("userEmail", {required: true})} onChange={e => setUserEmail(e.target.value)} />
      {errors.userEmail && <p style={{color :"red"}}>Please enter Email.</p>}
    </p>
    <p>Password:
     <input className='auth-input' type={"password"} {...register("userPass", {required: true, minLength: 4})} onChange={e => setUserPass(e.target.value)}/>
     {errors.userPass && <p style={{color :"red"}}>Please enter Password, min.length is 4</p>}
    </p>
    <input className='auth-submit' type="submit" />
    <div className='auth-navigate'>
                <p className='auth-notification'>Already have an account?</p>
                <button
                    className='auth-submit'
                    onClick={() => navigateTo(Profile)}
                >Sign in</button>
            </div>

  </form>

        )
}

export default Registration;

