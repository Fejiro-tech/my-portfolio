import backgroundImage from "../assets/bgPic.jpeg";
import { motion } from "framer-motion";
import { buttonStyle } from "./CustomButton.jsx";
import icon from "../assets/arrow.svg";
import ArrowIcon from "./ArrowIcon.jsx";


export const bgStyle = {
  backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.99), rgba(0, 0, 0, 1)), url(${backgroundImage})`,
  backgroundSize: "fit",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",

  color: "black",
};

export default function Header({}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6, // delay between each child animation
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div
      id="home"
      style={bgStyle}
      className="flex items-center min-h-screen"
    >
      <motion.div
        className="mx-auto w-full max-w-[1050px] text-center p-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className=" text-purple-100 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight "
          variants={childVariants}
        >
          Hi👋,
          <br />
          <motion.span variants={childVariants}>I'm Priscillia,</motion.span>
          <br />
          <motion.span variants={childVariants} className="text-pink-600 " >
            A Sofware Developer.<br/>
            I craft clean interfaces & code
            
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-[#a1a1a1] text-sm mt-6"
          variants={childVariants}
        >
          Front End Developer / JavaScript / React / Next.js / TypeScript
        </motion.p>

        <motion.div
          className="flex justify-center mt-14"
          variants={childVariants}
        >
          <a
            href="#about"
            style={buttonStyle}
            className="px-6 py-3 font-bold rounded-full  flex flex-col  justify-center items-center  bg-pink-600 text-white hover:bg-pink-700 transition text-sm"
          >
            Learn about what I do
            <ArrowIcon className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

