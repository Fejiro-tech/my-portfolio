import project from "./ProjectData";
import { buttonStyle } from "./CustomButton";


export default function Project() {
  return (
    <section
      id="projects"
      className="py-26 sm:px-8 md:px-12 lg:px-16 "
    >
      <h1 className="text-2xl md:text-4xl font-extrabold text-center mb-8 text-purple-100">
        My Projects
      </h1>

      <p className="text-purple-200 text-center text-am md:text-base leading-relaxed md:mt-8 sm:mt-1 m-8">
        A look at my latest frontend work—where performance, accessibility, and
        visual polish come together seamlessly.
      </p>

      <div
        className="max-w-7xl mx-auto flex overflow-x-auto space-x-10 
                  lg:grid lg:grid-cols-3 lg:gap-12 hide-scrollbar p-6 rounded-2xl
                
      "
      >
        {project.map(({ name, description, image, url, githubUrl, technologies }, index) => (
          <article
            key={index}
            className="bg-[#17171f] rounded-xl hover:shadow-lg duration-300 overflow-hidden flex flex-col p-4 mb-4 shadow-2xl hover:shadow-pink-200/50 hover:scale-105 transition-transform
            w-80  sm:w-96 lg:w-96 flex-shrink-0 lg:mb-0"
          >
            <img
              src={image}
              alt={`${name} Screenshot`}
              style={{
                maxWidth: "",
              }}
              className="w-full h-52 object-fill rounded-lg"
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
                  className="inline-block text-purple-100  rounded-lg bg-gradient-to-r from-pink-600 to-[#52168a] p-2 hover:scale-105 transition-transform"
                >
                  Live Demo
                </a>

                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-purple-100 rounded-lg border-2 border-[#32134e] hover:border-purple-700 py-2 px-4 hover:scale-110 transition-transform"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    // <section className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
    //       <h1 className="text-4xl font-extrabold text-center mb-12 text-white">
    //         My Projects
    //       </h1>

    //       <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    //         {project.map(({ id, name, description, image, demoUrl, githubUrl }) => (
    //           <article
    //             key={id}
    //             className="bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
    //           >
    //             <img
    //               src={image}
    //               alt={name}
    //               className="w-full h-48 object-cover"
    //               loading="lazy"
    //             />
    //             <div className="p-6 flex flex-col flex-grow">
    //               <h2 className="text-xl font-semibold mb-3 text-white">{name}</h2>
    //               <p className="text-gray-300 flex-grow">{description}</p>
    //               <div className="mt-5 flex space-x-4">
    //                 <a
    //                   href={demoUrl}
    //                   target="_blank"
    //                   rel="noopener noreferrer"
    //                   className="inline-block px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
    //                 >
    //                   Live Demo
    //                 </a>
    //                 <a
    //                   href={githubUrl}
    //                   target="_blank"
    //                   rel="noopener noreferrer"
    //                   className="inline-block px-5 py-2 border border-indigo-600 text-indigo-400 rounded-lg hover:bg-indigo-700 hover:text-white transition"
    //                 >
    //                   GitHub
    //                 </a>
    //               </div>
    //             </div>
    //           </article>
    //         ))}
    //       </div>
    //     </section>
  );
}
