import React, { Suspense } from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
const Home = React.lazy(() => import('./Screen/Pages/Home/Home'));
const ContactUs = React.lazy(() => import('./Screen/Pages/Contactus/Contactus'));
const About = React.lazy(() => import('./Screen/Pages/About/About'));
const Login = React.lazy(() => import('./Screen/Pages/Auth/Login'));
const Signup = React.lazy(() => import('./Screen/Pages/Signup/Signup'));
const Navbar = React.lazy(() => import('./Screen/Navigations/Navbar/Navbar'));
const Error=React.lazy(()=>import('./Screen/Pages/Error'))
 const App = () => {
  return (
   <>
   <BrowserRouter future={{ v7_startTransition: true }}>
    <Navbar/>
    <Suspense fallback={Loading}>
   <Routes  >
    <Route path='/' element={<Home/> } />
    <Route path='/contactus' element={<ContactUs/> } />
    <Route path='/about' element={<About/> } />
    <Route path='/login' element={<Login/> } />
    <Route path='/signup' element={<Signup/> } />
    <Route path="*" element={<Error />} />
   </Routes>
   </Suspense>
   </BrowserRouter>
   </>

  )
}
const Loading = (
  <>
    <div className="h-screen w-full bg-white flex  justify-center items-center">
      <div>
        <AiOutlineLoading3Quarters
          className="animate-spin h-10 ml-5"
          color="#5161ce"
          size={50}
        />
      </div>
    </div>
  </>
);
export default App;
