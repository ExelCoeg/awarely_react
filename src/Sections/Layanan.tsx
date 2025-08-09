import SectionTitle from "../Components/SectionTitle";
import LayananCard from "../Components/LayananCard";
import { layananDatas } from "../Datas/layananDatas";
export const Layanan = () => {
  return (
    <section id="layanan">
      <div className="flex flex-col items-center justify-center mb-10 lg:flex-row lg:mb-20">
        <SectionTitle
          title="Layanan Kami"
          className="flex flex-row lg:text-left lg:max-w-150 max-w-100"
          size="medium"
          alignment="center"
        />
        <h1 className="ml-10 mr-10 text-5xl font-bold">-</h1>
        <SectionTitle
          subtitle="Kami menyediakan berbagai layanan untuk membantu Anda dalam situasi darurat."
          className="flex flex-row text-tertiary lg:text-center lg:max-w-150 max-w-100 lg:text-5xl"
          alignment="center"
        ></SectionTitle>
      </div>

      <div className="flex flex-col items-center justify-center lg:flex-row ">
        {layananDatas.map((item, idx) => (
          <LayananCard
            key={idx}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            badgeText={item.badgeText}
            href={item.href}
          />
        ))}
        ;
      </div>
    </section>
  );
};

export default Layanan;
