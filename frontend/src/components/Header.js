import { useContext, useState } from 'react'
import React from 'react';
import Logo from './Logo'
import { FaSearch } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector}  from 'react-redux';
import AllApi from '../common';
import { toast } from 'react-toastify'
import { setuserdetails } from '../store/userSlice';
import Context from '../context';
import ROLE from '../common/role';



const Header = () => {
  const user = useSelector(state => state?.user?.user)
  const dispatch = useDispatch()
  const context = useContext(Context)
  const navigate = useNavigate()
  const [MenuDisplay, setMenuDisplay] = useState(false)

  const handleLogout = async() => {
    const fetchData = await fetch(AllApi.logout_user.url,{
      method : AllApi.logout_user.method,
      credentials : 'include'
    })
    const data = await fetchData.json()

    if(data.success){
      toast.success(data.message)
      dispatch(setuserdetails(null))
      navigate("/")
    }
    if(data.error){
      toast.error(data.message)
    }
  }



  return (
    <header className='h-16 shadow-md bg-slate-50'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
          <div className=''>
                <Link to={"/"}>
                    <Logo w={90} h={50}/>
                </Link>
          
          </div>

          <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
              <input type='text' placeholder='search product ... ' className='w-full outline-none'/>
              <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
                  <FaSearch/>
              </div>
          </div>

          <div className='flex items-center gap-7'> 
            <div className='relative  flex justify-center'>
            <div className='text-3xl cursor-pointer relative flex justify-center' onClick={()=>setMenuDisplay(preve => !preve)}>
              
                        {
                          user?._id &&(
                            user?.profilePic ? (
                              <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />
                            ) : (
                              <FaCircleUser/>
                            )

                          )
                                      
                            }                                                 
            
                  </div>
                                {
                                 MenuDisplay && (
                                  <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded' >
                                    <nav>
                                      {
                                        user?.role === ROLE.ADMIN && (
                                          <Link to={"/admin-panel/all-products"} className='whitespace-nowrap hidden md:block hover:bg-slate-100 p-2' onClick={()=>setMenuDisplay(preve => !preve)}>Admin Panel</Link>
                                        )
                                      }
                                     
                                    </nav>
                                  </div>
                                )
                                }
          
               </div>
            
            <div className='text-3xl relative'>
              <span><PiShoppingCartSimpleFill/></span>

              <div className=' bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-content absolute -top-2 -right-3'>
                <p className='text-sm'>0</p>

              </div>
            </div>
            <div>
              
              <div>
                {
                user?._id ? 
                (
                  <button onClick={handleLogout} className="bg-red-500 rounded-full py-1 hover:bg-red-800 px-3 text-white">
                    Log out
                    
                  </button>
                ):
                (
                  <Link to="/login" className="bg-red-500 rounded-full py-1 hover:bg-red-800 px-3 text-white">
                    log in
                  </Link>
                )}
              </div>
            </div>
          </div>
      </div>
    </header>
  )
}

export default Header
