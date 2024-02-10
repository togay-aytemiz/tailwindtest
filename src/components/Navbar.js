import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav((pre) => !pre);
  };

  return (
    <div className="text-white flex items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="md:flex hidden">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resouces</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navbar */}
      <div
        className={
          nav
            ? "fixed left-[-100%] top-0 ease-in-out duration-500"
            : "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
        }
      >
        <h1 className="pt-4 w-full text-3xl font-bold text-[#00df9a] m-4">
          REACT.
        </h1>
        <ul className="pt-4 uppercase">
          <li className="p-4 border-b border-gray-900">Home</li>
          <li className="p-4 border-b border-gray-900">Company</li>
          <li className="p-4 border-b border-gray-900">Resouces</li>
          <li className="p-4 border-b border-gray-900">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
