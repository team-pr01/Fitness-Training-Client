import Hero from "../../components/HomePage/Hero/Hero";
import HowWeTrain from "../../components/HomePage/HowWeTrain/HowWeTrain";
import OurServices from "../../components/HomePage/OurServices/OurServices";
import StrengthFramework from "../../components/HomePage/StrengthFramework/StrengthFramework";
import TrainingPhilosophy from "../../components/HomePage/TrainingPhilosophy/TrainingPhilosophy";
import WhyChooseUs from "../../components/shared/WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Hero/>
            <WhyChooseUs/>
            <TrainingPhilosophy/>
            <StrengthFramework/>
            <HowWeTrain/>
            <OurServices/>
        </div>
    );
};

export default Home;