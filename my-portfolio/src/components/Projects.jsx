import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import project from "./ProjectData";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Project() {
  const scrollRef = useRef(null);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const checkScrollPosition = () => {
    const container = scrollRef.current;

    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    setShowLeft(scrollLeft > 10);
    setShowRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scrollLeftHandler = () => {
    scrollRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRightHandler = () => {
    scrollRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    checkScrollPosition();

    container.addEventListener("scroll", checkScrollPosition);
    window.addEventListener("resize", checkScrollPosition);

    return () => {
      container.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, []);

  return (
    <section
      id="projects"
      className="py-26 px-6 lg:px-10 font-['Cormorant_Garamond']"
    >
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-2xl md:text-4xl font-extrabold text-center mb-8 text-white mt-8"
      >
        My Projects
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-slate-300 text-center text-sm md:text-base leading-relaxed md:mt-8 sm:mt-1 mb-8 font-sans"
      >
        A look at my latest frontend work—where performance,
        accessibility, and visual polish come together seamlessly.
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="relative max-w-5xl mx-auto"
      >
        {/* Left Arrow */}
        {showLeft && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollLeftHandler}
            className="
              lg:hidden
              absolute
              left-2
              top-1/2
              -translate-y-1/2
              z-20
              bg-black/80
              backdrop-blur-md
              text-white
              p-3
              rounded-full
              border
              border-slate-700
              shadow-lg
              hover:bg-blue-500/20
              transition
            "
          >
            <ChevronLeft size={22} />
          </motion.button>
        )}

        {/* Right Arrow */}
        {showRight && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollRightHandler}
            className="
              lg:hidden
              absolute
              right-2
              top-1/2
              -translate-y-1/2
              z-20
              bg-black/80
              backdrop-blur-md
              text-white
              p-3
              rounded-full
              border
              border-slate-700
              shadow-lg
              hover:bg-blue-500/20
              transition
            "
          >
            <ChevronRight size={22} />
          </motion.button>
        )}

        {/* Gradient Hints */}
        <div className="lg:hidden absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-black/40 to-transparent pointer-events-none z-10" />

        <div className="lg:hidden absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-black/40 to-transparent pointer-events-none z-10" />

        {/* Projects */}
        <div
          ref={scrollRef}
          className="
            flex
            overflow-x-auto
            hide-scrollbar
            px-4
            py-6
            rounded-2xl
            space-x-6
            scroll-smooth

            lg:grid
            lg:grid-cols-2
            lg:gap-12
            lg:overflow-visible
            lg:space-x-0
          "
        >
          {project.map(
            (
              {
                name,
                description,
                image,
                url,
                githubUrl,
                technologies,
              },
              index
            ) => (
              <article
                key={index}
                className="
                  bg-[#17171f]
                  rounded-xl
                  overflow-hidden
                  flex
                  flex-col
                  p-4
                  mb-4
                  shadow-2xl
                  hover:shadow-blue-400/20
                  hover:scale-[1.02]
                  transition-all
                  duration-300

                  w-[80vw]
                  sm:w-80
                  flex-shrink-0

                  lg:w-full
                  lg:flex-shrink
                  lg:mb-0
                "
              >
                <img
                  src={image}
                  alt={`${name} Screenshot`}
                  className="
                    w-full
                    h-40
                    sm:h-52
                    object-fill
                    rounded-2xl
                    bg-[#1e1e1e]
                  "
                />

                <div className="p-2 md:p-4 flex flex-col flex-grow">
                  <h2 className="text-base md:text-lg lg:text-xl font-semibold mb-3 text-white uppercase tracking-widest">
                    {name}
                  </h2>

                  <p className="text-gray-400 flex-grow text-[12px] md:text-sm font-sans">
                    {description}
                  </p>

                  <p className="text-gray-300 font-bold mt-6">
                    {technologies}
                  </p>

                  <div className="mt-5 flex space-x-4">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-block
                        bg-blue-400/25
                        backdrop-blur-lg
                        border
                        border-blue-400/20
                        hover:bg-blue-500/20
                        text-white
                        rounded-lg
                        py-2
                        px-4
                        hover:scale-105
                        transition-transform
                      "
                    >
                      Live Demo
                    </a>

                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-block
                        text-purple-100
                        rounded-lg
                        border-2
                        border-blue-400/40
                        hover:border-blue-500
                        py-2
                        px-4
                        hover:scale-105
                        transition-transform
                      "
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            )
          )}
        </div>

        <p className="lg:hidden text-center text-xs text-slate-500 mt-2">
          Swipe or use the arrows to explore projects
        </p>
      </motion.div>
    </section>
  );
}