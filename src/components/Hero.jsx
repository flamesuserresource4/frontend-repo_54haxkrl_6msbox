import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const DESK_IMG = 'https://placehold.co/1200x800?text=Desk+Setup';
const SCREEN_1 = 'https://placehold.co/800x600/6366f1/white?text=Wallpaper';
const SCREEN_2 = 'https://placehold.co/800x600/8b5cf6/white?text=Graph';
const SCREEN_3 = 'https://placehold.co/800x600/ec4899/white?text=Break+Modal';

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });

  // Intro text fades out from 0 -> 20% scroll
  const introOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Screen crossfades: 0-50% (1->2), 50-100% (2->3)
  const screen1Opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const screen2Opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const screen3Opacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  return (
    <section ref={sectionRef} className="relative w-full">
      {/* Full-bleed Spline cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Soft gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-50/80 via-amber-50/30 to-amber-50"/>

      {/* Scrollable content wrapper to create room for the sticky hero */}
      <div className="relative">
        {/* Intro text */}
        <div className="min-h-[60vh] flex items-end justify-center px-6">
          <motion.h1 style={{ opacity: introOpacity }} className="max-w-4xl text-center text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight pt-24">
            Computer work is quietly taking a toll on our <span className="text-yellow-400">health & productivity</span> every day.
          </motion.h1>
        </div>

        {/* Sticky visual container */}
        <div className="sticky top-0 h-screen flex items-center justify-center px-6">
          <div className="relative w-full max-w-6xl aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl border border-black/5 bg-white/60 backdrop-blur">
            {/* Desk background */}
            <img src={DESK_IMG} alt="Desk setup" className="absolute inset-0 w-full h-full object-cover" />

            {/* Simulated monitor area positioned near center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[45%] w-[62%] aspect-[16/10] rounded-lg shadow-xl overflow-hidden ring-8 ring-black/20">
              {/* Stacked screens */}
              <motion.img src={SCREEN_1} alt="Wallpaper" style={{ opacity: screen1Opacity }} className="absolute inset-0 w-full h-full object-cover" />
              <motion.img src={SCREEN_2} alt="Analytics Graph" style={{ opacity: screen2Opacity }} className="absolute inset-0 w-full h-full object-cover" />
              <motion.img src={SCREEN_3} alt="Break Modal" style={{ opacity: screen3Opacity }} className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Spacer after hero to allow scroll completion before next section */}
        <div className="h-[30vh]" />
      </div>
    </section>
  );
}
