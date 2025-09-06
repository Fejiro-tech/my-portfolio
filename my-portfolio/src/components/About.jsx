import React from "react";
import pics from "../assets/codingpics.jpeg";
import pic4 from "../assets/pic4.JPG";
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
    <div style={style} className=" min-h-screen flex flex-col">
      <div
        id="about"
        className=" min-h-screen  flex flex-col-reverse lg:flex-row justify-around gap-8 py-30 m-auto px-8 lg:px-18"
      >
        <div className=" w-[full] lg:w-[70%] ">
          <h1 className="text-purple-100 text-4xl md:text-5xl font-extrabold">
            Meet the Developer
          </h1>{" "}
          <br />
          <p className="text-purple-200 text-[16px] md:text-lg leading-relaxed ">
            Hi! I'm Priscillia Osumaka, a passionate Frontend Web Developer with
            a strong focus on creating clean, responsive, and user-centric web
            applications. I hold a B.Sc. in Political Science, but my true
            calling lies in tech—where I get to combine creativity with logic to
            bring ideas to life on the web. <br /> <br />
            I specialize in JavaScript, React, Next.js, Tailwind CSS, and
            TypeScript, and I've built and contributed to real-world projects
            including a movie app, admin and merchant dashboards, and dynamic
            landing pages. I'm skilled in API integration, state management, and
            UI development, and I love turning designs into functional
            interfaces that deliver seamless user experiences.
            <br /> <br />
            Currently, I'm working as a Frontend Engineer at Pushup Design
            Agency and Angala Financial Technology Ltd, where I collaborate
            closely with teams to ship meaningful products and improve user
            interactions. Beyond coding, I'm an enthusiastic learner and a big
            believer in continuous growth. Whether its contributing to open
            source, refining my code, or exploring new frontend technologies—I'm
            always pushing myself to the next level.
          </p>
          <br /> <br />
          <h1 className="text-purple-300 text-2xl md:text-3xl font-bold">
            Fun Facts
          </h1>{" "}
          <br />
          <ul className="text-purple-200 text-base md:text-lg list-disc pl-6 space-y-6">
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

        <div className="w-full lg:w-[50%] flex justify-center">
          <img
            src={pic4}
            alt="pic"
            className="w-70 md:w-100 lg:w-150 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="flex justify-center p-20">
        <Resume />
      </div>
    </div>
  );
};

export default About;
