// app/components/AnimatedInput.jsx
'use client';
import { motion } from 'framer-motion';

const AnimatedInput = ({ as: Component = 'input', ...props }) => {
  return (
    <div className="relative w-full">
      <Component
        {...props}
        className="peer w-full rounded-lg border border-transparent bg-gray-700/50 p-3 text-white placeholder-gray-400 transition focus:outline-none focus:ring-0"
      />
      {/* The animated gradient border */}
      <motion.div
        className="absolute -inset-px rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 peer-focus:opacity-100"
        style={{ zIndex: -1 }} // Ensure it's behind the input
        initial={{ opacity: 0 }}
        whileFocus={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default AnimatedInput;