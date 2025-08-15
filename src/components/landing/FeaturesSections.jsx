import { ArrowUpCircle, Shield, Share2, CreditCard, FileText, Clock } from "lucide-react";

const features = [
    {
        title: "Easy File Upload",
        description:
            "Easily send and receive payments with our secure and reliable wallet system.",
        iconName: "ArrowUpCircle",
        iconColor: "text-indigo-600",
    },
    {
        title: "Secure Storage",
        description:
            "Store and manage your files in our secure cloud environment.",
        iconName: "Shield",
        iconColor: "text-green-600",
    },
    {
        title: "Simple Sharing",
        description: "Share files instantly with anyone, anywhere in the world.",
        iconName: "Share2",
        iconColor: "text-blue-600",
    },
    {
        title: "Flexible Credit",
        description: "Enjoy flexible credit options tailored to your needs.",
        iconName: "CreditCard",
        iconColor: "text-purple-600",
    },
    {
        title: "File Management",
        description:
            "Organize, rename, and categorize your files with ease and efficiency.",
        iconName: "FileText",
        iconColor: "text-orange-600",
    },
    {
        title: "Transaction History",
        description:
            "Keep track of all your activities with detailed transaction records.",
        iconName: "Clock",
        iconColor: "text-red-600",
    },
];

const FeaturesSections = () => {
    const renderIcon = (iconName, iconColor) => {
        const iconProps = { size: 25, className: iconColor };

        switch (iconName) {
            case "ArrowUpCircle":
                return <ArrowUpCircle {...iconProps} />;
            case "Shield":
                return <Shield {...iconProps} />;
            case "Share2":
                return <Share2 {...iconProps} />;
            case "CreditCard":
                return <CreditCard {...iconProps} />;
            case "FileText":
                return <FileText {...iconProps} />;
            case "Clock":
                return <Clock {...iconProps} />;
            default:
                return <FileText {...iconProps} />;
        }
    };

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                        Everything you need for file sharing
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        CloudShare provides all the tools you need to manage your digital
                        content effortlessly.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-gray-100 p-6 shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
                        >
                            {/* Icon */}
                            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-indigo-100 shadow-inner mb-4">
                                {renderIcon(feature.iconName, feature.iconColor)}
                            </div>

                            {/* Text */}
                            <h3 className="text-xl font-semibold text-gray-900">
                                {feature.title}
                            </h3>
                            <p className="mt-2 text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSections;
