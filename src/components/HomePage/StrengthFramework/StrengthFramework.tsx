import { ICONS, IMAGES } from "../../../assets";
import Button from "../../reusable/Button/Button";
import Container from "../../reusable/Container/Container";

const StrengthFramework = () => {
  const benefits = [
    {
      icon: ICONS.muscle,
      description: "Maximum muscle activation",
    },
    {
      icon: ICONS.joinStraight,
      description: "Reduced joint stress",
    },
    {
      icon: ICONS.dataRecovery,
      description: "Faster strength recovery",
    },
    {
      icon: ICONS.analytics,
      description: "Data-driven measurable progress",
    },
    {
      icon: ICONS.stopWatch,
      description: "Short, efficient 20-minute sessions",
    },
  ];
  return (
    <Container>
      <div className="flex items-center justify-between py-25">
        <div>
          {/* Badge */}
          <div className="px-4 py-3 rounded-3xl border border-primary-10 border-dashed text-neutral-30 font-Manrope font-bold leading-6 flex items-center gap-2 w-fit bg-white">
            <img src={ICONS.dumbbell} alt="" className="size-5" />
            Strength Framework
          </div>

          {/* Heading */}
          <h2 className="text-neutral-20 font-Unbounded text-[48px] font-medium mt-7.5 leading-12.5">
            <span className="text-primary-10">Our Smarter</span>
            <br />
            Approach
          </h2>

          {/* Description */}
          <p className="font-Manrope text-neutral-25 text-lg mt-6 max-w-141">
            We combine coach-led precision training with adaptive resistance
            technology to deliver safer, faster strength results.
          </p>

          <img src={IMAGES.strengthFramework} alt="" className="mt-6" />
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4.5">
            {benefits?.map((benefit) => (
              <div
                key={benefit?.description}
                className="flex items-center gap-2.5"
              >
                <div className="p-1.5 bg-primary-20 border-primary-15 flex items-center justify-center">
                  <img src={benefit?.icon} alt="" />
                </div>
                <p className="text-neutral-5 text-2xl font-medium font-Manrope">
                  {benefit?.description}
                </p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-6 flex-wrap">
            <Button label="Claim Your 2 Free Sessions" variant="primary" />
            <Button label="Learn How It Works" variant="secondary" />
          </div>

          <p className="max-w-111.75 text-neutral-25 text-lg">
            Train with precision. Rebuild strength safely. Perform with
            confidence.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default StrengthFramework;
