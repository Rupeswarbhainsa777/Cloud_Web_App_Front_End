import HeroSection from "../../components/landing/HeroSection.jsx";
import FeaturesSection from "../../components/landing/FeaturesSections.jsx"; // fixed name
import PricingSection from "../../components/landing/PricingSection.jsx";
import TestimonialsSection from "../../components/landing/TestimoialsSection.jsx"; // fixed name
import FooterSection from "../../components/landing/FooterSection.jsx";

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
    },
    {
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "David Miller",
        role: "Product Manager",
        company: "Microsoft",
        quote:
            "I love how intuitive CloudShare is. It has streamlined our workflow and boosted productivity significantly.",
    },
    {
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        name: "Emily Carter",
        role: "UX Designer",
        company: "Airbnb",
        quote:
            "The best platform we’ve used so far for collaboration. The simplicity and speed are unmatched.",
    },
]


const Landing = () => {
    return (
        <div className="landing-page bg-gradient-to-b from-gray-50 to-gray-100">
            <HeroSection />
            <FeaturesSection />
            <PricingSection pricingPlans={pricingPlans} />
            <TestimonialsSection testimonials={testimonials} />
            <FooterSection />
        </div>
    );
};

export default Landing;
