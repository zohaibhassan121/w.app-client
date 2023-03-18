import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bgimg from '../assert/images/main.jpg'
const Signup = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
      name:"", email:"", password:""
    });
    
    let name, value;
    const handlebar = (e) =>{
    console.log(e)
    name = e.target.name
    value = e.target.value
    
    setUser({...user, [name]:value})
    // console.log(setUser)
    }
    
    
    
    const postData = async(e)=>{
     e.preventDefault();
    
     const { name, email, password} = user;
    const res = await fetch('/users/signup',{
     method: 'POST',
    headers: {
                'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name, email, password
    })
    });
    
    const data = await res.json();
    
    
    if(res.status === 422 || !data){
      window.alert("invaild rigistraion")
      console.log("invaild rigistraion")
    }else{
      window.alert(" rigistraion secusss")
      console.log(" rigistraion secusss")
      navigate('/login')
    }
    
    }

  return (
    <div>
      <div class="bg-grey-lighter h-[701px] bg-cover bg-center py-9 flex flex-col  font" style={{ backgroundImage: `url(${bgimg})` }}>
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="name" value={user.name} onChange={handlebar}
                        placeholder="Full Name" />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email" value={user.email} onChange={handlebar}
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password" value={user.password} onChange={handlebar}
                        placeholder="Password" />

                    <button
                        type="submit"
                        name="Signup" value='signup' onClick={postData}
                        class="w-full text-center py-3 rounded  bg-blue-200 hover:bg-blue-700 font-bold hover:text-white focus:outline-none my-1"
                    >Create Account</button>

                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                            Terms of Service
                         and  
                        
                             Privacy Policy
                        
                    </div>
                </div>

                <div class="text-grey-dark mt-6 text-yellow-50">
                    Already have an account ? 
                    <Link class="no-underline border-b border-blue text-blue-500" to="../login/">
                         Log in
                    </Link>.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup
