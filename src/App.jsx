import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Screen/Pages/Home/Home';
import ContactUs from './Screen/Pages/ContactUs/ContactUs';
import About from './Screen/Pages/About/About';
import Navbar from './Screen/Navigations/Navbar/Navbar';
import Login from './Screen/Pages/Login/Login';
import Signup from './Screen/Pages/Signup/Signup';
import Error from './Screen/Pages/Error';
 const App = () => {
  return (
   <>
   <BrowserRouter future={{ v7_startTransition: true }}>
    <Navbar/>
   <Routes>
    <Route path='/' element={<Home/> } />
    <Route path='/ContactUs' element={<ContactUs/> } />
    <Route path='/About' element={<About/> } />
    <Route path='/login' element={<Login/> } />
    <Route path='/signup' element={<Signup/> } />
    <Route path="*" element={<Error />} />
   </Routes>
   </BrowserRouter>
   </>

  )
}
export default App;
