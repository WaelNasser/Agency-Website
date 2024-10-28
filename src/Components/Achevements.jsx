import { BsPersonHearts } from "react-icons/bs";
import { TbHandClick } from "react-icons/tb";
import { LuWallet } from "react-icons/lu";
import { FaSkullCrossbones } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/Animation";
const Achevements = () => {
  return (
    <div className="bg-gray-300">
      <div className="container mx-auto py-[64px] px-4 xl:px-[144px]">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="my-8">
            <h2 className="text-[36px] leading-[44px] text-green-600">
              Helping a local <br />
              Business reinvent itself
            </h2>
            <p className="text-[16px]">
              We reached here with our hard work and dedication
            </p>
          </motion.div>
          <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }} className="grid grid-cols-2 gap-[40px]">
            <div className="flex items-center justify-center gap-[16px]">
              <BsPersonHearts className="text-[48px] text-green-600" />
              <div>
                <h2 className="text-[28px] text-green-600">2,245,341</h2>
                <p className="text-[16px] text-gray-500">Members</p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-[16px]">
              <TbHandClick className="text-[48px] text-green-600" />
              <div>
                <h2 className="text-[28px] text-green-600">46,328</h2>
                <p className="text-[16px] text-gray-500">Clubs</p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-[16px]">
              <LuWallet className="text-[48px] text-green-600" />
              <div>
                <h2 className="text-[28px] text-green-600">828,867</h2>
                <p className="text-[16px] text-gray-500">Event Bookings</p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-[16px]">
              <FaSkullCrossbones className="text-[48px] text-green-600" />
              <div>
                <h2 className="text-[28px] text-green-600">1,926,436</h2>
                <p className="text-[16px] text-gray-500">Payments</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Achevements;
