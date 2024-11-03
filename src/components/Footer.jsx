import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <motion.footer
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-5 md:px-10 lg:px-20 border-t border-gray-800"
        >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Company Info */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Avoy Baruah</h2>
                    <p className="text-gray-400 leading-relaxed">
                        Empowering innovation through technology and creative solutions.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Quick Links</h3>
                    <ul className="space-y-3">
                        {['Home', 'About Us', 'Services', 'Contact'].map((item) => (
                            <li key={item} className="hover:translate-x-2 transition-transform duration-300">
                                <a href="#" className="text-gray-400 hover:text-white hover:underline decoration-blue-500 underline-offset-4">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Stay Updated</h3>
                    <div className="flex flex-col space-y-3">
                        <input 
                            type="email" 
                            placeholder="Enter your email"
                            className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-300">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Social Links */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Connect With Us</h3>
                    <div className="flex space-x-4">
                        {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                            <motion.div
                                whileHover={{ scale: 1.2, y: -5 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                key={index}
                                className="bg-gray-800 p-3 rounded-lg cursor-pointer hover:bg-blue-600 transition-colors duration-300"
                            >
                                <Icon className="text-xl" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-800 my-8" />

            {/* Copyright */}
            <div className="container mx-auto text-center">
                <p className="text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Avoy Baruah. All rights reserved.
                </p>
            </div>
        </motion.footer>
    );
};

export default Footer;
