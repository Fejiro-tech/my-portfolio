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
          className="px-6 py-2  font-extrabold rounded-3xl transform transition duration-300 hover:scale-105 bg-blue-400/25 backdrop-blur-lg border border-blue-400/20 shadow-md shadow-blue-400/30 hover:bg-blue-500/40 text-white cursor-pointer"
        >
          View Resume
        </button>
      </a>
    </>
  );
}
