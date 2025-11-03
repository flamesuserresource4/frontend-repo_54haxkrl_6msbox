import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="min-h-screen bg-amber-50 text-gray-900 font-inter">
      <Header />
      <main>
        <Hero />
        <Features />
        <ProductDetails />
      </main>
    </div>
  );
}

export default App;
