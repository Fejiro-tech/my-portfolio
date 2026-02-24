
export default function Logo() {
  return (
    <div className="flex  md:mr-10  ">
      <a href="#home">
        {/* Code Icon */}
        <span className="text-[#3b82f6] text-[18px] sm:text-[20px] md:text-[25px]  font-extrabold">
          &lt;/&gt;
        </span>

        {/* Logo Text */}
        <span className="ml-1 text-[22px] sm:text-[20px] md:text-[25px]  font-extrabold">
          <span className="text-purple-100">Pri</span>
          <span className="text-[#3b82f6]"><strong>.</strong>dev</span>
        </span>
      </a>
    </div>
  );
}
