import { useState, useContext } from "react";
import { Menu } from "lucide-react";
import AwarelyLogo from "../Assets/Logo.png";
import { navigationItems } from "../Datas/navbarDatas";
import { MoveLeft, User } from "lucide-react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { AuthContext } from "@/Context/AuthContext";
import { ProfileDropdown } from "./ProfileDropdown";

export const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="justify-center h-20 py-5 mx-auto bg-white shadow-xl max-w-425 mb-15 rounded-b-3xl">
      <div className="flex flex-row items-center justify-between px-10">
        <div className="flex items-center gap-2 ">
          <img src={AwarelyLogo} alt="" />
          <h1 className="font-sans text-3xl font-semibold ">Awarely</h1>
        </div>
        <div className="items-center hidden gap-4 font-sans text-lg font-medium lg:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className="flex px-4 py-2 text-black hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex flex-row items-center">{item.label}</div>
            </Link>
          ))}
        </div>
        {user ? (
          <ProfileDropdown />
        ) : (
          <div className="items-center hidden gap-4 lg:flex">
            <Button
              text="Daftar"
              variant="tertiary"
              arrow={false}
              href="/signup"
            ></Button>
            <Button text="Masuk" arrow={false} href="/signin"></Button>
          </div>
        )}

        <button
          className="cursor-pointer lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu></Menu>
        </button>
      </div>

      <div
        className={`z-1 fixed px-4 right-0 top-0 h-full bg-white w-64 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-100"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="flex items-start px-4 py-2 font-sans font-semibold text-black cursor-pointer"
        >
          <MoveLeft className="mr-1"></MoveLeft>
          Close
        </button>
        <div className="flex items-center gap-2 px-4 mt-40 py-">
          <User
            color="white"
            className="p-1 bg-gray-500 rounded-full size-10"
          ></User>
          <div className="font-sans">
            <h3 className="text-sm font-medium">Username</h3>
            <p className="text-sm text-gray-500">email@gmail.com</p>
          </div>
        </div>

        {isOpen && (
          <div className="py-10 font-sans text-lg font-medium">
            {navigationItems.map((item) => (
              <div key={item.id}>
                <a
                  key={item.id}
                  href={item.href}
                  className="block px-4 py-2 text-black hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex flex-row items-center">
                    {item.icon && <item.icon className="mr-2 text-gray-500 " />}
                    {item.label}
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
