const PricingSection = ({ pricingPlans, openSigUp }) => {
    return (
        <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto py-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Choose the plan that's right for you
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform ${
                                plan.highlighted
                                    ? "border-2 border-purple-500 transform scale-105"
                                    : "border border-gray-200"
                            }`}
                        >
                            {/* Card Header */}
                            <div
                                className={`px-6 py-8 ${
                                    plan.highlighted
                                        ? "bg-gradient-to-br from-purple-50 to-white"
                                        : "bg-white"
                                }`}
                            >
                                <h3 className="text-2xl font-medium text-gray-900">
                                    {plan.name}
                                </h3>
                                <p className="mt-4 text-sm text-gray-500">
                                    {plan.description}
                                </p>
                                <p className="mt-8 text-3xl font-bold text-gray-900">
                                    {plan.price}
                                    <span className="text-base font-medium text-gray-500">
                    /month
                  </span>
                                </p>
                            </div>

                            {/* Features */}
                            <div className="flex-1 flex flex-col justify-between px-6 pb-8">
                                <ul className="space-y-4">
                                    {plan.features?.map((feature, idx) => (
                                        <li key={idx} className="text-gray-600 flex items-center">
                                            ✅ <span className="ml-2">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8">
                                    <button onClick={openSigUp}
                                        className={`w-full py-3 px-6 rounded-lg font-semibold transition ${
                                            plan.highlighted
                                                ? "bg-purple-600 text-white hover:bg-purple-700"
                                                : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                                        }`}
                                    >
                                        {plan.buttonText || "Get Started"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingSection;
