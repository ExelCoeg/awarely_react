import { Hero } from "../Sections/Hero";
import { Features } from "../Sections/Features";
import { Layanan } from "../Sections/Layanan";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { useContext, useEffect } from "react";
import api from "@/api/axios";
import AuthContext from "@/Context/AuthContext";

export const Home = () => {
  const { setUser, user } = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/auth/me", {
          withCredentials: true,
        });
        setUser(res.data.user);
      } catch {
        console.log("Failed to fetch user.");
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-white-bone">
      <Navbar />
      <Hero />
      <Features />
      <Layanan />
      <Footer />
    </div>
  );
};

export default Home;
