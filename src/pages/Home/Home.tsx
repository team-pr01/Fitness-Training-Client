import Hero from "../../components/HomePage/Hero/Hero";
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
        </div>
    );
};

export default Home;