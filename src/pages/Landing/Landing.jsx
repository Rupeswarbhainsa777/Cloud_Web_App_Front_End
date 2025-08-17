import HeroSection from "../../components/landing/HeroSection.jsx";
import FeaturesSection from "../../components/landing/FeaturesSections.jsx"; // fixed name
import PricingSection from "../../components/landing/PricingSection.jsx";
import TestimonialsSection from "../../components/landing/TestimoialsSection.jsx"; // fixed name
import FooterSection from "../../components/landing/FooterSection.jsx";
import CTASection from "../../components/landing/CTASection.jsx";
import {useClerk} from "@clerk/clerk-react";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

// Example Pricing Plans
const pricingPlans = [
    {
        name: "Basic",
        description: "Great for individuals getting started",
        price: "$9",
        features: ["1 Project", "Basic Support", "Access to Updates"],
        buttonText: "Choose Basic",
    },
    {
        name: "Pro",
        description: "Perfect for professionals and teams",
        price: "$29",
        highlighted: true,
        features: ["10 Projects", "Priority Support", "Advanced Analytics"],
        buttonText: "Choose Pro",
    },
    {
        name: "Enterprise",
        description: "For large organizations with custom needs",
        price: "$99",
        features: ["Unlimited Projects", "Dedicated Support", "Custom Features"],
        buttonText: "Contact Sales",
    },
];



const testimonials = [
    {
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        name: "Sarah Johnson",
        role: "Software Engineer",
        company: "Google",
        quote:
            "CloudShare has completely transformed the way our team collaborates. It’s fast, reliable, and super easy to use!",
        rating: 5,
    },
    {
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "David Miller",
        role: "Product Manager",
        company: "Microsoft",
        quote:
            "I love how intuitive CloudShare is. It has streamlined our workflow and boosted productivity significantly.",
        rating: 5,
    },
    {
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        name: "Emily Carter",
        role: "UX Designer",
        company: "Airbnb",
        quote:
            "The best platform we’ve used so far for collaboration. The simplicity and speed are unmatched.",
        rating: 4,
    },
]


const Landing = () => {

    const {openSignIn,openSignUp} = useClerk();
    const {SignedIn}= useClerk();
    const navigate = useNavigate();
    useEffect(() => {
        if(SignedIn){
            navigate("/dashboard");
        }

    },[SignedIn,navigate])
    return (
        <div className="landing-page bg-gradient-to-b from-gray-50 to-gray-100">
            <HeroSection  openSigIn={openSignIn}   openSigUp={openSignUp} />
            <FeaturesSection />
            <PricingSection pricingPlans={pricingPlans}   openSigUp={openSignUp} />
            <TestimonialsSection testimonials={testimonials} />
            <CTASection    openSigUp={openSignUp} />
            <FooterSection />
        </div>
    );
};

export default Landing;
