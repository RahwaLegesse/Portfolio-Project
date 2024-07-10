import React, {  useContext, useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link, useNavigate} from 'react-router-dom';
import AllApi from '../common';
import { toast } from 'react-toastify';
import Context from '../context';




const Login = () => {
    
    const [showPassword,setShowPassword] = useState(false)
    const [data,setData] = useState({
        email : "",
        password : ""
    })
    const navigate = useNavigate()
    const {fetchDetails} = useContext(Context)

    
    const handleOnChange = (e) =>{
        const { name , value } = e.target

        setData((preve)=>{
            return{
                ...preve,
                [name] : value
            }
        })
    }
    
    const handleSubmit = async(e) =>{
        e.preventDefault()
        

        const dataResponse = await fetch(AllApi.signIn.url,{
            method : AllApi.signIn.method,
            credentials : 'include',
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
        })

        const dataApi = await dataResponse.json()

        if(dataApi.success){
            toast.success(dataApi.message)
            fetchDetails()            
            navigate('/')
            
            
       
        }

        if(dataApi.error){
            toast.error(dataApi.message)
        }

    }

                   
                return (
                    <section id='login'>
                        <div className='mx-auto container p-4'>
                            <div className='bg-white p-4 w-full max-w-sm mx-auto'>
                                <div className='w-20 h-20 mx-auto'>
                                    <img src={loginIcons} alt='login icons'/>

                                </div>
                                <form className='pt-6 flex flex-col gap-3' onSubmit={handleSubmit}> 
                                    <div className='grid'>
                                        <label className=''>Email:</label>
                                        <div className='bg-slate-100 p-2'>
                                            <input type='email' 
                                            placeholder='enter your email'
                                            name='email'
                                            value={data.email}
                                            onChange={handleOnChange} 
                                            className='w-full h-full bg-transparent outline-none'></input>
                                        </div>
                                    </div>

                                    <div className=''>
                                        <label>Password:</label>
                                        <div className='bg-slate-100 p-2 flex'>
                                            <input 
                                            type={showPassword ? "text": "password"} 
                                            placeholder='enter your password'
                                            
                                            value={data.password}
                                            name='password'
                                            onChange={handleOnChange}
                                            className='w-full h-full bg-transparent outline-none'></input>
                                            <div className='cursor-pointer text-lg' onClick={()=>setShowPassword((preveious)=>!preveious)}> 
                                                <span>
                                                    {
                                                        showPassword?
                                                        (
                                                            <FaEye/>

                                                        ):
                                                        (
                                                            <IoEyeOff/>

                                                        )
                                                    }
                                                    
                                                </span>
                                            </div>
                                            </div>


                                            </div>
                                    <div className='mt-0'>
                                        <button className='bg-red-600 text-white p-2 w-full mt-0 max-w-[160px] mx-auto block hover:scale-110 rounded-full transition-all'>
                                            login
                                            </button>
                                    </div>

                                            <div>
                                            <Link to={'/forget-password'} className='block m-4 w-fit hover:text-red-200 ml-auto hover:underline'>
                                                    Forget password?
                                            
                                            </Link>

                                            </div>
                                            
                                            
                                    
                            


                                </form>
                                <p className='my-3'>Don't have an accoount?
                                    <Link to={"/SignUp"} className='hover:text-red-700 hover:underline text-red-600 pl-2'>
                                            SignUp 
                                    </Link>
                                </p>

                            </div>

                        </div>

                    </section>
                )
                }

                export default Login
