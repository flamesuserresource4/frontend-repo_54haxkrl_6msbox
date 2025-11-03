import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-amber-50/80 backdrop-blur supports-[backdrop-filter]:bg-amber-50/70">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <div className="flex flex-col leading-tight">
          <span className="text-sm tracking-widest text-gray-700 uppercase">Home</span>
          <span className="text-xl md:text-2xl font-semibold text-gray-900">Technologies</span>
        </div>
        <button className="inline-flex items-center rounded-full bg-yellow-400 text-black font-medium px-4 py-2 shadow hover:brightness-95 transition">
          Sign-up
        </button>
      </div>
    </header>
  );
}
