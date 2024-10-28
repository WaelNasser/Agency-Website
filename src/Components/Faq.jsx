import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/Animation";

const Faq = () => {
  return (
    <div className="bg-gray-300">
      <div className="container mx-auto my-[144px] py-[36px]">
        <div>
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="text-[45px] mx-auto text-center"
          >
            Pellentesque suscipit
            <br /> fringilla libero eu.
          </motion.h2>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex items-center justify-center gap-2 my-8 bg-green-500 text-white py-2 px-4 w-fit mx-auto rounded-[5px]"
          >
            <button>Meet all Customers</button>
            <GoArrowRight className="cursor-pointer" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
