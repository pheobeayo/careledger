import React from "react";
import { MdAlternateEmail, MdLockOutline } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import Goback from "../../../component/GobackBtn/goback";

function Signup() {
  return (
    <div className="w-full">
      <Goback />
      <div className="form-wrapper min-h-screen [ p-4 md:p-6 lg:p-8 ] [ flex justify-center items-center ] ">
        <form className="max-w-lg rounded-2xl text-[#1A2421] [ p-8 md:p-10 lg:p-10 ] morphism shadow ">
          <h3 className="mb-1 text-md text-[#fff]/80">SignUp Required</h3>
          <h1 className="mb-6 uppercase font-bold [ text-xl md:text-2xl lg:text-2xl text-[#fff]/80 ]">
            Create An Account
          </h1>
          <p className="mb-6 [ text-sm text-[#fff]/80 ]">
            Enter your valid email and password for fields below
          </p>

          <div>
            <label
              htmlFor="name"
              className="form-label relative block mb-4 text-black/50 focus-within:text-[#333]"
            >
              <BiUser className="abel-icon transition pointer-events-none [ w-6 h-6 ] [ absolute top-1/2 left-3 ] [ transform -translate-y-1/2 ]" />
              <input
                className="form-input block w-full rounded-lg leading-none focus:outline-none placeholder-black/50  [ transition-colors duration-200 ] [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] [ bg-black/20 focus:bg-black/25 ] [ text-[#333] focus:text-black ]"
                type="name"
                name="name"
                id="name"
                placeholder="FullName"
              />
            </label>
          </div>

          <div>
            <label
              htmlFor="email"
              className="form-label relative block mb-4 text-black/50 focus-within:text-[#333]"
            >
              <MdAlternateEmail className="abel-icon transition pointer-events-none [ w-6 h-6 ] [ absolute top-1/2 left-3 ] [ transform -translate-y-1/2 ]" />
              <input
                className="form-input block w-full rounded-lg leading-none focus:outline-none placeholder-black/50  [ transition-colors duration-200 ] [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] [ bg-black/20 focus:bg-black/25 ] [ text-[#333] focus:text-black ]"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </label>
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="form-label relative block mb-4 text-black/50 focus-within:text-[#333]"
            >
              <MdLockOutline className="abel-icon transition pointer-events-none [ w-6 h-6 ] [ absolute top-1/2 left-3 ] [ transform -translate-y-1/2 ]" />
              <input
                type="password"
                id="password"
                placeholder="Password"
                name="password"
                required
                className="form-input block w-full rounded-lg leading-none focus:outline-none placeholder-black/50  [ transition-colors duration-200 ] [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] [ bg-black/20 focus:bg-black/25 ] [ text-[#333] focus:text-black ]"
              />
            </label>
          </div>
          <button className="form-input w-full rounded-lg font-bold text-white focus:outline-none [ p-3 md:p-4 lg:p-3 ] [ transition-colors duration-500 ] [ bg-[#00b4b6] hover:border hover:border-[#00b4b6] hover:bg-transparent ]">
            Create an Account
          </button>
          <Link to="/login">
            <button className="py-3 text-sm text-white">
              Already have an account?{" "}
              <span className="text-[#00b4b6] font-bold"> LogIn</span>{" "}
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
