import { buttonStyle } from "./CustomButton";

export default function Resume() {
  return (
    <>
      <a
        href="https://drive.google.com/file/d/1C9cWmNQRa3NF9Dlwnyh4x2QygDIymm-k/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          // style={buttonStyle}
          className="px-6 py-2 text-purple-200 font-extrabold rounded-3xl border border-gray-500 transform transition duration-300 hover:scale-105 hover:border-purple-400 hover:text-purple-400"
        >
          View Resume
        </button>
      </a>
    </>
  );
}
