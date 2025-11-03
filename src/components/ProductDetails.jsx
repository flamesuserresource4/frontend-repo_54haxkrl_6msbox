import React, { useState } from 'react';
import { Twitter, Instagram } from 'lucide-react';

const TAB_IMG_WEBCAM = 'https://placehold.co/600x400?text=Webcam+Art';
const TAB_IMG_SCREEN = 'https://placehold.co/600x400/0ea5e9/ffffff?text=Screen+Art';
const TAB_IMG_SPEAKER = 'https://placehold.co/600x400/22c55e/ffffff?text=Speaker+Art';
const TAB_IMG_PORTS = 'https://placehold.co/600x400/f59e0b/ffffff?text=Ports+Art';

export default function ProductDetails() {
  const tabs = ['HD Webcam', 'Brilliant screen', 'Powerful speaker', 'Extra ports'];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="bg-amber-50">
      {/* Tabs */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-5xl font-semibold text-gray-900 mb-10">Made to belong on your desk</h2>
          <div className="flex flex-wrap items-center justify-center gap-6 border-b border-gray-300/70 pb-4 mb-10">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`pb-3 px-1 text-gray-800 transition ${activeTab === t ? 'font-semibold border-b-2 border-black' : 'text-gray-500 hover:text-gray-800'}`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {activeTab === 'HD Webcam' && (
              <TabContent img={TAB_IMG_WEBCAM} title="Crystal clear presence" desc="1080p optics with adaptive exposure keeps you sharp in every call, even in tricky light." />
            )}
            {activeTab === 'Brilliant screen' && (
              <TabContent img={TAB_IMG_SCREEN} title="True-to-life clarity" desc="A matte, high-brightness panel that stays readable and comfortable all day long." />
            )}
            {activeTab === 'Powerful speaker' && (
              <TabContent img={TAB_IMG_SPEAKER} title="Sound that fills your space" desc="Rich, well-balanced audio for meetings and music—without extra clutter." />
            )}
            {activeTab === 'Extra ports' && (
              <TabContent img={TAB_IMG_PORTS} title="Everything plugs in" desc="Stay connected with the right ports front and center—no more crawling under the desk." />
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">Make productivity feel good</h3>
          <button className="inline-flex items-center rounded-full bg-yellow-400 text-black font-medium px-6 py-3 shadow hover:brightness-95 transition">
            Sign-up
          </button>
        </div>
      </section>

      {/* Specs */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-semibold mb-8">Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <SpecCol title="Display" items={[
              '27" matte IPS',
              '2560 × 1440',
              '350 nits',
              '99% sRGB'
            ]}/>
            <SpecCol title="Camera" items={[
              '1080p @ 60fps',
              'Auto exposure',
              'Dual mics',
              'Privacy shutter'
            ]}/>
            <SpecCol title="Audio" items={[
              'Stereo speakers',
              'DSP enhancement',
              'Wide soundstage',
              'Low noise'
            ]}/>
            <SpecCol title="I/O" items={[
              '2× USB-C',
              '2× USB-A',
              'HDMI + DP',
              '3.5mm jack'
            ]}/>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-300">
        <div className="bg-gradient-to-b from-black via-black to-zinc-900">
          <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-white text-lg font-semibold leading-tight">Home<br/>Technologies</div>
            </div>
            <div>
              <div className="text-white font-medium mb-3">Links</div>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Manifesto</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <div className="text-white font-medium mb-3">Contact</div>
              <p>hello@hometechoo.com</p>
            </div>
            <div>
              <div className="text-white font-medium mb-3">Social</div>
              <div className="flex items-center gap-4">
                <a aria-label="X / Twitter" href="#" className="hover:text-white"><Twitter size={20} /></a>
                <a aria-label="Instagram" href="#" className="hover:text-white"><Instagram size={20} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-gray-400">
            © {new Date().getFullYear()} Home Technologies. All rights reserved. Product visuals are illustrative placeholders.
          </div>
        </div>
      </footer>
    </div>
  );
}

function TabContent({ img, title, desc }) {
  return (
    <>
      <div className="w-full rounded-2xl overflow-hidden bg-white shadow-sm border border-black/5">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h4>
        <p className="text-gray-600 leading-relaxed mb-6">{desc}</p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-2"><span className="text-yellow-400">•</span> Thoughtful ergonomics</li>
          <li className="flex gap-2"><span className="text-yellow-400">•</span> Minimal desk footprint</li>
          <li className="flex gap-2"><span className="text-yellow-400">•</span> Built to last</li>
        </ul>
      </div>
    </>
  );
}

function SpecCol({ title, items }) {
  return (
    <div className="py-6 md:py-0 md:px-8">
      <div className="text-white/90 font-medium mb-4">{title}</div>
      <ul className="divide-y divide-white/10">
        {items.map((it) => (
          <li key={it} className="py-3 text-sm text-white/80">{it}</li>
        ))}
      </ul>
    </div>
  );
}
