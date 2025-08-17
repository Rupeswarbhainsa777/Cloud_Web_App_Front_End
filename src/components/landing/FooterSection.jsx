const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-700">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} CloudShare. All rights reserved.
                    </p>
                    <div className="mt-3 flex justify-center space-x-6">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
