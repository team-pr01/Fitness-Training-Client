import { ICONS, IMAGES } from "../../../assets";
import Container from "../../reusable/Container/Container";

const OurServices = () => {
  const programs = [
    {
      image: IMAGES.personalTraining,
      title: "1:1 Personal Training",
      description:
        "Work with a coach to create a personalized strength program for your goals and fitness level. Get guidance, technique correction, and support for faster progress.",
      cta: "Start Training",
    },
    {
      image: IMAGES.groupTraining,
      title: "Small Group Training",
      description:
        "Train in a supportive small-group environment that combines motivation with professional coaching. You get the energy of group training while still receiving individual guidance and correction.",
      cta: "Join A Session",
    },
    {
      image: IMAGES.onlineCoaching,
      title: "Online Coaching Program",
      description:
        "Follow a structured training plan from anywhere with remote coaching support and progress tracking. Perfect for busy professionals who want expert guidance without visiting the gym.",
      cta: "Get Online Coaching",
    },
    {
      image: IMAGES.strengthProgram,
      title: "40+ Strength Rebuild Program",
      description:
        "A specialized program designed to rebuild muscle, improve joint health, and restore energy levels after 40. Our approach focuses on safe progression and long-term strength development.",
      cta: "Explore Program",
    },
  ];
  return (
    <Container>
      <div className="py-25">
        <div className="text-center flex flex-col items-center">
          {/* Badge */}
          <div className="px-4 py-3 rounded-3xl border border-primary-10 border-dashed text-neutral-30 font-Manrope font-bold leading-6 flex items-center gap-2 w-fit bg-white">
            <img src={ICONS.dumbbell} alt="" className="size-5" />
            Our Services
          </div>

          {/* Heading */}
          <h1 className="text-neutral-20 font-Unbounded text-[48px] font-medium mt-7.5 leading-tight">
            <span className="text-primary-10">Find the Right</span>
            Training Program
          </h1>

          {/* Description */}
          <p className="font-Manrope text-neutral-25 text-lg font-medium mt-6">
            Choose personal coaching, small groups, or online training for
            measurable results.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-13 font-Manrope mt-18">
          {programs?.map((program) => (
            <div key={program?.title} className="">
              <img src={program?.image} alt="" />
              <div className="p-6">
                <h2 className="text-neutral-20 text-2xl">{program?.title}</h2>
                <p className="text-neutral-25 mt-4">{program?.description}</p>
                <div className="flex justify-end mt-7.5">
                  <button className="font-medium text-neutral-35 flex items-center gap-3 cursor-pointer">
                    {program?.cta}
                    <img src={ICONS.arrowTopRight} alt="" className="size-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default OurServices;
