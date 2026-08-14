import React from 'react';
import { motion } from 'motion/react';
import { SustratoMark } from './SustratoMark';

const consumers = ['Agentes', 'Automatizaciones', 'Software a medida'];

/** Categorías, no productos: la lista no debe leerse como el catálogo cerrado de integraciones. */
const feeds = [
  'Comunicación',
  'Documentos',
  'Datos de la operación',
  'Sistemas internos',
  'Trabajo diario',
];

/** Cada segmento representa una pieza de la capa: construida, en curso o pendiente. */
const segments = [
  { state: 'done' },
  { state: 'done' },
  { state: 'building' },
  { state: 'next' },
  { state: 'next' },
] as const;

export const SustratoDiagram: React.FC = () => {
  return (
    <section
      id="sustrato"
      className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-white border-t border-neutral-200/70 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Editorial header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[12px] font-mono-code uppercase tracking-[0.24em] text-[#E10600] font-semibold mb-3"
          >
            La capa
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight mb-8"
          >
            Sustrato.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-neutral-600 text-base sm:text-lg leading-relaxed font-normal"
          >
            <p>
              Un agente no puede trabajar dentro de una empresa sin una capa debajo. Necesita de dónde
              leer, sobre qué actuar, con qué criterio decidir y dónde dejar registro. Eso es el
              sustrato, y lo construimos dentro de tu operación.
            </p>

            <p>
              Se construye por etapas y cada etapa entrega algo que ya sirve: desde una integración
              funcionando o un proceso que deja de hacerse a mano, hasta un agente que responde sobre
              el conocimiento especializado de tu empresa, o software propio diseñado desde el inicio
              para que los agentes lo operen. Cada etapa deja el sustrato más completo, de modo que lo
              que viene después es más simple y más potente.
            </p>

            <p className="text-neutral-900 font-medium border-l-2 border-[#E10600] pl-4">
              Te acompañamos todo el camino, con un objetivo claro: agentes transformando tu operación.
            </p>
          </motion.div>
        </div>

        {/* Layer diagram: consumers on top, sustrato slab, sources feeding from below */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          {/* Consumers resting on the slab */}
          <div className="flex flex-wrap justify-center items-end gap-2 sm:gap-3 px-2">
            {consumers.map((label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                className="px-4 sm:px-6 pt-3 pb-4 -mb-px bg-white border border-neutral-200 border-b-0 rounded-t-xl text-[13px] sm:text-sm font-semibold text-neutral-900 shadow-[0_-4px_16px_rgba(0,0,0,0.03)]"
              >
                {label}
              </motion.div>
            ))}
          </div>

          {/* The slab */}
          <div className="relative bg-[linear-gradient(160deg,rgba(225,6,0,0.07),rgba(225,6,0,0.02))] border border-[#E10600]/35 rounded-2xl px-6 sm:px-10 py-8 sm:py-10 text-center shadow-[0_20px_48px_-24px_rgba(225,6,0,0.45)]">
            <SustratoMark idPrefix="slab" className="h-11 w-11 mx-auto mb-2 text-[#111111]" />

            <span className="block text-[12px] font-mono-code uppercase tracking-[0.3em] text-[#E10600] font-bold mb-3">
              Sustrato
            </span>

            <p className="text-base sm:text-lg text-neutral-900 font-medium leading-relaxed max-w-md mx-auto">
              La información, los criterios y la historia de tu empresa
            </p>

            {/* Progress segments: the layer is built piece by piece */}
            <div className="flex gap-1.5 sm:gap-2 mt-7 max-w-md mx-auto">
              {segments.map((seg, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className={`h-2.5 flex-1 rounded-full origin-left ${
                    seg.state === 'done'
                      ? 'bg-[#E10600]'
                      : seg.state === 'building'
                        ? 'bg-[#E10600]/45'
                        : 'border border-dashed border-[#E10600]/45'
                  }`}
                />
              ))}
            </div>

            <span className="block mt-4 text-[13px] text-neutral-500">
              se construye pieza a pieza, en uso desde el primer día
            </span>
          </div>

          {/* Sources feeding the slab */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-5 mt-6">
            {feeds.map((feed, i) => (
              <motion.div
                key={feed}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.09 }}
                className="flex flex-col items-center gap-1.5"
              >
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3], y: [2, -2, 2] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.35 }}
                  className="text-[#E10600] text-sm leading-none"
                >
                  ↑
                </motion.span>
                <span className="px-3.5 py-1.5 bg-neutral-50 border border-neutral-200 rounded-full text-xs font-medium text-neutral-700 whitespace-nowrap">
                  {feed}
                </span>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-[13px] text-neutral-500 leading-relaxed mt-8 max-w-xl mx-auto">
            Se conecta a lo que tu equipo ya usa: Slack, Drive, correo, tus bases de datos, tu ERP,
            tus propias aplicaciones. Sobre el sustrato trabajan los agentes, las automatizaciones y
            el software a medida.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
