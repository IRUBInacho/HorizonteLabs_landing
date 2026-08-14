import React from 'react';
import { motion } from 'motion/react';
import { HeroNeuralCanvas } from './HeroNeuralCanvas';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-32 pb-16 px-6 sm:px-10 lg:px-16 overflow-hidden bg-white">
      {/* Subtle Neural Network Particle Canvas Background */}
      <HeroNeuralCanvas />

      {/* Decorative vertical hairline rule */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-neutral-100/70 -translate-x-1/2 pointer-events-none hidden lg:block" />

      <div className="relative z-10 max-w-5xl mx-auto w-full my-auto flex flex-col items-center text-center">
        {/* H1 Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#111111] leading-[1.06] mb-8"
        >
          Agentes de IA, Automatizaciones y Capa de Contexto en tu operación.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed mb-10"
        >
          Automatizamos tu operación con agentes de IA impulsados por tu contexto.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            id="hero-primary-cta"
            onClick={onOpenConsultation}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#E10600] hover:bg-[#c90500] text-white text-sm font-semibold tracking-wide rounded transition-all duration-300 shadow-[0_4px_20px_rgba(225,6,0,0.25)] hover:shadow-[0_6px_28px_rgba(225,6,0,0.35)] cursor-pointer"
          >
            <span>Conversemos el primer paso</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <a
            href="#servicio"
            className="inline-flex items-center gap-2 px-6 py-4 text-sm font-medium text-neutral-600 hover:text-black transition-colors"
          >
            <span>Explorar el servicio</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-neutral-400" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
