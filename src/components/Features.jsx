import React from 'react';

const FEATURE_IMG_1 = 'https://placehold.co/400x300?text=Webcam';
const FEATURE_IMG_2 = 'https://placehold.co/400x300/8b5cf6/ffffff?text=Graph';
const FEATURE_IMG_3 = 'https://placehold.co/400x300/ec4899/ffffff?text=Break+Modal';

export default function Features() {
  return (
    <section className="bg-amber-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl md:text-5xl font-semibold text-gray-900 mb-16">Build better habits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            image={FEATURE_IMG_1}
            title="Designed with purpose"
            desc="Every element is crafted to support posture, focus, and consistent healthy routines at your desk."
          />
          <FeatureCard
            image={FEATURE_IMG_2}
            title="Actionable insights"
            desc="Understand your patterns and make meaningful changes using clear metrics and weekly summaries."
          />
          <FeatureCard
            image={FEATURE_IMG_3}
            title="A nudge when it matters"
            desc="Gentle reminders help you step away, stretch, and reset—right when your body needs it."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ image, title, desc }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/5">
      <div className="w-full aspect-[4/3] overflow-hidden rounded-xl mb-6">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}
