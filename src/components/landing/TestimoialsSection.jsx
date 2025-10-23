import { Star } from "lucide-react";

const TestimonialsSection = ({ testimonials }) => {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl tracking-tight">
                        Trusted by Professionals Worldwide
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        Discover how CloudShare empowers professionals across industries.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                        >
                            <div className="p-8">
                                {/* Profile Info */}
                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="h-14 w-14 rounded-full object-cover border-2 border-indigo-500 shadow-sm"
                                    />
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-gray-500">
                                            {testimonial.role} · {testimonial.company}
                                        </p>
                                    </div>
                                </div>

                                {/* Quote */}
                                <blockquote className="mt-6 text-gray-700 italic leading-relaxed">
                                    “{testimonial.quote}”
                                </blockquote>

                                {/* Rating */}
                                <div className="flex mt-4 space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={18}
                                            className={`${
                                                i < testimonial.rating
                                                    ? "text-yellow-400 fill-yellow-400 drop-shadow-sm"
                                                    : "text-gray-300"
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
