// app/components/About.jsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    // This 'id' is crucial for the link in the Navbar to work
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            {/* Image Column */}
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
                {/* Add a picture of yourself in the /public folder and update the src */}
                <Image
                  src="/profile.webp" // Placeholder image
                  alt="A picture of me"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            {/* Text Content Column */}
            <div className="md:w-2/3 text-center md:text-left">
              <p className="text-lg mb-4 text-gray-300">
                Hello! I'm a passionate and creative developer with a love for building beautiful, interactive, and user-friendly web applications. My journey into tech started with a fascination for how things work, which quickly evolved into a full-fledged passion for coding.
              </p>
              <p className="text-lg text-gray-300">
                I specialize in the MERN stack and modern frontend technologies like Next.js and Tailwind CSS. I'm always eager to learn new things and take on challenging projects that push my skills to the next level.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;