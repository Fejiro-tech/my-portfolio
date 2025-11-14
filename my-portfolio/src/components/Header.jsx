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
  style={bgStyle}
  className="flex items-center justify-center min-h-screen relative"
>
  <div className="
      flex flex-col sm:flex-row 
      items-center sm:items-center 
      justify-center w-full pt-10 px-8
    "
  >
    <div 
      className=" absolute bottom-0 right-1 w-64 h-64 bg-purple-600/40 rounded-full opacity-20 blur-lg"
      aria-hidden="true"
    ></div>
    <div 
      className=" absolute top-70 left-60 w-44 h-44 bg-pink-600/40 rounded-full opacity-20 blur-lg"
      aria-hidden="true"
    ></div>
      
    {/* Mobile-only image */}
    <img
      src={pic3}
      alt="pic"
      className="w-64 h-64 rounded-full object-cover ring-2 ring-pink-800 mt-14 mb-6 drop-shadow-[0_0_50px_#ec4899]  block sm:hidden"
    />
    
    <motion.div
      className="mx-auto w-full max-w-[1050px] items-center sm:text-center"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        className="text-purple-100 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
        variants={childVariants}
      >
        Hi👋,
        <br />
        <motion.span variants={childVariants}>I'm Priscillia,</motion.span>
        <br />
        <motion.span variants={childVariants} className="text-pink-600">
          A Software Developer.
          <br />
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
        className="flex justify-center mt-6 sm:mt-14"
        variants={childVariants}
      >
        <a
          href="#about"
          style={buttonStyle}
          className="px-6 py-3 font-bold rounded-full  items-center gap-2 bg-pink-600 text-white hover:bg-pink-700 transition text-sm hidden sm:flex flex-col"
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

