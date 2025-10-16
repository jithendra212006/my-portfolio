// app/components/Hero.jsx
'use client';

import { useRef, useLayoutEffect } from 'react';
import Hero3D from './Hero3D';
import gsap from 'gsap';

const Hero = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.fromTo(
        '#hero-text',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5 }
      ).fromTo(
        '#hero-button',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.8' // Start this animation 0.8s before the previous one ends
      );
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <Hero3D />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div id="hero-text">
          <h1 className="text-5xl font-bold md:text-7xl">Hi, I'm JITHENDRA</h1>
          <p className="mt-4 text-lg md:text-2xl">
            I build beautiful and interactive web experiences.
          </p>
        </div>
        <a
          id="hero-button"
          href="#projects"
          className="mt-8 rounded-lg bg-blue-500 py-3 px-6 font-bold text-white opacity-0 hover:bg-blue-600"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;