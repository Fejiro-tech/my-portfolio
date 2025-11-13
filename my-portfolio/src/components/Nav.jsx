import CustomButton from "./CustomButton";
import Logo from "./Logo";

export default function Nav() {
  return (
    <div className="flex justify-between items-center bg-black w-full h-[10vh] fixed z-50  border-b border-b-[pink] px-6 lg:px-18 py-10">
      <Logo />
      <CustomButton />
    </div>
  );
}

// px-6 lg:px-18