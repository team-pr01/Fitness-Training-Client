import { ICONS, IMAGES } from "../../../assets";
import Button from "../../reusable/Button/Button";
import Container from "../../reusable/Container/Container";

const Hero = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <img
        src={IMAGES.heroBg}
        alt="Hero Background"
        className="w-full object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center">
        <Container>
          <div>
            {/* Badge */}
            <div className="px-4 py-3 rounded-3xl border border-primary-10 border-dashed text-neutral-30 font-Manrope font-bold leading-6 flex items-center gap-2 w-fit bg-white">
              <img src={ICONS.dumbbell} alt="" className="size-5" />
              SMART STRENGTH TRAINING
            </div>

            {/* Heading */}
            <h1 className="text-white font-Unbounded text-[60px] font-medium mt-6 leading-tight">
              Train <span className="text-primary-10">With Precision.</span>
              <br />
              Perform With <br /> Confidence.
            </h1>

            {/* Description */}
            <p className="font-Manrope text-white text-lg font-medium mt-6 max-w-[640px]">
              Personalized, science-backed strength training designed for
              adults 40+ who want real results without long workouts or
              crowded gyms.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-6 mt-8 flex-wrap">
              <Button label="Claim Your 2 Free Sessions" variant="primary" />
              <Button label="Learn How It Works" variant="secondary" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;