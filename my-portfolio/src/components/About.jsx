import React from "react";
import pics from "../assets/codingpics.jpeg";
import pic3 from "../assets/pic3.JPG";
import Resume from "./Resume";

export const style = {
  backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)), url(${pics})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  color: "black",
};

const About = () => {
  return (
    <div style={style} className=" flex flex-col">
      <div
        id="about"
        className="flex flex-col-reverse lg:flex-row justify-around gap-4 py-24 m-auto px-8 lg:px-18"
      >
        <div className=" w-full lg:w-[70%]">
          <h1 className="text-purple-100 text-2xl md:text-4xl font-extrabold text-center sm:text-left">
            Meet the Developer
          </h1>{" "}
          <br />
          <p className="text-purple-200 text-[14px] md:text-base leading-relaxed mt-4">
            Hi! I'm Priscillia Osumaka, a passionate Frontend Web Developer with
            a strong focus on creating clean, responsive, and user-centric web
            applications. I hold a B.Sc. in Political Science, but my true
            calling lies in tech—where I get to combine creativity with logic to
            bring ideas to life on the web. <br /> <br />
            I specialize in JavaScript, React, Next.js, Tailwind CSS, and
            TypeScript, and I've built and contributed to real-world projects
            including a ticket management app, admin and merchant dashboards, and dynamic
            landing pages. I'm skilled in API integration, state management, and
            UI development, and I love turning designs into functional
            interfaces that deliver seamless user experiences.
            <br /> <br />
            Beyond coding, I'm an enthusiastic learner and a big
            believer in continuous growth. Whether its contributing to open
            source, refining my code, or exploring new frontend technologies—I'm
            always pushing myself to the next level.
          </p>
          <br /> <br />
          <h1 className="text-purple-300 text-2xl md:text-3xl font-bold mb-4">
            Fun Facts
          </h1>
         
          <ul className="text-purple-200 text-[14px] md:text-base list-disc pl-6 space-y-2">
            <li>
              🎓 I studied Political Science, but found my true passion in
              coding and design.
            </li>
            <li>
              🎨 I have an eye for UI design and love turning beautiful mockups
              into real-life interactive experiences.
            </li>
            <li>
              💡 I enjoy solving tricky bugs—it's like solving little puzzles
              every day.
            </li>
            <li>
              🌍 Always down to collaborate on fun side projects or open-source
              contributions.
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-[50%] flex items-center justify-center">
          <img
            src={pic3}
            alt="pic"
            className="w-72 h-72 md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] rounded-full object-cover ring-2 ring-pink-800 drop-shadow-[0_0_20px_#ec4899]   hidden sm:block"
          />
        </div>
        
      </div>

      

      <div className=" hidden sm:flex justify-center p-10 ">
        <Resume />
      </div>
    </div>
  );
};

export default About;
