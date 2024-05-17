import React, { Suspense } from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
const Footer = React.lazy(() => import('./Screen/Navigations/Footer/Footer'));
const Home = React.lazy(() => import('./Screen/Pages/Home/Home'));
const ContactUs = React.lazy(() => import('./Screen/Pages/Contactus/Contactus'));
const About = React.lazy(() => import('./Screen/Pages/About/About'));
const Login = React.lazy(() => import('./Screen/Pages/Auth/Login'));
const Signup = React.lazy(() => import('./Screen/Pages/Auth/Singup'));
const Product = React.lazy(() => import('./Screen/Pages/Product/Product'));
const Navbar = React.lazy(() => import('./Screen/Navigations/Navbar/Navbar'));
const Error=React.lazy(()=>import('./Screen/Pages/Error'))
const Men = React.lazy(() => import('./Screen/Component/Selection/Men')); // Add this line
const Women = React.lazy(() => import('./Screen/Component/Selection/Women')); // Add this line
const BabyDoll = React.lazy(() => import('./Screen/Component/Selection/BabyDoll')); // Add this line
const BabyPrince = React.lazy(() => import('./Screen/Component/Selection/BabyPrince')); // Add this line
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
    <Route path='/product' element={<Product/> } />
    <Route path='/men' element={<Men />} /> {/* Add this route */}
    <Route path='/women' element={<Women />} /> {/* Add this route */}
    <Route path='/baby-doll' element={<BabyDoll />} /> {/* Add this route */}
    <Route path='/baby-prince' element={<BabyPrince />} /> {/* Add this route */}
    <Route path="*" element={<Error />} />
   
   </Routes>
   </Suspense>
   <Footer/>
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
