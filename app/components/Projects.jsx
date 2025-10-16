// app/components/Projects.jsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Add your project data here
const projects = [
  {
    title: 'AI CODE REVIEWER',
    description: 'An AI-powered assistant that automatically analyzes your code to find bugs, suggest optimizations, and ensure best practices.',
    image: '/project1.jpg', // Make sure to add this image to your /public folder
    link: 'https://codexa-ai.netlify.app/',
  },
  
];

// Reusable Card component
const Card = ({ project }) => {
  return (
    <motion.div
      className="w-full max-w-sm rounded-xl bg-gray-800 p-6 border border-gray-700 shadow-lg shadow-black/20"
      whileHover={{
        y: -8,
        boxShadow: '0px 20px 40px -10px rgba(59, 130, 246, 0.4)',
      }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="relative mb-4 h-52 w-full">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h3 className="text-2xl font-bold text-left">{project.title}</h3>
      <p className="text-gray-400 mt-2 text-left">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-blue-400 hover:underline"
      >
        View Project →
      </a>
    </motion.div>
  );
};

// Main Projects section component
const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-16">My Projects</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {projects.map((project) => (
            <Card key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;