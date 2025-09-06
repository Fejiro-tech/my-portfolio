import { bgStyle } from "./Header";
import { motion } from "framer-motion";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiFigma,
  SiRedux,
  SiSass,
} from "react-icons/si";

const tech = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500 w-14 h-14" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500 w-14 h-14" /> },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400 w-14 h-14" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600 w-14 h-14" />,
  },
  { name: "React", icon: <SiReact className="text-cyan-400 w-14 h-14" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white w-14 h-14" /> },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-teal-400 w-14 h-14" />,
  },
  { name: "Sass", icon: <SiSass className="text-pink-400 w-14 h-14" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500 w-14 h-14" /> },
  { name: "Git", icon: <SiGit className="text-red-500 w-14 h-14" /> },
  { name: "GitHub", icon: <SiGithub className="text-gray-300 w-14 h-14" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500 w-14 h-14" /> },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const items = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <div
      id="skills"
      style={bgStyle}

      className="min-h-screen px-6 py-16 flex justify-center items-center"
    >
      <div
        
        className="w-full max-w-5xl p-10 sm:p-20 md:p-16"
      >
        <h1 className="text-purple-100 text-4xl md:text-5xl font-extrabold text-center mb-8">
          Technologies & Tools
        </h1>
       
        <p className="text-purple-200 text-center text-[16px] md:text-lg leading-relaxed md:mt-8 sm:mt-1 mt-12">
          Here are some of the core tools and technologies i used to design,
          develop and deploy responsive and scalable web applications
        </p>
        <motion.div
          variants={container}
         
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6 bg-[#1e1e2e] rounded-xl shadow-lg mt-6 "
        >
          {tech.map((item) => (
            <motion.div
              key={item.name}
              variants={items}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 bg-[#1e1e2e] p-5 rounded-xl shadow-lg hover:shadow-pink-500/50 "
            >
              {item.icon}

              <span className="text-sm text-white mt-4">{item.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
