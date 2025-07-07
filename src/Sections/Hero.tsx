import SectionTitle from "../Components/SectionTitle";
import { heroHeaderData } from "../Datas/headerDatas";
import HeroImage from "../assets/hero-image.png";
import Button from "../Components/Button";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "@/Context/AuthContext";
export const Hero = () => {
  const location = useLocation();
  const [showPopUp, setShowPopUp] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    console.log("user:", user);
    if (location.state?.showPopUp) {
      setShowPopUp(true);
      const fadeTimer = setTimeout(() => setFadeOut(true), 1000);
      const removeTimer = setTimeout(() => {
        setShowPopUp(false);
        setFadeOut(false);
      }, 2000);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [location.state]);
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center sm:gap-25 lg:gap-50 lg:flex-row -z-0 mb-25"
    >
      {showPopUp && (
        <div
          className={`fixed top-30 z-50 flex items-center justify-center bg-black-100 bg-opacity-40 ${fadeOut ? "opacity-0 transition-opacity duration-500" : "opacity-100"}`}
        >
          <div className="py-4 text-center bg-green-200 shadow-lg rounded-xl w-100">
            <p>You’ve successfully logged in.</p>
          </div>
        </div>
      )}
      <div className="flex flex-col items-center justify-center ml-10 lg:ml-0 lg:items-start lg:justify-start">
        <SectionTitle
          title={heroHeaderData.title}
          subtitle={heroHeaderData.motto}
          description={heroHeaderData.description}
          className=" lg:text-left max-w-100"
          alignment="center"
        ></SectionTitle>
        <Button
          text="Lanjutkan"
          className="mt-10 text-2lg lg:py-3 lg:px-5"
        ></Button>
      </div>
      <img
        src={HeroImage}
        alt=""
        className="mt-10 overflow-hidden w-120 lg:w-170"
      />
    </section>
  );
};

export default Hero;
