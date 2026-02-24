import CustomButton from "./CustomButton";
import Logo from "./Logo";

export default function Nav() {
  return (
    <div className=" w-full fixed z-50 top-0">
      <div className=" bg-black flex justify-between items-center w-full max-w-340 mx-auto py-4 md:py-6 px-6  border-b border-gray-800">
        <Logo />
        <CustomButton />

      </div>
    </div>
  );
}
