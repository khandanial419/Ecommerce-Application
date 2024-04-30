import { NavLink } from "react-router-dom";

const Error=()=> {
    return (
        <div className="h-screen w-full bg-white flex items-center justify-center">
        <h1 className="text-3xl text-red-500">
          404 page not found
          <br /> Head back to{" "}
          <NavLink to={"/"} className="text-black ml-4 underline">
            Home
          </NavLink>
        </h1>
      </div>
    )
  }
  export default Error;
  