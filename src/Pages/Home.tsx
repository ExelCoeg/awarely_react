import { Hero } from "../Sections/Hero";
import { Features } from "../Sections/Features";
import { Layanan } from "../Sections/Layanan";

export const Home = () => {
  return (
    <div className="min-h-screen bg-orange-100 ">
      <Hero />
      <Features />
      <Layanan />
    </div>
  );
};

export default Home;
