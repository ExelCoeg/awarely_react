import { useContext, useEffect, useRef, useState } from "react";
import api from "../api/axios";
import AuthContext from "@/Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ArrowDown, User } from "lucide-react";
export const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setUser, user } = useContext(AuthContext);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  const handleLogout = async () => {
    const res = await api.get("/auth/logout", {
      withCredentials: true,
    });
    if (res.status === 200) {
      setUser(null);
      navigate("/logout");
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-2 py-2 bg-gray-100 rounded-full w-50 hover:bg-gray-200 focus:outline-none focus:ring-1 "
      >
        <div className="flex flex-row items-center justify-center">
          <div className="mx-5 border-2 rounded-full">
            <User />
          </div>
          {user && user.username ? (
            <span className="text-sm font-semibold">{user.username}</span>
          ) : (
            <span className="text-sm font-semibold">Guest</span>
          )}
        </div>
        <ArrowDown className="mr-3"></ArrowDown>
      </button>

      {isOpen && (
        <div className="absolute right-0 w-48 mt-2 bg-white rounded shadow">
          <button
            className="block w-full px-4 py-2 text-left cursor-pointer hover:bg-gray-100"
            onClick={() => handleLogout()}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
