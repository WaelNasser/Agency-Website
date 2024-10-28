import about from "../assets/about.png";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/Animation";

const About = () => {
  return (
    <div id="about" className=" container mx-auto py-2">
      <div className="flex flex-col md:flex-row items-center justify-center space-x-12 ml-10">
        <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="basis-[40%]">
          <img src={about} width={440} height={330} alt="about" className="object-fill" />
        </motion.div>
        <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="basis-[60%]">
          <div className="w-[80%]">
            <h1 className="text-[20px] md:text-[35px] xl:text-[45px] leading-tight mb-3">
              The unseen of spending three years at Pixelgrade
            </h1>
            <p className="text-[12px] text-gray-400 leading-tight mb-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
              vitae aspernatur unde. Atque qui perferendis exercitationem
              recusandae modi corrupti? Inventore distinctio sint corporis quos
              dolorem doloremque quis excepturi dolores dignissimos.
              recusandae modi corrupti? Inventore distinctio sint corporis quos
              dolorem doloremque quis excepturi dolores dignissimos.
            </p>
            <button className="py-2 px-4 bg-green-500 hover:bg-gray-500 text-white my-3 rounded-[5px]  hover:transform hover:-translate-y-[4px] transition-all duration-300 ease-in-out">Learn More</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
