'use client'; 
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 z-50 bg-gray-900/50 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        {/* Improved Logo/Name Styling */}
        <Link href="/" className="text-2xl font-bold text-white tracking-wider">
          <span className="text-blue-400">JITHENDRA</span> MUDIGONDA
        </Link>
        <div className="hidden md:flex space-x-8">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-lg hover:text-cyan-400 transition-colors duration-300 group" // Added group class
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
              {/* Subtle hover underline */}
              <span className="absolute left-0 bottom-0 h-0.5 bg-cyan-400 w-0 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;