import { ICONS, IMAGES } from "../../../assets";
import Container from "../../reusable/Container/Container";

const TrainingPhilosophy = () => {
  const problems = [
    "Slower metabolism and stubborn fat gain",
    "Increased joint stiffness and discomfort",
    "Gradual muscle loss after 40",
    "Longer recovery between workouts",
  ];
  return (
    <Container>
      <div className="flex items-center justify-between py-25">
        <div>
          {/* Badge */}
          <div className="px-4 py-3 rounded-3xl border border-primary-10 border-dashed text-neutral-30 font-Manrope font-bold leading-6 flex items-center gap-2 w-fit bg-white">
            <img src={ICONS.dumbbell} alt="" className="size-5" />
            Our Training Philosophy
          </div>

          {/* Heading */}
          <h2 className="text-neutral-20 font-Unbounded text-[48px] font-medium mt-7.5">
            <span className="text-primary-10">Why Our Method</span>
            <br />
            Works When <br /> Others Don’t
          </h2>

          {/* Description */}
          <p className="font-Manrope text-neutral-25 text-lg mt-6 max-w-111.75">
            Precision-Based Strength Training Designed Specifically for Adults
            40+
          </p>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-neutral-10">
              <span className="text-primary-10">//</span> You may be
              experiencing:
            </h3>

            <div className="flex flex-col gap-4 mt-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <img src={ICONS.checkMark} alt="" className="size-5" />
                  <p className="text-neutral-10 text-lg">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <img src={IMAGES.trainingPhilosophy} alt="" className="" />
      </div>
    </Container>
  );
};

export default TrainingPhilosophy;
