import FeaturesCard from "../Components/FeaturesCard";
import SectionTitle from "../Components/SectionTitle";
import { featuresDatas } from "../Datas/featureDatas";
export const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <SectionTitle
        title={"Awarely"}
        subtitle="Langkah Kecil untuk Rasa Aman yang Lebih Besar"
        size="medium"
        alignment="center"
      />
      <div className="flex flex-col items-center p-5 mx-4 mb-5 lg:flex-row justify-evenly rounded-2xl bg-primary">
        {featuresDatas.map((item) => (
          <FeaturesCard
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            buttonText={item.buttonText}
            imageUrl={item.imageUrl}
            backgroundColor={item.backgroundColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
