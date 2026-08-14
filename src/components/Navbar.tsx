import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200/80 py-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]'
        : 'bg-transparent py-6 border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center group">
          <div className="bg-[#0A0A0A]/90 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-neutral-800 shadow-sm transition-transform duration-300 group-hover:bg-[#0A0A0A]">
            <img
              src="/hl_concept_1_neural_transparent_cropped.png"
              alt="Horizonte Labs Logo"
              className="h-10 sm:h-12 object-contain"
            />
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-neutral-600">
          <a href="#problema" className="hover:text-black transition-colors">
            El Problema
          </a>
          <a href="#servicio" className="hover:text-black transition-colors">
            El Servicio
          </a>
          <a href="#contexto" className="hover:text-black transition-colors">
            Capa de Contexto
          </a>
          <a href="#resultados" className="hover:text-black transition-colors">
            Resultados
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <button
            id="nav-cta-btn"
            onClick={onOpenConsultation}
            className="group relative inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-neutral-100 hover:bg-neutral-900 hover:text-white rounded transition-all duration-300 cursor-pointer border border-neutral-200 hover:border-black"
          >
            <span>Iniciar</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#E10600] group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </header>
  );
};
