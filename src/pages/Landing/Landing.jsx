import HeroSection from "../../components/landing/HeroSection.jsx";
import FeaturesSections from "../../components/landing/FeaturesSections.jsx";
import PricingSection from "../../components/landing/PricingSection.jsx";
import TestimoialsSection from "../../components/landing/TestimoialsSection.jsx";
import FooterSection from "../../components/landing/FooterSection.jsx";


const Landing = () =>{
    return(
       <div className="landing-page bg-gradient-to-b from-gray-50 to-gray-100">

           <HeroSection/>


           <FeaturesSections/>

           <PricingSection/>

           <TestimoialsSection/>


           <FooterSection/>




       </div>
    )
}

export default Landing;