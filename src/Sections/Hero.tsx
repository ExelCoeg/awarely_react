import SectionTitle from "../Components/SectionTitle";
import { heroHeaderData } from "../Datas/headerDatas";
import HeroImage from "../assets/hero-image.png";
import Button from "../Components/Button";
export const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center -z-0 mb-50"
    >
      <SectionTitle
        title={heroHeaderData.title}
        subtitle={heroHeaderData.motto}
        description={heroHeaderData.description}
        alignment="center"
      ></SectionTitle>
      <Button text="Lanjutkan" size="medium"></Button>
      <img src={HeroImage} alt="" className="mt-10 w-100" />
    </section>
  );
};

export default Hero;
