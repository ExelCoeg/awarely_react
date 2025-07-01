import SectionTitle from "../Components/SectionTitle";
import LayananCard from "../Components/LayananCard";
import { layananDatas } from "../Datas/layananDatas";
export const Layanan = () => {
  return (
    <section id="layanan">
      <SectionTitle
        title="Layanan Kami"
        subtitle="Kami menyediakan berbagai layanan untuk membantu Anda dalam situasi darurat."
        size="medium"
        alignment="center"
      />
      <div className="flex flex-col items-center justify-center">
        {layananDatas.map((item) => (
          <LayananCard
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
          />
        ))}
        ;
      </div>
    </section>
  );
};

export default Layanan;
