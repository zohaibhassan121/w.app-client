import React, { useContext, useState } from 'react'
import bgimg from '../assert/images/main.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import { UserContext } from '../App'



export default function Login() {
  const {state, dispatch} = useContext(UserContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = async (e) => {
    e.preventDefault();

    const res = await fetch('/users/login', {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email, password
      })
    })
    const data = await res.json();

    if (res.status === 404 || !data) {
      // window.alert("invaild login")
      console.log(toast.error("User Not found"))
    } else if (res.status === 422) {
      console.log(toast.error("somthing wrong "))
    } else if(res.status === 400){
      console.log(toast.error(" Not found"))
    } else {
      dispatch({type: 'USER', payload: true})
       toast.success("welcome !");
      navigate('/weather')
    }
  }
  return (
    <>

      <div>
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" />
        <div class="bg-grey-lighter h-[701px] bg-cover bg-center py-9 flex flex-col  font" style={{ backgroundImage: `url(${bgimg})` }}>
          <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
              <h1 class="mb-8 text-3xl text-center">LOG IN</h1>
              <input
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="Email" />

              <input
                type="password"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                value={password} onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" />

              <button
                type="submit"
                value='login' onClick={userLogin}
                class="w-full text-center py-3 bg-blue-200 hover:bg-blue-700 font-bold hover:text-white rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1"
              >Login</button>

            </div>
            <div class="text-grey-dark mt-6 text-white">
              You don't have an account ?
              <Link class="no-underline border-b border-blue text-blue-500" to="../signup/">
                SignUp
              </Link>.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
