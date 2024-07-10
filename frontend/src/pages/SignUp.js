import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import React, {useState } from 'react';
import imageToBase64 from '../help/imageconvert';
import AllApi from '../common';
import { toast } from 'react-toastify';

const SignUp = () => {

    const [showPassword, setshowPassword] = useState(false)
    const [showconfirmPassword, setshowconfirmPassword] = useState(false)
    const [data, setData] = useState({
        email : "",
        password:"",
        confirmPassword:"",
        name:"",
        profilePic:""

    })
    const navigate = useNavigate()

    const handleonChange = (e) =>{
         const {name, value} = e.target
         
         setData((preve) => {
            return{
                ...preve,
                [name] : value
            }
         })

    }
    
   const handleSubmit = async(e) =>{
    e.preventDefault()
    if(data.password === data.confirmPassword){
        const dataresponse =  await fetch(AllApi.signUp.url,{
            method : AllApi.signUp.method,
            headers : {
                "content-type" : "application/json"
            },
            body :JSON.stringify(data)
        })
        const dataApi = await dataresponse.json()
        if(dataApi.success){
            toast.success(dataApi.message)
            navigate("/login")
        }
        if(dataApi.error){
            toast.error(dataApi.message)
        }
        
    }else{
        toast.error("Password does not match")
    }
    
   }
   const handleUploadPhoto = async(e)=>{
    const file = e.target.files[0]
    const imagePhoto = await imageToBase64(file)
    setData((preve) =>{
        return{
            ...preve,
            profilePic:imagePhoto
        }
    })

   }                

  return (
    <section id='signup'>
    <div className='mx-auto container p-4'>
        <div className='bg-white p-4 w-full max-w-sm mx-auto'>
            <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                <div>
                <img src={data.profilePic || loginIcons} alt='login icons'/>
                </div>
                <form>
                    <label>
                        <div className='text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 text-center absolute bottom-0 w-full cursor-pointer '>
                            Upload photo
                        </div>
                        <div>
                            <input type='file' className='hidden' onChange={handleUploadPhoto}></input>
                        </div>
                    </label>
                </form>

            </div>
            <form className='pt-6 flex flex-col gap-3' onSubmit={handleSubmit}> 

            <div className='grid'>
                    <label className=''>Name:</label>
                    <div className='bg-slate-100 p-2'>
                        <input type='text' 
                        placeholder='enter your name'
                        name='name'
                        value={data.name}
                        required
                        onChange={handleonChange} 
                        className='w-full h-full bg-transparent outline-none'></input>
                    </div>
                </div>

                <div className='grid'>
                    <label className=''>Email:</label>
                    <div className='bg-slate-100 p-2'>
                        <input type='email' 
                        placeholder='enter your email'
                        name='email'
                        required
                        value={data.email}
                        onChange={handleonChange} 
                        className='w-full h-full bg-transparent outline-none'></input>
                    </div>
                </div>

                <div className=''>
                    <label>Password:</label>
                    <div className='bg-slate-100 p-2 flex'>
                        <input 
                        type={showPassword ? "text": "password"} 
                        placeholder='enter your password'
                        required
                        value={data.password}
                        name='password'
                        onChange={handleonChange}
                        className='w-full h-full bg-transparent outline-none'></input>
                        <div className='cursor-pointer text-lg' onClick={()=>setshowPassword((preveious)=>!preveious)}> 
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

                <div className=''>
                    <label>Confirm Password:</label>
                    <div className='bg-slate-100 p-2 flex'>
                        <input 
                        type={showconfirmPassword ? "text": "password"} 
                        placeholder='enter your confirm password'
                        required
                        value={data.confirmPassword}
                        name='confirmPassword'
                        onChange={handleonChange}
                        className='w-full h-full bg-transparent outline-none'></input>
                        <div className='cursor-pointer text-lg' onClick={()=>setshowconfirmPassword((preveious)=>!preveious)}> 
                            <span>
                                {
                                    showconfirmPassword?
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

                <div>
                    <button className='bg-red-600 text-white px-6 py-2 w-full mt-6 max-w-[160px] mx-auto block hover:scale-110 rounded-full transition-all'>SignUp</button>
                </div>
        


            </form>
            <p className='my-5'>Already have an account?
                <Link to={"/login"} className='hover:text-red-700 hover:underline text-red-600 px-2'>
                    Login
                </Link>
            </p>

        </div>

    </div>

</section> 
  )
}

export default SignUp
