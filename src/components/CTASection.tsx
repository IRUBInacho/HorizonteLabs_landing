import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface CTASectionProps {
  onOpenConsultation: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="contacto" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-white border-t border-neutral-200/70 relative overflow-hidden">
      {/* Background soft subtle luxury radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(225,6,0,0.035),transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Kicker */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[12px] font-mono-code uppercase tracking-[0.24em] text-[#E10600] font-semibold mb-4"
        >
          El siguiente paso
        </motion.p>

        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 leading-tight mb-8"
        >
          Comencemos revisando juntos tu operación.
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed font-normal max-w-2xl mx-auto mb-12"
        >
          Nos reunimos a revisar cómo trabaja tu equipo e identificamos sus primeras necesidades. A partir de ahí, el servicio avanza etapa por etapa, junto con los resultados.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <button
            id="main-footer-cta"
            onClick={onOpenConsultation}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#E10600] hover:bg-[#c90500] text-white text-base font-semibold tracking-wide rounded-md transition-all duration-300 shadow-[0_4px_24px_rgba(225,6,0,0.28)] hover:shadow-[0_8px_36px_rgba(225,6,0,0.42)] cursor-pointer"
          >
            <span>Conversemos el primer paso</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Footer Exact Text */}
      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-mono-code gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#E10600]" />
          <span>Donde los agentes viven, actúan y entienden de tu operación.</span>
        </div>
        <div className="text-neutral-400">
          SUSTRATO.AI © {new Date().getFullYear()}
        </div>
      </div>
    </section>
  );
};
