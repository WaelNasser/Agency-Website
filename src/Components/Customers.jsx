import { IoLogoFreebsdDevil } from "react-icons/io";
import { IoLogoDesignernews } from "react-icons/io";
import { IoLogoClosedCaptioning } from "react-icons/io";
import { IoLogoCodepen } from "react-icons/io";
import { IoLogoOctocat } from "react-icons/io";
import { IoLogoYen } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/Animation";
const Customers = () => {
  return (
    <div className="bg-gray-300">
      <div className="container mx-auto py-[32px]">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="px[5%] md:pl-[40%]"
        >
          <p className="text-[16px] text-gray-500 my-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            id dolore impedit, maiores quasi magni sapiente voluptas voluptatum
            sequi labore dolores sit, consequuntur accusamus facere velit porro.
            Quas, vel voluptate quae illum ratione reiciendis soluta nulla hic,
            delectus ipsum nam atque, voluptas earum laborum deleniti! Magni,
            sapiente? Quas, itaque error. vel voluptate quae illum ratione
            reiciendis soluta nulla hic, delectus ipsum nam atque, voluptas
            earum laborum deleniti! Magni, sapiente? Quas, itaque error.
          </p>
          <h3 className="text-[24px] text-green-500 my-2">Tim Smith</h3>
          <span className="text-[16px] text-gray-400 my-2">
            Btitsh Dragon Boat Racing Association
          </span>
          <div className="flex items-center justify-between my-4">
            <IoLogoFreebsdDevil className="text-[40px]" />
            <IoLogoClosedCaptioning className="text-[40px]" />
            <IoLogoDesignernews className="text-[40px]" />
            <IoLogoCodepen className="text-[40px]" />
            <IoLogoOctocat className="text-[40px]" />
            <IoLogoYen className="text-[40px]" />
            <div className="flex items-center justify-center gap-2 text-green-500">
              <button>Meet all Customers</button>
              <GoArrowRight className="cursor-pointer" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Customers;
