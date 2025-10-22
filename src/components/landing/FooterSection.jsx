

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700 shadow-inner">
            <div className="max-w-7xl mx-auto py-10 px-6 text-center">
                {/* Logo or Brand Name */}
                <h2 className="text-2xl font-semibold text-white tracking-wide mb-2">
                    CloudShare
                </h2>
                <p className="text-sm text-gray-400 mb-6">
                    Empowering secure and seamless cloud file sharing.
                </p>

                {/* Navigation Links */}
                <div className="flex justify-center space-x-8 mb-6">
                    {["Privacy Policy", "Terms of Service", "Contact"].map((item, i) => (
                        <a
                            key={i}
                            href="#"
                            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 ease-in-out text-sm font-medium"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 w-2/3 mx-auto mb-4"></div>

                {/* Copyright */}
                <p className="text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} <span className="text-gray-300">CloudShare</span>. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
