import React from 'react';
import { motion } from 'motion/react';
import { Zap, TrendingUp, Check } from 'lucide-react';

export const ResultsSection: React.FC = () => {
  return (
    <section id="resultados" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-[#FAFAFA] border-t border-neutral-200/70">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[12px] font-mono-code uppercase tracking-[0.24em] text-[#E10600] font-semibold mb-3"
          >
            El resultado
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight"
          >
            Los agentes quedan operando dentro de tu empresa.
          </motion.h2>
        </div>

        {/* 50/50 Clean Split Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Column 1: Durante el proceso */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-2xl p-8 sm:p-12 border border-neutral-200 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono-code uppercase tracking-wider text-neutral-400 font-medium">
                  Durante el proceso
                </span>
                <div className="p-2 rounded-lg bg-neutral-100 text-neutral-800">
                  <Zap className="w-5 h-5 text-[#E10600]" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4 tracking-tight">
                Valor desde el primer día
              </h3>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal mb-8">
                Herramientas conectadas, procesos automatizados y un equipo que ya utiliza los agentes.
              </p>
            </div>

            {/* Checklist highlights */}
            <div className="pt-6 border-t border-neutral-100 space-y-3 font-mono-code text-xs text-neutral-700">
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span>Adopción inmediata sin fricción</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span>Horas de trabajo manual recuperadas</span>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Hacia adelante */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-2xl p-8 sm:p-12 border border-neutral-200 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono-code uppercase tracking-wider text-neutral-400 font-medium">
                  Hacia adelante
                </span>
                <div className="p-2 rounded-lg bg-neutral-100 text-neutral-800">
                  <TrendingUp className="w-5 h-5 text-[#E10600]" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4 tracking-tight">
                Una capa de contexto que crece
              </h3>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal mb-8">
                La capa queda instalada y cada nuevo requerimiento se apoya en ella. Los siguientes desarrollos resultan más simples y más potentes.
              </p>
            </div>

            {/* Checklist highlights */}
            <div className="pt-6 border-t border-neutral-100 space-y-3 font-mono-code text-xs text-neutral-700">
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span>Efecto compuesto de inteligencia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span>Nuevas herramientas en días, no meses</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
