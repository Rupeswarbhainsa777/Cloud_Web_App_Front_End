const CTASection = ({openSigUp}) => {
    return (
        <section className="relative bg-gradient-to-r from-purple-600 to-purple-500">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">

                {/* Text */}
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                    <span className="block">Ready to get started?</span>
                    <span className="block text-purple-100">
            Create your account today
          </span>
                </h2>

                {/* CTA Button */}
                <div className="mt-8 lg:mt-0 flex lg:flex-shrink-0">
                    <button
                        onClick={openSigUp}
                        className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl shadow-lg bg-white text-purple-700 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400 transition-all duration-300">
                        Sign up for free
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
