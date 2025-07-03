import SectionTitle from "../Components/SectionTitle";
import { heroHeaderData } from "../Datas/headerDatas";
import HeroImage from "../assets/hero-image.png";
import Button from "../Components/Button";
export const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center sm:gap-25 lg:gap-50 lg:flex-row -z-0 mb-25"
    >
      <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
        <SectionTitle
          title={heroHeaderData.title}
          subtitle={heroHeaderData.motto}
          description={heroHeaderData.description}
          className=" lg:text-left lg:max-w-150 max-w-100"
          alignment="center"
        ></SectionTitle>
        <Button
          text="Lanjutkan"
          className="mt-10 text-2lg lg:py-3 lg:px-5"
        ></Button>
      </div>
      <img src={HeroImage} alt="" className="mt-10 w-125 lg:w-175" />
    </section>
  );
};

export default Hero;
