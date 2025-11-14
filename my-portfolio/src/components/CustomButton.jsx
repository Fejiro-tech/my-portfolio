import { Menu, X } from "lucide-react";
import { useState } from "react";

export const buttonStyle = {
  backgroundImage: "linear-gradient(to right, #E91E63, #8a2be2)", // pink to purple
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  border: "none",
  backgroundColor: "transparent", // remove default button bg
};

export default function CustomButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <div className="flex ">
        {/* Hamburger Icon (Mobile Only) */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={24} className="text-pink-600" />
            ) : (
              <Menu size={24} className="text-pink-600 cursor-pointer" />
            )}
          </button>
        </div>

        {/* Menu Items (Desktop) */}
        <ul
          style={buttonStyle}
          className="hidden lg:flex space-x-6 md:space-x-4 font-bold "
        >
          <li>
            <a
              href="#about"
              className="text-base sm:text-[12px] md:text-[16px] lg:text-xl "
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-base sm:text-[12px] md:text-[16px] lg:text-xl"
            >
              SKILLS
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-base sm:text-[12px] md:text-[16px] lg:text-xl"
            >
              PROJECTS
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1C9cWmNQRa3NF9Dlwnyh4x2QygDIymm-k/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base sm:text-[12px] md:text-[16px] lg:text-xl"
            >
              RESUME
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-base sm:text-[12px] md:text-[16px] lg:text-xl"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>

      {/* Sidebar Menu (Mobile)*/}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* overlay */}
          <div
            className="absolute inset-0 backdrop-blur-sm sm:backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="absolute top-0 right-0 flex  items-center flex-col  w-50 md:w-90 h-full bg-[#17171f] shadow-xl p-6 space-y-6 z-50 ">
            {/* Close button inside sidebar */}
            <button
              onClick={() => setIsOpen(false)}
              className="text-4xl cursor-pointer text-pink-600 absolute top-4 right-4"
            >
              <X/>
            </button>

            <ul className="mt-20 pl-10 space-y-20">
              <li>
                <a
                  href="#about"
                  style={buttonStyle}
                  className="block"
                  onClick={() => setIsOpen(false)}
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  style={buttonStyle}
                  className="block"
                  onClick={() => setIsOpen(false)}
                >
                  SKILLS/TOOLS
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  style={buttonStyle}
                  className="block"
                  onClick={() => setIsOpen(false)}
                >
                  PROJECTS
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1C9cWmNQRa3NF9Dlwnyh4x2QygDIymm-k/view?usp=sharing"
                  style={buttonStyle}
                  className="block"
                  onClick={() => setIsOpen(false)}
                >
                  RESUME
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  style={buttonStyle}
                  className="block"
                  onClick={() => setIsOpen(false)}
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
