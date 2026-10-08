import backgroundImage from "../assets/bgPic.jpeg";
import { motion } from "framer-motion";
import { buttonStyle } from "./CustomButton.jsx";
import icon from "../assets/arrow.svg";
import ArrowIcon from "./ArrowIcon.jsx";
import pic3 from "../assets/pic3.jpg";
import Resume from "./Resume.jsx";


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
        staggerChildren: 0.6, 
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
  className="flex items-center justify-center min-h-screen relative mt-10 font-['Cormorant_Garamond']"
>
  <div className="
      flex flex-col sm:flex-row 
      items-center sm:items-center 
      justify-center w-full pt-14 px-8

      
    "
  >
    {/* Mobile-only image */}
    <img
      src={pic3}
      alt="pic"
      className="w-64 h-64 rounded-full object-cover ring-2 ring-[#3b82f6] mt-14 mb-8 block sm:hidden"
      style={{ boxShadow: "0 0 35px #3b82f6" }}
    />
    
    <motion.div
      className="w-full items-center mt-4"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
     <motion.h1
  className="text-white text-2xl sm:text-4xl md:text-5xl font-bold leading-tight space-y-2"
  variants={childVariants}
>
  <motion.span variants={childVariants} className="block">
    Hi 👋,
  </motion.span>

  <motion.span variants={childVariants} className="block">
    I'm Priscillia,
  </motion.span>

  <motion.span
    variants={childVariants}
    className="block text-blue-400"
  >
    A <span className="italic font-medium tracking-wide">Frontend</span> Developer.
  </motion.span>

  <motion.span
    variants={childVariants}
    className="block text-slate-300 text-base md:text-lg font-normal mt-2"
  >
    I craft clean interfaces & code.
  </motion.span>
</motion.h1>

      <motion.p
        className="text-[#a1a1a1] text-sm mt-6"
        variants={childVariants}
      >
        JavaScript &bull; React &bull; Next.js &bull; TypeScript
      </motion.p>

      <motion.div
        className="flex justify-center mt-6 sm:mt-14"
        variants={childVariants}
      >
        <a
          href="#about"
          style={buttonStyle}
          className="px-6 py-3 font-bold rounded-full  items-center gap-2 text-white hover:bg-transition text-sm hidden sm:flex flex-col"
        >
          Learn about what I do
          <ArrowIcon className="w-4 h-4" />
        </a>
      </motion.div>

      <div className=" flex justify-start sm:hidden">
          <Resume />
      </div>
    </motion.div>
  </div>
</div>

  );
}

