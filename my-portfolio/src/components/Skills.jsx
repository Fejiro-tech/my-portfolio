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
  { name: "HTML", icon: <SiHtml5 className="text-orange-500 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
  { name: "React", icon: <SiReact className="text-cyan-400 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
  { name: "Sass", icon: <SiSass className="text-pink-400 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
  { name: "Git", icon: <SiGit className="text-red-500 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
  { name: "GitHub", icon: <SiGithub className="text-gray-300 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const items = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <div id="skills"  className="min-h-screen px-10 py-16 flex justify-center items-center">
      <div className="w-full max-w-5xl py-12 md:py-20">
        <h1 className="text-purple-100 text-2xl md:text-4xl font-extrabold text-center ">
          Technologies & Tools
        </h1>

        <p className="text-purple-200 text-center text-[14px] md:text-base leading-relaxed mt-8 md:mt-10 lg:mt-12">
          Here are some of the core tools and technologies I use to design, develop, and deploy responsive and
          scalable web applications.
        </p>

        {/* Grid container with hover group */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 bg-[#1e1e2e] rounded-xl shadow-lg mt-6 group p-4"
        >
          {tech.map((item, index) => (
            // Outer div handles hidden / group-hover logic
            <div key={item.name} className={`${index > 5 ? "hidden group-hover:flex sm:flex md:flex" : "flex"} w-full`}>
              <motion.div
                variants={items}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="flex flex-col items-center gap-2 bg-[#1e1e2e] p-5 rounded-xl shadow-lg hover:shadow-pink-500/50 w-full"
              >
                {item.icon}
                <span className="text-sm text-white mt-4">{item.name}</span>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
