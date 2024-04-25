
const Footer = () => {
    return (
        <footer className="bg-slate-200 text-gray-500 p-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                        <h3 className="text-lg font-bold mb-2">About Us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">Contact</h3>
                        <p>Email: info@example.com</p>
                        <p>Phone: +123 456 7890</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 0a10 10 0 100 20 10 10 0 000-20zm3.832 9.37l-1.125.562a.57.57 0 01-.785-.558V6.42a.57.57 0 01.785-.558l1.125.563a.57.57 0 01.226.452v1.57a.57.57 0 01-.226.452zm-.874-1.684l-.53-.265-.531.266-.605-.302a.57.57 0 01-.784-.558V5.176c0-.226.13-.43.333-.53l.674-.337V3.63c0-.314.256-.57.57-.57h1.136c.314 0 .57.256.57.57v1.802l.674.337a.57.57 0 01.333.53v1.54a.57.57 0 01-.784.558l-.605.302z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 0a10 10 0 100 20 10 10 0 000-20zm3.642 7.588c-.114.164-.262.308-.441.43a6.653 6.653 0 01-1.075.555 3.442 3.442 0 001.514-1.902 6.584 6.584 0 01-2.089.798 3.298 3.298 0 00-2.401-1.014c-1.822 0-3.297 1.475-3.297 3.298 0 .258.03.508.087.75-2.74-.138-5.167-1.45-6.787-3.45-.284.487-.448 1.05-.448 1.65 0 1.142.582 2.148 1.467 2.736a3.327 3.327 0 01-1.49-.414v.042c0 1.596 1.135 2.923 2.639 3.224-.276.063-.566.095-.868.095-.212 0-.417-.02-.618-.058.418 1.308 1.63 2.261 3.071 2.287a6.603 6.603 0 01-4.883 1.389c-.317 0-.63-.018-.937-.055 1.748 1.12 3.82 1.775 6.048 1.775 7.26 0 11.236-6.02 11.236-11.235 0-.17-.004-.34-.01-.508.77-.555 1.44-1.246 1.97-2.038z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;
