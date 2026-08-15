import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { SustratoMark } from './SustratoMark';
import { BentoSpecializedAgentVisual } from './visuals/BentoSpecializedAgentVisual';
import { BentoAutomationVisual } from './visuals/BentoAutomationVisual';
import { BentoCustomSoftwareVisual } from './visuals/BentoCustomSoftwareVisual';

const consumers = [
  {
    id: 'Agentes',
    label: 'Agentes',
    title: 'Agente especializado',
    description: 'Implementamos un agente capaz de consultar el conocimiento de la empresa —proyectos, informes, criterios técnicos— y responder sobre él con precisión.',
    visual: <BentoSpecializedAgentVisual />
  },
  {
    id: 'Automatizaciones',
    label: 'Automatizaciones',
    title: 'Automatizaciones',
    description: 'Flujos que resuelven el trabajo repetitivo. Documentos que preparan solos apoyándose en trabajos anteriores e informes generados desde datos.',
    visual: <BentoAutomationVisual />
  },
  {
    id: 'Software',
    label: 'Software a medida',
    title: 'Herramientas diseñadas para operar',
    description: 'Desarrollamos aplicaciones diseñadas para integrarse con agentes y la capa de contexto: cada herramienta nueva es algo que los agentes pueden usar.',
    visual: <BentoCustomSoftwareVisual />
  }
];

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
  const [activeConsumerId, setActiveConsumerId] = useState<string | null>(null);
  const activeConsumer = consumers.find((c) => c.id === activeConsumerId);

  return (
    <section
      id="sustrato"
      className="py-16 sm:py-24 lg:py-32 px-6 sm:px-10 lg:px-16 bg-white border-t border-neutral-200/70 overflow-hidden"
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
          <div className="flex flex-wrap justify-center items-end gap-2 sm:gap-3 px-2 relative z-20">
            {consumers.map((consumer, i) => {
              const isActive = activeConsumerId === consumer.id;
              return (
              <motion.button
                key={consumer.id}
                onClick={() => setActiveConsumerId(isActive ? null : consumer.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: [20, -5, 0] }}
                whileHover={{ y: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15, ease: 'easeOut' }}
                className={`px-3 sm:px-6 pt-3 pb-4 -mb-px bg-white border border-neutral-200 border-b-0 rounded-t-xl text-[12px] sm:text-sm font-semibold shadow-[0_-4px_16px_rgba(0,0,0,0.03)] transition-all duration-300 cursor-pointer focus:outline-none flex items-center gap-2 ${
                  isActive
                    ? 'text-[#E10600] border-[#E10600] bg-[#FAFAFA] shadow-[0_-8px_20px_rgba(225,6,0,0.08)]'
                    : 'text-neutral-900 hover:text-[#E10600]'
                }`}
              >
                {consumer.label}
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-neutral-100/50">
                  {isActive ? (
                    <Minus className="w-3 h-3 text-[#E10600]" />
                  ) : (
                    <Plus className="w-3 h-3 text-neutral-700 group-hover:text-[#E10600] transition-colors" />
                  )}
                </span>
              </motion.button>
            )})}
          </div>

          {/* Accordion visual section */}
          <AnimatePresence>
            {activeConsumer && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden w-full relative z-10"
              >
                <div className="bg-[#FAFAFA] border border-[#E10600]/30 rounded-2xl rounded-t-none mb-6 sm:mb-8 p-6 sm:p-8 shadow-[0_20px_40px_-15px_rgba(225,6,0,0.15)] relative -top-[1px]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="flex flex-col text-left">
                      <span className="text-[11px] font-mono-code uppercase tracking-widest text-[#E10600] font-semibold mb-3">
                        En Acción
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 leading-tight">
                        {activeConsumer.title}
                      </h3>
                      <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                        {activeConsumer.description}
                      </p>
                    </div>
                    <div className="w-full">
                      {activeConsumer.visual}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

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
          <div className="flex flex-wrap justify-center gap-x-2 sm:gap-x-4 gap-y-3 sm:gap-y-5 mt-6">
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
