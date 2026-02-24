import backgroundImage from "../assets/bgPic.jpeg";
import { motion } from "framer-motion";
import { buttonStyle } from "./CustomButton.jsx";
import icon from "../assets/arrow.svg";
import ArrowIcon from "./ArrowIcon.jsx";
import pic3 from "../assets/pic3.JPG";
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
  // style={bgStyle}
  className="flex items-center justify-center min-h-screen relative mt-10"
>
  <div className="
      flex flex-col sm:flex-row 
      items-center sm:items-center 
      justify-center w-full pt-14 px-8

      
    "
  >
    {/* <div 
      className=" absolute bottom-40 right-1 w-84 h-74 bg-blue-500/40 rounded-full opacity-20 blur-lg hidden sm:block"
      aria-hidden="true"
    ></div>
    <div 
      className=" absolute bottom-34 right-0 w-44 h-44 bg-amber-500/40 rounded-full opacity-20 blur-lg hidden sm:block"
      aria-hidden="true"
    ></div>
       */}
    {/* Mobile-only image */}
    <img
      src={pic3}
      alt="pic"
      className="w-64 h-64 rounded-full object-cover ring-2 ring-[#3b82f6] mt-14 mb-8 drop-shadow-[0_0_35px_#3b82f6]  block sm:hidden"
    />
    
    <motion.div
      className="w-full items-center mt-4"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        className="text-white text-2xl sm:text-4xl md:text-5xl font-bold leading-tight"
        variants={childVariants}
      >
        Hi👋,
        <br />
        <motion.span variants={childVariants}>I'm Priscillia,</motion.span>
        <br />
        <motion.span
          variants={childVariants}
          className="text-blue-400"
        >
          A Front-End Developer.
        </motion.span>

        <br />

        <motion.span
          variants={childVariants}
          className="text-slate-300"
        >
          I craft clean interfaces & code
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

