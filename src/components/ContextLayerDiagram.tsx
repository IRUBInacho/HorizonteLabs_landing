import React from 'react';
import { motion } from 'motion/react';
import { Layers, Bot, Database, Sparkles, FileText, CheckCircle2 } from 'lucide-react';

const sourceNodes = [
  'Slack',
  'Drive',
  'Correo',
  'Datos de la operación',
  'Trabajo diario',
];

export const ContextLayerDiagram: React.FC = () => {
  return (
    <section id="contexto" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-white border-t border-neutral-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Copy (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[12px] font-mono-code uppercase tracking-[0.24em] text-[#E10600] font-semibold mb-3"
            >
              El diferenciador
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight mb-8"
            >
              La capa de contexto.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-neutral-600 text-base sm:text-lg leading-relaxed font-normal"
            >
              <p>
                Cada etapa del servicio va construyendo una capa de contexto: la información, los criterios y la historia de tu empresa, ordenados y accesibles para los agentes. Es lo que hace que un agente sepa qué documento es relevante, con qué criterio se elaboró y cómo se resolvió un caso similar — que responda con conocimiento de la casa, como alguien del equipo.
              </p>

              <p className="text-neutral-900 font-medium border-l-2 border-[#E10600] pl-4">
                La capa está en uso desde la primera integración. Cada automatización y cada herramienta nueva se apoya en lo que ya existe y la deja más completa.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Architectural Flow Diagram (7 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-[#FAFAFA] border border-neutral-200 rounded-2xl p-6 sm:p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
            >
              {/* Telemetry Header */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-neutral-200 text-[11px] font-mono-code text-neutral-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E10600] animate-ping" />
                  DIAGRAMA OPERACIONAL V2.4
                </span>
                <span className="text-neutral-700 font-semibold">FEEDBACK CONTINUO</span>
              </div>

              {/* Diagram Stage: 3-column Layout (Inputs -> Context Layer -> Agents) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Column 1: Source Nodes (4 cols) */}
                <div className="md:col-span-4 flex flex-col gap-2.5">
                  <span className="text-[11px] font-mono-code uppercase tracking-wider text-neutral-400 mb-1">
                    Fuentes y Operación
                  </span>
                  {sourceNodes.map((node, i) => (
                    <motion.div
                      key={node}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i, duration: 0.5 }}
                      className="group flex items-center justify-between px-3 py-2 bg-white border border-neutral-200 rounded-md text-xs font-medium text-neutral-800 shadow-xs hover:border-[#E10600] transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-[#E10600] transition-colors" />
                        {node}
                      </span>
                      <motion.span
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                        className="text-[10px] font-mono-code text-[#E10600]"
                      >
                        →
                      </motion.span>
                    </motion.div>
                  ))}
                </div>

                {/* Column 2: Central "Capa de Contexto" (5 cols) */}
                <div className="md:col-span-5 flex flex-col items-center">
                  <div className="w-full relative bg-white border-2 border-neutral-900 rounded-xl p-5 shadow-sm">
                    {/* Glowing Accent Top Bar */}
                    <div className="absolute -top-[2px] left-6 right-6 h-[2px] bg-[#E10600]" />

                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-1.5 bg-neutral-900 text-white rounded">
                        <Layers className="w-4 h-4 text-[#E10600]" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold tracking-tight text-neutral-900 uppercase font-mono-code">
                          Capa de contexto
                        </h4>
                        <p className="text-[10px] text-neutral-400">Núcleo unificado</p>
                      </div>
                    </div>

                    {/* Internal layers pill list */}
                    <div className="space-y-1.5 text-[11px] font-mono-code">
                      <div className="p-1.5 bg-[#F9F9F9] border border-neutral-100 rounded flex items-center justify-between text-neutral-700">
                        <span className="flex items-center gap-1.5">
                          <Database className="w-3 h-3 text-[#E10600]" />
                          Información empresarial
                        </span>
                        <span className="text-[9px] text-neutral-400">Vectorizada</span>
                      </div>
                      <div className="p-1.5 bg-[#F9F9F9] border border-neutral-100 rounded flex items-center justify-between text-neutral-700">
                        <span className="flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-[#E10600]" />
                          Criterios y políticas
                        </span>
                        <span className="text-[9px] text-neutral-400">Estructurado</span>
                      </div>
                      <div className="p-1.5 bg-[#F9F9F9] border border-neutral-100 rounded flex items-center justify-between text-neutral-700">
                        <span className="flex items-center gap-1.5">
                          <FileText className="w-3 h-3 text-[#E10600]" />
                          Historia de casos
                        </span>
                        <span className="text-[9px] text-neutral-400">Indexado</span>
                      </div>
                    </div>

                    {/* Bottom active status */}
                    <div className="mt-3 pt-2.5 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono-code text-neutral-500">
                      <span>Crecimiento acumulativo</span>
                      <span className="text-[#E10600] font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> LISTA DÍA 1
                      </span>
                    </div>
                  </div>
                </div>

                {/* Column 3: Destination Node "Agentes" (3 cols) */}
                <div className="md:col-span-3 flex flex-col items-center">
                  <div className="w-full bg-neutral-900 text-white rounded-xl p-5 text-center flex flex-col items-center justify-center border border-neutral-800 shadow-md">
                    <div className="relative mb-2">
                      <Bot className="w-8 h-8 text-white" />
                      <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#E10600]" />
                    </div>
                    <h5 className="text-xs font-bold uppercase tracking-wider font-mono-code mb-1">
                      Agentes
                    </h5>
                    <p className="text-[10px] text-neutral-400 leading-tight">
                      Respuestas con conocimiento de la casa
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Pulse Explanation Footnote */}
              <div className="mt-8 pt-4 border-t border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-2">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-0.5 bg-[#E10600]" />
                  Flujo bidireccional: cada nueva herramienta alimenta la misma capa
                </span>
                <span className="font-mono-code text-neutral-700 font-medium">
                  CERO PÉRDIDA DE CONTEXTO
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
