// components/Logo.tsx

export default function Logo() {
  return (
    <div className="flex md:mr-10  ">
      <a href="#home">
        {/* Code Icon */}
        <span className="text-pink-600 text-[22px] sm:text-[20px] md:text-[28px] lg:text-35px] font-extrabold">
          &lt;/&gt;
        </span>

        {/* Logo Text */}
        <span className="ml-1 text-[22px] sm:text-[20px] md:text-[30px] lg:text-35px] font-bold">
          <span className="text-purple-100">Pri</span>
          <span className="text-pink-600"><strong>.</strong>dev</span>
        </span>
      </a>
    </div>
  );
}
