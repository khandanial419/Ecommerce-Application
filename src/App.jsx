import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import CustomerReview from "./Screen/Pages/CustomerReview/CustomerReview";

// Lazy-loaded components
const Footer = React.lazy(() => import("./Screen/Navigations/Footer/Footer"));
const Home = React.lazy(() => import("./Screen/Pages/Home/Home"));
const ContactUs = React.lazy(() =>
  import("./Screen/Pages/Contactus/Contactus")
);
const About = React.lazy(() => import("./Screen/Pages/About/About"));
const Faq = React.lazy(() => import("./Screen/Pages/Faq/Faq"));
const Login = React.lazy(() => import("./Screen/Pages/Auth/Login"));
const Signup = React.lazy(() => import("./Screen/Pages/Auth/Singup"));
const Product = React.lazy(() => import("./Screen/Pages/Product/Product"));
const Blog = React.lazy(() => import("./Screen/Pages/Blog/Blog"));
const BlogMen = React.lazy(() => import("./Screen/Component/Blogs/Blogmen"));
const BlogWomen = React.lazy(() =>
  import("./Screen/Component/Blogs/Blogwomen")
);
const BlogBabyDoll = React.lazy(() =>
  import("./Screen/Component/Blogs/Blogbabydoll")
);
const BlogBabyPrince = React.lazy(() =>
  import("./Screen/Component/Blogs/Blogbabyprince")
);
const PrivacyPolicy = React.lazy(() =>
  import("./Screen/Component/Permission/Privacy_policy")
);
const TermsOfService = React.lazy(() =>
  import("./Screen/Component/Permission/Term_service")
);
const ForgotPswrd = React.lazy(() =>
  import("./Screen/Pages/ForgotPswrd/ForgotPswrd")
);
const Review = React.lazy(() => import("./Screen/Pages/Review/Review"));
const VerifyEmail = React.lazy(() => import("./Screen/Pages/Auth/VerifyEmail"));
const Navbar = React.lazy(() => import("./Screen/Navigations/Navbar/Navbar"));
const ErrorPage = React.lazy(() => import("./Screen/Pages/Error"));
const Men = React.lazy(() => import("./Screen/Component/Selection/Men"));
const Women = React.lazy(() => import("./Screen/Component/Selection/Women"));
const BabyDoll = React.lazy(() =>
  import("./Screen/Component/Selection/BabyDoll")
);
const BabyPrince = React.lazy(() =>
  import("./Screen/Component/Selection/BabyPrince")
);
const VerifyOtp = React.lazy(() =>
  import("./Screen/Pages/ForgotPswrd/Verify-otp")
);
const CartItem = React.lazy(() => import("./Screen/Pages/Cart/Cart"));
const CancelPage = React.lazy(() => import("./Screen/Pages/Cancel/Cancel"));
const SuccessPage = React.lazy(() => import("./Screen/Pages/Success/Success"));

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reviews" element={<Review />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/forgot-password" element={<ForgotPswrd />} />
            <Route path="/verify-otp" element={<VerifyOtp />} />
            <Route path="/product" element={<Product />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogmen/:id" element={<BlogMen />} />
            <Route path="/blogwomen/:id" element={<BlogWomen />} />
            <Route path="/blogbabydoll/:id" element={<BlogBabyDoll />} />
            <Route path="/blogbabyprince/:id" element={<BlogBabyPrince />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/cart-item" element={<CartItem />} />
            <Route path="/baby-doll" element={<BabyDoll />} />
            <Route path="/baby-prince" element={<BabyPrince />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/termsofservices" element={<TermsOfService />} />
            <Route path="/review-customer" element={<CustomerReview />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/cancel" element={<CancelPage />} />
            <Route path="/success" element={<SuccessPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </>
  );
};

const Loading = () => (
  <div className="h-screen w-full bg-white flex justify-center items-center">
    <AiOutlineLoading3Quarters
      className="animate-spin h-10 ml-5"
      color="#5161ce"
      size={50}
    />
  </div>
);

export default App;
