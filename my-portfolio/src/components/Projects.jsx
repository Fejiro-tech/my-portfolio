import project from "./ProjectData";
import { buttonStyle } from "./CustomButton";


export default function Project() {
  return (
    <section
      id="projects" 
      className="py-26 sm:px-8 md:px-12"
    >
      <h1 className="text-2xl md:text-4xl font-extrabold text-center mb-8 text-white mt-8">
        My Projects
      </h1>

      <p className="text-slate-300 text-center text-am md:text-base leading-relaxed md:mt-8 sm:mt-1 m-8">
        A look at my latest frontend work—where performance, accessibility, and
        visual polish come together seamlessly.
      </p>

      <div 
        className="max-w-5xl mx-auto flex overflow-x-auto hide-scrollbar p-6 rounded-2xl space-x-10
                   lg:grid lg:grid-cols-2 gap- lg:gap-12 lg:overflow-visible 
                
      "
      >
        {project.map(({ name, description, image, url, githubUrl, technologies }, index) => (
          <article
            key={index}
            className="bg-[#17171f] rounded-xl hover:shadow-lg duration-300 overflow-hidden flex flex-col p-4 mb-4 shadow-2xl hover:shadow-blue-400/20 hover:scale-105 transition-transform
                       w-80 sm:w-96 flex-shrink-0 lg:w-full lg:flex-shrink lg:mb-0"
          >
            <img
              src={image}
              alt={`${name} Screenshot`}
              style={{
                maxWidth: "500px",
              }}
              className="w-full h-52 object-fill rounded-2xl bg-[#1e1e1e]"
            />

            <div className="p-2 md:p-4 flex flex-col flex-grow ">
              <h1 className="text-xl font-semibold mb-3 text-white ">
                {name}
              </h1>
              <p className="text-gray-300 flex-grow text-[12px] md:text-sm">{description}</p>

              <p className="text-gray-300 font-bold mt-6">{technologies}</p>

              <div className="mt-5 flex space-x-4">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-400/25 backdrop-blur-lg border border-blue-400/20 shadow- shadow-blue-400/30 hover:bg-blue-500/20 text-white rounded-lg py-2 px-4 hover:scale-105 transition-transform"
                >
                  Live Demo
                </a>

                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-purple-100 rounded-lg border-2 border-blue-400/40 hover:border-blue-500 py-2 px-4 hover:scale-110 transition-transform"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

   
  );
}
