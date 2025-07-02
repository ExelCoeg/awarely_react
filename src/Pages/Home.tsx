import { Hero } from "../Sections/Hero";
import { Features } from "../Sections/Features";
import { Layanan } from "../Sections/Layanan";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

export const Home = () => {
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
