import React, { Suspense } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Footer = React.lazy(() => import("./Screen/Navigations/Footer/Footer"));
const Home = React.lazy(() => import("./Screen/Pages/Home/Home"));
const ContactUs = React.lazy(() =>import("./Screen/Pages/Contactus/Contactus"));
const About = React.lazy(() => import("./Screen/Pages/About/About"));
const Login = React.lazy(() => import("./Screen/Pages/Auth/Login"));
const Signup = React.lazy(() => import("./Screen/Pages/Auth/Singup"));
const Product = React.lazy(() => import("./Screen/Pages/Product/Product"));
const Navbar = React.lazy(() => import("./Screen/Navigations/Navbar/Navbar"));
const Error = React.lazy(() => import("./Screen/Pages/Error"));
const Men = React.lazy(() => import("./Screen/Component/Selection/Men"));
const Women = React.lazy(() => import("./Screen/Component/Selection/Women"));
const BabyDoll = React.lazy(() => import("./Screen/Component/Selection/BabyDoll"));
const BabyPrince = React.lazy(() =>import("./Screen/Component/Selection/BabyPrince"));
const App = () => {
  return (
    <>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <Navbar />
        <Suspense fallback={Loading}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/product" element={<Product />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/baby-doll" element={<BabyDoll />} />
            <Route path="/baby-prince" element={<BabyPrince />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  );
};
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