import { ICONS, IMAGES } from "../../../assets";
import Container from "../../reusable/Container/Container";

const HowWeTrain = () => {
  return (
    <div className="bg-neutral-65 py-25">
      <Container>
        <div className="text-center flex flex-col items-center">
          {/* Badge */}
          <div className="px-4 py-3 rounded-3xl border border-primary-10 border-dashed text-neutral-30 font-Manrope font-bold leading-6 flex items-center gap-2 w-fit bg-white">
            <img src={ICONS.dumbbell} alt="" className="size-5" />
            Method in Action
          </div>

          {/* Heading */}
          <h1 className="text-neutral-20 font-Unbounded text-[48px] font-medium mt-7.5 leading-tight">
            <span className="text-primary-10">See How</span>
            Our Training
          </h1>

          {/* Description */}
          <p className="font-Manrope text-neutral-25 text-lg font-medium mt-6">
            Watch how our coach-led precision training helps adults 40+ rebuild
            strength safely and efficiently.
          </p>
        </div>

        <div className="relative mt-18">
          <img src={IMAGES.video} alt="" />
          <button className="absolute inset-0 flex items-center justify-center">
            <img src={ICONS.play} alt="" className="cursor-pointer" />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default HowWeTrain;
