/** @format */
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className="fixed top-0 w-full z-50 bg-white">
      <div className="container mx-auto py-2">
        <div className="flex items-center justify-between">
          <div>
            <a href="/" className="text-[28px] font-bold">
              Logo
            </a>
          </div>
          {/* mobile nav */}
          <div>
            <IoMenu
              onClick={open}
              className="md:hidden text-[28px] cursor-pointer"
            />
            <div
              className={
                isOpen
                  ? "md:hidden absolute top-0 left-0 flex flex-col items-center justify-center w-[100%] my-14 overflow-hidden bg-green-500 text-white"
                  : "hidden"
              }
            >
              <a
                href="#home"
                className="mx-2 text-[20px] w-full text-center py-3 border-b border-white"
              >
                Home
              </a>
              <a
                href="#service"
                className="mx-2 text-[20px] w-full text-center py-3 border-b border-white"
              >
                Service
              </a>
              <a
                href="#about"
                className="mx-2 text-[20px] w-full text-center py-3 border-b border-white"
              >
                About
              </a>
              <a
                href="#product"
                className="mx-2 text-[20px] w-full text-center py-3 border-b border-white"
              >
                Product
              </a>
              <a
                href="#testimonials"
                className="mx-2 text-[20px] w-full text-center py-3 border-b border-white"
              >
                Testimonials
              </a>
              <a href="#faq" className="mx-2 text-[20px] py-3">
                FAQ
              </a>
              <div className="flex flex-col items-center justify-center gap-1 border-t border-white w-full py-2 text-[20px]">
                <Link to="/login">
                  <button className="text-white mx-1">Login</button>
                </Link>
                <Link to="/register">
                  <button className="text-white mx-1">Register</button>
                </Link>
              </div>
            </div>
          </div>
          {/* End of mobile nav  */}
          <div className="hidden md:block mr-20">
            <a href="#home" className="mx-4 text-[20px] hover:text-green-500">
              Home
            </a>
            <a
              href="#service"
              className="mx-4 text-[20px] hover:text-green-500"
            >
              Service
            </a>
            <a href="#about" className="mx-4 text-[20px] hover:text-green-500">
              About
            </a>
            <a
              href="#product"
              className="mx-4 text-[20px] hover:text-green-500"
            >
              Product
            </a>
            <a
              href="#testimonials"
              className="mx-4 text-[20px] hover:text-green-500"
            >
              Testimonials
            </a>
            <a href="#faq" className="mx-4 text-[20px] hover:text-green-500">
              FAQ
            </a>
          </div>
          <div className="hidden md:block">
            <Link to="/login">
              <button className="text-green-500 mx-1">Login</button>
            </Link>
            <Link to="/register">
              <button className="py-1 px-2 bg-green-500 text-white rounded-md mx-2">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
