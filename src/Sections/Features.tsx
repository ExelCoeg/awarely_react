import { Badge } from "../Components/Badge";
import FeaturesCard from "../Components/FeaturesCard";
import SectionTitle from "../Components/SectionTitle";
import { featuresDatas } from "../Datas/featureDatas";
export const Features = () => {
  return (
    <section
      id="features"
      className="flex flex-col items-center justify-center mb-60 lg:mb-40"
    >
      <div className="flex flex-col items-center justify-center mb-10 lg:flex-row lg:mb-20">
        <SectionTitle
          title={"Awarely"}
          className="flex flex-row lg:text-left lg:max-w-150 max-w-100"
          size="medium"
          alignment="center"
        />
        <h1 className="ml-10 mr-10 text-5xl font-bold">-</h1>
        <SectionTitle
          subtitle="Langkah Kecil untuk Rasa Aman yang Lebih Besar"
          className="flex flex-row text-tertiary lg:text-center lg:max-w-150 max-w-100 lg:text-5xl"
          alignment="center"
        ></SectionTitle>
      </div>
      <Badge
        text="Features"
        className="mb-10 font-bold lg:text-2xl text-primary border-primary"
      ></Badge>
      <div className="flex flex-col items-center justify-center p-5 mx-4 mb-5 lg:flex-row lg:w-full lg:gap-10 rounded-2xl bg-primary">
        {featuresDatas.map((item) => (
          <FeaturesCard
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            buttonText={item.buttonText}
            imageUrl={item.imageUrl}
            backgroundColor={item.backgroundColor}
            href={item.href}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
