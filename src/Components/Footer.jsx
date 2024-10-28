import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
  return (
    <div id="faq" className="bg-gray-950 text-white">
      <div className="container mx-auto py-16">
        <div className="flex flex-col md:flex-row justify-between px-0 xl:px-4">
          <div>
            <h1 className="text-[35px] text-green-600 my-2">LOGO</h1>
            <p className="text-[14px] text-gray-400 my-2">
              Copyright © 2020 Nexcent itd.
            </p>
            <p className="text-[14px] text-gray-400 my-2">
              All rights reserved
            </p>
            <div className="flex items-center gap-4 my-3">
              <FaInstagram className="w-[25px] h-[25px] text-[16px] my-2 bg-gray-700 p-1 rounded-[50%] hover:text-green-500 cursor-pointer" />
              <FaFacebook className="w-[25px] h-[25px] text-[16px] my-2 bg-gray-700 p-1 rounded-[50%] hover:text-green-500 cursor-pointer" />
              <FaYoutube className="w-[25px] h-[25px] text-[16px] my-2 bg-gray-700 p-1 rounded-[50%] hover:text-green-500 cursor-pointer" />
              <FaLinkedin className="w-[25px] h-[25px] text-[16px] my-2 bg-gray-700 p-1 rounded-[50%] hover:text-green-500 cursor-pointer" />
            </div>
          </div>
          <div className="flex items-center justify-start md:justify-between gap-32">
            <div>
              <h2 className="text-[26px] my-2">Company</h2>
              <h4 className="text-[16px] my-1 text-gray-400">About us</h4>
              <h4 className="text-[16px] my-1 text-gray-400">Blog</h4>
              <h4 className="text-[16px] my-1 text-gray-400">Contact us</h4>
              <h4 className="text-[16px] my-1 text-gray-400">Pricing</h4>
              <h4 className="text-[16px] my-1 text-gray-400">Testimonials</h4>
            </div>
            <div>
              <h2 className="text-[26px] my-2">Support</h2>
              <h4 className="text-[16px] my-1 text-gray-400">Help center</h4>
              <h4 className="text-[16px] my-1 text-gray-400">
                Terms of service
              </h4>
              <h4 className="text-[16px] my-1 text-gray-400">Legal</h4>
              <h4 className="text-[16px] my-1 text-gray-400">Privcy policy</h4>
              <h4 className="text-[16px] my-1 text-gray-400">status</h4>
            </div>
          </div>
          <div>
            <h2 className="text-[26px] my-4">Stay up to date</h2>
            <div className="flex items-center justify-between bg-gray-600 py-1 px-2 rounded-[5px]  w-[50%] md:w-full">
              <input
                type="search"
                placeholder="Your email address"
                className="bg-transparent text-[18px] text-white outline-none border-none"
              />
              <IoIosSend className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
