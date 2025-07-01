import { useState } from "react";
import { Menu } from "lucide-react";
import AwarelyLogo from "../Assets/Logo.png";
import { navigationItems } from "../Datas/navbarDatas";
import { ArrowLeft, MoveLeft } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full h-20 py-5 bg-white items-between item-center mb-15 rounded-b-3xl">
      <div className="flex flex-row items-center justify-between px-10">
        <div className="flex items-center gap-2 ">
          <img src={AwarelyLogo} alt="" />
          <h1 className="font-sans text-3xl">Awarely</h1>
        </div>
        <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <Menu></Menu>
        </button>
      </div>
      <div
        className={`shadow-lg fixed right-0 top-0 h-full bg-white w-64 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-100"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="flex items-start px-4 py-2 font-sans font-semibold text-gray-700 cursor-pointer"
        >
          <MoveLeft className="mr-1"></MoveLeft>
          Close
        </button>
        {isOpen && (
          <div className="py-10 font-sans">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
