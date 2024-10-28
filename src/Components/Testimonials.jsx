import testimonials1 from "../assets/one.png";
import testimonials2 from "../assets/two.png";
import testimonials3 from "../assets/three.png";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/Animation";

const Testimonials = () => {
  return (
    <div id="testimonials" className="container mx-auto my-[32px]">
      <motion.h1
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="text-[36px] text-center my-2"
      >
        Caring is the new marketing
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="text-center mx-auto md:w-[45%] my-4 text-[16px] text-gray-500"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita totam
        architecto sit? Accusamus, harum hic impedit modi natus debitis
        perferendis adipisci repellat, ipsum dicta, architecto doloribus cum
        quas omnis quaerat?
      </motion.p>
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="flex items-center justify-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 my-[16px]">
          <div className="relative">
            <img
              src={testimonials1}
              alt="testimonials1"
              className="rounded-[8px] hover:transform hover:scale-105 transition-all duration-300 ease-in-out"
            ></img>
            <div className="bg-white border border-gray-400 shadow-xl absolute w-[70%] top-[70%] left-[50%] translate-x-[-50%] z-[1]">
              <h1 className="text-[4px] md:text-[8px] xl:text-[16px] text-center mx-auto my-4">
                Creating Streamlined Safeguarding Process with OneRen
              </h1>
              <div className="flex items-center justify-center gap-2 my-4 text-green-500 hover:text-black">
                <button>Meet all Customers</button>
                <GoArrowRight className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={testimonials2}
              alt="testimonials2"
              className="rounded-[8px] hover:transform hover:scale-105 transition-all duration-300 ease-in-out"
            ></img>
            <div className="bg-white border border-gray-400 shadow-xl absolute w-[70%] top-[70%] left-[50%] translate-x-[-50%] z-[1]">
              <h1 className="text-[4px] md:text-[8px] xl:text-[16px] text-center mx-auto my-4">
                Creating Streamlined Safeguarding Process with OneRen
              </h1>
              <div className="flex items-center justify-center gap-2 my-4 text-green-500 hover:text-black">
                <button>Meet all Customers</button>
                <GoArrowRight className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={testimonials3}
              alt="testimonials3"
              className="rounded-[8px] hover:transform hover:scale-105 transition-all duration-300 ease-in-out"
            ></img>
            <div className="bg-white border border-gray-400 shadow-xl absolute w-[70%] top-[70%] left-[50%] translate-x-[-50%] z-[1]">
              <h1 className="text-[4px] md:text-[8px] xl:text-[16px] text-center mx-auto  my-4">
                Creating Streamlined Safeguarding Process with OneRen
              </h1>
              <div className="flex items-center justify-center gap-2 my-4 text-green-500 hover:text-black">
                <button>Meet all Customers</button>
                <GoArrowRight className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
