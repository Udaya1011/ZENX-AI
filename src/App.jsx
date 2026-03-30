import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import BrandSlider from './components/BrandSlider';
import Features from './components/Features';
import UseCases from './components/UseCases';
import DashboardPreview from './components/DashboardPreview';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CircuitBackground from './components/CircuitBackground';

function App() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden selection:bg-teal-500/30 selection:text-white">
      
      {/* GLOBAL CIRCUIT BACKGROUND - PERSISTENT ACROSS ALL PAGES */}
      <CircuitBackground />
      
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <div id="home"><Hero /></div>
          <VideoSection />
          <BrandSlider />
          
          <div className="bg-black relative">
            <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-black to-transparent pointer-events-none z-20" />
            
            <div id="features"><Features /></div>
            <UseCases />
            <DashboardPreview />
            <div id="pricing"><Pricing /></div>
            <div id="faq"><FAQ /></div>
          </div>
        </main>
        
        <Footer />
      </div>

      {/* Global Scroll Progress Current Bar */}
      <div className="fixed bottom-0 left-0 w-full h-0.5 bg-white/5 z-[120]">
        <div className="h-full bg-teal-500 shadow-[0_0_15px_#2dd4bf] origin-left transition-transform duration-100" />
      </div>
    </div>
  );
}

export default App;
