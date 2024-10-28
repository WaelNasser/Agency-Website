/** @format */
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Autoplay module
import "swiper/css";

import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";

const Hero = () => {
  return (
    <div id="home" className="bg-gray-200 mx-auto">
      <Swiper
        modules={[Autoplay]} // Add Autoplay module here
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="container mx-auto py-2 md:h-[100vh]">
        <SwiperSlide className="flex flex-col-reverse items-center justify-center my-5 md:flex-row md:my-0 md:justify-between">
          <div className="basis-1/2">
            <h1 className="text-5xl my-2">
              Grow Business Fast
              <br />{" "}
              <span className="text-green-500 font-normal">for free cost</span>
            </h1>
            <p className="text-md text-gray-400 my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              inventore tenetur hic.
            </p>
            <Link to="/register" className="py-2 px-4 bg-green-500 hover:bg-gray-500 text-white my-3 rounded-[5px]  hover:transform hover:-translate-y-[4px] transition-all duration-300 ease-in-out">Register</Link>
          </div>
          <div className="basis-1/2 flex justify-end items-center">
            <img src={hero1} alt="hero1" width={600} height={400} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col-reverse items-center justify-center my-5 md:flex-row md:my-0 md:justify-between">
          <div className="basis-1/2">
            <h1 className="text-5xl my-2">
              Learn Design and lllustrations
              <br />
              <span className="text-green-500 font-normal">in 4 months</span>
            </h1>
            <p className="text-md text-gray-400 my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              inventore tenetur hic.
            </p>
                        <Link to="/register" className="py-2 px-4 bg-green-500 hover:bg-gray-500 text-white my-3 rounded-[5px]  hover:transform hover:-translate-y-[4px] transition-all duration-300 ease-in-out">Register</Link>

          </div>
          <div className="basis-1/2 flex justify-end items-center">
            <img src={hero2} alt="hero2" width={600} height={400} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col-reverse items-center justify-center my-5 md:flex-row md:my-0 md:justify-between">
          <div className="basis-1/2">
            <h1 className="text-5xl my-2">
              Grow Business Fast
              <br />{" "}
              <span className="text-green-500 font-normal">for free cost</span>
            </h1>
            <p className="text-md text-gray-400 my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              inventore tenetur hic.
            </p>
                        <Link to="/register" className="py-2 px-4 bg-green-500 hover:bg-gray-500 text-white my-3 rounded-[5px]  hover:transform hover:-translate-y-[4px] transition-all duration-300 ease-in-out">Register</Link>

          </div>
          <div className="basis-1/2 flex justify-end items-center">
            <img src={hero3} alt="hero3" width={600} height={400} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
