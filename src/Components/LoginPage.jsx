import { Link } from "react-router-dom";

import microsoft from "../assets/microsoft.png";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png";

const LoginPage = () => {
  return (
    <div className="container mx-auto relative min-h-screen h-[135vh]">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[450px] my-4">
        <div className="border p-8 rounded-lg shadow-2xl">
          <h1 className="text-[36px] text-center py-2">Log in to your Account</h1>
        <div className="flex flex-col">
          <button className="flex items-center justify-center border rounded-3xl py-2 my-4">
            <img src={microsoft} alt="microsoft" width={24} height={24}></img>
            <h3 className="mx-4">Log in with Microsoft</h3>
          </button>
          <button className="flex items-center justify-center border rounded-3xl py-2 my-4">
            <img src={facebook} alt="facebook" width={24} height={24}></img>
            <h3 className="mx-4">Log in with Facebook</h3>
          </button>
          <button className="-ml-4 flex items-center justify-center border rounded-3xl py-2 my-4">
            <img src={google} alt="google" width={24} height={24}></img>
            <h3 className="mx-4">Log in with Google</h3>
          </button>
        </div>
        <p className="text-center text-gray-400 my-1">or using your email</p>
        <div>
          <h2>Email</h2>
          <input
            className="w-full px-4 py-2 text-[16px] outline-green-500 my-2 border border-gray-300 rounded-3xl"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          ></input>
        </div>
        <div>
          <h2>Password</h2>
          <input
            className="w-full px-4 py-2 text-[16px] outline-green-500 my-2 border border-gray-300 rounded-3xl"
            type="password"
            name="password"
            placeholder="Your Password"
            required
          ></input>
          <a className="block text-right text-green-500" href="/">Forgot Password?</a>
        </div>
        <button className="w-full bg-green-500 rounded-3xl text-white my-4 p-2">Log in</button>
        <h2 className="text-center">
          New Agency? <Link className="text-green-500 underline" to="/register">Signup</Link>
        </h2>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
