import React from 'react';
import { motion } from 'framer-motion';

const painPoints = [
  {
    id: '01',
    title: 'Trabajo repetitivo.',
    copy: 'Horas perdidas copiando, pegando y transcribiendo datos.',
  },
  {
    id: '02',
    title: 'Bajo seguimiento.',
    copy: 'Clientes esperando respuestas y procesos que quedan en el aire.',
  },
  {
    id: '03',
    title: 'Información dispersa.',
    copy: 'El conocimiento vital de la empresa, perdido entre correos y carpetas.',
  },
];

export const ProblemSection: React.FC = () => {
  return (
    <section
      id="problema"
      className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-[#F7F7F9] border-t border-b border-neutral-200 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header Block - El Impuesto Oculto */}
        <div className="mb-20 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] animate-pulse" />
            <span className="text-xs font-mono-code uppercase tracking-[0.2em] text-neutral-500 font-medium">
              El problema
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] max-w-5xl leading-[1.1]"
          >
            La información dispersa y los procesos manuales frenan tu crecimiento.          </motion.h2>
        </div>

        {/* 3 Key Pain Points - Formato Editorial (Lectura en 3 segundos) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-24">
          {painPoints.map((pain, index) => (
            <motion.div
              key={pain.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="border-l-[1.5px] border-neutral-300 pl-6 py-1 hover:border-[#E10600] transition-colors duration-500"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[#111111] mb-2 tracking-tight">
                {pain.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-500 font-medium">
                {pain.copy}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Section Closer: La Frase de Impacto (Escalar sin límites) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-2xl border border-neutral-200 p-10 sm:p-14 lg:p-16 text-center shadow-[0_8px_30px_rgba(0,0,0,0.03)]"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111111] tracking-tight leading-snug max-w-4xl mx-auto">
            Automatizar no es solo ahorrar costos. <br className="hidden md:block" />
            <span className="text-[#E10600]">Es liberar la capacidad de tu equipo para escalar el negocio sin límites.</span>
          </h3>
        </motion.div>

      </div>
    </section>
  );
};