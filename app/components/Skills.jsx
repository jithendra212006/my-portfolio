// app/components/Skills.jsx
'use client';

import { useRef, useEffect } from 'react';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaPython,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiThreedotjs,
  SiMongodb,
} from 'react-icons/si';
import gsap from 'gsap';

const skills = [
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <FaCss3Alt />, name: 'CSS3' },
  { icon: <FaJsSquare />, name: 'JavaScript' },
  { icon: <FaReact />, name: 'React' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <SiTailwindcss />, name: 'TailwindCSS' },
  { icon: <FaGitAlt />, name: 'Git' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <FaPython />, name: 'Python' },
];

const Skills = () => {
  const iconsRef = useRef([]);

  useEffect(() => {
    // GSAP animation for floating icons
    iconsRef.current.forEach((icon) => {
      gsap.to(icon, {
        y: 'random(-20, 20)', // Move up and down by a random amount
        duration: 'random(1.5, 3)', // At a random speed
        repeat: -1, // Repeat forever
        yoyo: true, // Reverse the animation smoothly
        ease: 'sine.inOut',
      });
    });
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-16">My Tech Stack</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              ref={(el) => (iconsRef.current[index] = el)}
              className="flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-110"
            >
              <div className="text-6xl md:text-7xl text-gray-400 hover:text-cyan-400 transition-colors">
                {skill.icon}
              </div>
              <p className="text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;