import { IMAGES } from "../../../assets";
import Container from "../../reusable/Container/Container";

const WhyChooseUs = () => {
  const stats = [
    {
      value: "200+",
      label: "Clients Transformed",
    },
    {
      value: "4.9/5",
      label: "Member Rating",
    },
    {
      value: "10+",
      label: "Years of Expertise",
    },
    {
      value: "5,000+",
      label: "Sessions Delivered",
    },
  ];
  return (
    <div className="bg-neutral-65 py-[100px] font-Manrope">
      <Container>
        <div className="flex items-center justify-between gap-20">
          <h2 className="text-[32px] font-bold text-neutral-5">
            We combine smart resistance technology with expert coaching to help
            adults 40+ rebuild strength, energy, and confidence safely and
            efficiently.
          </h2>

          <img src={IMAGES.whyChooseUs} alt="" />
        </div>

        <div className="grid grid-cols-4 gap-14 mt-15">
          {stats?.map((stat) => (
            <div key={stat?.label} className="border-t border-neutral-70/30">
              <h3 className="text-[40px] font-semibold text-neutral-5 pt-6">
                {stat?.value}
              </h3>
              <p className="text-neutral-15 text-2xl mt-3">{stat?.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
