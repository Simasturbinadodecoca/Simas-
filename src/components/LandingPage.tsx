import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface LandingPageProps {
  onLoginClick: () => void;
}

export default function LandingPage({ onLoginClick }: LandingPageProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden font-sans relative">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-50 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-50 blur-[120px] rounded-full opacity-50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <header className="flex justify-between items-center py-8">
          <h1 data-aos="fade-down" className="text-2xl font-bold tracking-tighter uppercase">
            Artemis-III
          </h1>

          <nav className="hidden md:flex items-center gap-8">
            <a data-aos="fade-down" data-aos-delay="100" href="#" className="text-sm font-medium hover:text-indigo-600 transition-colors uppercase tracking-widest">Planos</a>
            <a data-aos="fade-down" data-aos-delay="200" href="#" className="text-sm font-medium hover:text-indigo-600 transition-colors uppercase tracking-widest">Sobre</a>
            <a data-aos="fade-down" data-aos-delay="300" href="#" className="text-sm font-medium hover:text-indigo-600 transition-colors uppercase tracking-widest">Downloads</a>
            <a data-aos="fade-down" data-aos-delay="400" href="#" className="text-sm font-medium hover:text-indigo-600 transition-colors uppercase tracking-widest">Profissionais</a>
          </nav>

          <button 
            onClick={onLoginClick}
            data-aos="fade-down" 
            data-aos-delay="500"
            className="bg-black text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-black/80 transition-all uppercase tracking-widest"
          >
            Login
          </button>
        </header>

        <main className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div data-aos="fade-right" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/5">
              <span className="text-[10px] font-bold uppercase tracking-widest">Introdução &wedbar;</span>
            </div>

            <h2 data-aos="fade-up" data-aos-delay="200" className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter uppercase">
              Lorem ipsum<br />elit
            </h2>

            <p data-aos="fade-up" data-aos-delay="400" className="text-lg text-black/60 max-w-md leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat fuga rem voluptates animi odit quam ad rerum expedita beatae, incidunt et architecto saepe facere perferendis tenetur consequatur totam!
            </p>

            <div data-aos="fade-up" data-aos-delay="600" className="flex flex-wrap gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-black/80 transition-all flex items-center gap-2 group uppercase tracking-widest text-sm">
                Sobre <span className="group-hover:translate-x-1 transition-transform">&gt;</span>
              </button>
              <button className="bg-white border border-black/10 text-black px-8 py-4 rounded-full font-bold hover:bg-black/5 transition-all flex items-center gap-2 group uppercase tracking-widest text-sm">
                Planos <span className="group-hover:translate-x-1 transition-transform">&gt;</span>
              </button>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-delay="400" className="relative h-[500px] lg:h-[700px] w-full">
            {/* Spline Viewer Integration */}
            <div className="absolute inset-0 z-0">
               {React.createElement('spline-viewer', {
                 class: "w-full h-full",
                 url: "https://prod.spline.design/EtdApLixRxrZz4O0/scene.splinecode"
               })}
            </div>
          </div>
        </main>
      </div>

      {/* Footer / Extra Decoration */}
      <div className="absolute bottom-12 left-12 hidden lg:block">
        <p className="text-[10px] uppercase tracking-[0.5em] text-black/20 font-bold rotate-90 origin-left">
          Artemis-III &bull; 2026
        </p>
      </div>
    </div>
  );
}
