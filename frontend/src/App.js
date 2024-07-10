import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import AllApi from './common';
import { useEffect } from 'react';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setuserdetails } from './store/userSlice';

function App() {

  const dispatch = useDispatch()

   const fetchDetails = async()=> {
    const detailsresponse = await fetch(AllApi.current_user.url,{
      method:AllApi.current_user.method,
      credentials:"include"
    })
    const apidata = await detailsresponse.json()

    if(apidata.success){
      dispatch(setuserdetails(apidata.data))
    }
  }

  useEffect(()=>{
    fetchDetails()
  },[])

  return (
  <>
  <Context.Provider value={{
    fetchDetails
  }}>
    <ToastContainer />
  <Header/>
  <main className='min-h-[calc(100vh-120px)]'>
    <Outlet/>
  </main>
  <Footer/>
  
  </Context.Provider>
  </>
  );
}

export default App;
