import React from 'react';
import { motion } from 'motion/react';
import { Copy, MessageSquareOff, SearchX } from 'lucide-react';

const painPoints = [
  {
    id: 'dolor-1',
    step: '01',
    icon: Copy,
    title: 'Trabajo manual y repetitivo.',
    copy: 'Copiar datos, transcribir documentos y generar reportes a mano. Tareas mecánicas que frustran a tu equipo y frenan el crecimiento.',
  },
  {
    id: 'dolor-2',
    step: '02',
    icon: MessageSquareOff,
    title: 'Saturación en atención al cliente.',
    copy: 'Gestión de postventa, dudas frecuentes y reclamos que colapsan los canales de comunicación y retrasan las respuestas que realmente importan.',
  },
  {
    id: 'dolor-3',
    step: '03',
    icon: SearchX,
    title: 'Información dispersa.',
    copy: 'Saber que la respuesta existe, pero perder 20 minutos buscando entre correos, hilos de Slack y carpetas de Drive para encontrarla.',
  },
];

export const ProblemSection: React.FC = () => {
  return (
    <section
      id="problema"
      className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-[#F7F7F9] border-t border-b border-neutral-200 relative overflow-hidden"
    >
      {/* Precision architectural hairline background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ECECEE_1px,transparent_1px),linear-gradient(to_bottom,#ECECEE_1px,transparent_1px)] bg-[size:32px_32px] opacity-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Block */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[12px] font-mono-code uppercase tracking-[0.24em] text-neutral-400 font-semibold mb-3"
          >
            El problema
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight"
          >
            Tu equipo pierde horas valiosas en tareas que una máquina debería hacer.
          </motion.h2>
        </div>

        {/* 3 Key Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-20 sm:mb-28">
          {painPoints.map((pain, index) => {
            const Icon = pain.icon;
            return (
              <motion.div
                key={pain.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group bg-white rounded-xl p-8 sm:p-10 border border-neutral-200 hover:border-neutral-300 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between"
              >
                <div>
                  {/* Top Step & Minimalist Silver Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono-code text-neutral-400 font-medium">
                      {pain.step}
                    </span>
                    <div className="p-3 rounded-lg bg-[#F7F7F9] text-neutral-500 border border-neutral-200 group-hover:text-neutral-900 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 leading-snug">
                    {pain.title}
                  </h3>

                  {/* Copy */}
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                    {pain.copy}
                  </p>
                </div>

                {/* Bottom subtle hairline indicator */}
                <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono-code text-neutral-400">
                  <span>Fricción operacional</span>
                  <span className="text-neutral-700">Coste oculto</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section Closer: La Ecuación del Valor (Contenedor Blanco Puro con Elevación Sutil) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto bg-white rounded-2xl border border-neutral-200 p-8 sm:p-12 lg:p-14 shadow-sm text-center"
        >
          {/* Eyebrow marker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F7F9] border border-neutral-200 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
            <span className="text-[11px] font-mono-code uppercase tracking-[0.2em] text-neutral-500 font-medium">
              Ecuación del valor
            </span>
          </div>

          {/* Mathematical Formula Layout */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-4 sm:gap-x-4 md:gap-x-5 text-base sm:text-xl md:text-2xl font-bold text-[#111111] tracking-tight leading-snug">
            <span className="px-3.5 py-2 bg-[#F9F9F9] rounded-lg border border-neutral-200/80 font-mono-code text-sm sm:text-lg text-[#111111]">
              [Menos trabajo repetitivo]
            </span>

            <span className="text-[#E10600] text-xl sm:text-2xl font-mono-code font-bold">
              +
            </span>

            <span className="px-3.5 py-2 bg-[#F9F9F9] rounded-lg border border-neutral-200/80 font-mono-code text-sm sm:text-lg text-[#111111]">
              [Cero pérdida de tiempo]
            </span>

            <span className="text-[#E10600] text-xl sm:text-2xl font-mono-code font-bold">
              =
            </span>

            <span className="text-[#111111] font-bold underline decoration-neutral-300 decoration-1 underline-offset-4">
              Eficiencia Operativa
            </span>

            <span className="text-[#E10600] text-xl sm:text-2xl font-mono-code font-bold">
              =
            </span>

            <span className="text-[#111111] font-extrabold bg-[#E10600]/5 px-3.5 py-2 rounded-lg border border-[#E10600]/20">
              Menos fuga de dinero.
            </span>
          </div>

          {/* Sutil Support Copy en Gris Plata */}
          <p className="text-xs sm:text-sm text-neutral-400 font-normal mt-8 max-w-2xl mx-auto leading-relaxed">
            Eliminar la frustración diaria de tu equipo se traduce directamente en erradicar los sobrecostos ocultos de tu operación.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
