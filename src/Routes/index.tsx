import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../Pages/Home";
import { SignIn } from "../Pages/Auth/SignIn";
import { SignUp } from "../Pages/Auth/SignUp";
import { Laporan } from "../Pages/Laporan";
import Logout from "@/Pages/Auth/Logout";
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/laporan" element={<Laporan />} />
        <Route path="/layanan/ultksp" element={<Laporan />} />
        <Route path="/layanan/rekanmelangkah" element={<Laporan />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
