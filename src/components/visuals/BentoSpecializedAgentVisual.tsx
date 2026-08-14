import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, FileText, MessageSquare, Database, Sparkles, Check, Search } from 'lucide-react';

const agentScenarios = [
  {
    query: '¿Con qué criterio resolvimos el caso anterior?',
    source: 'Criterios Técnicos · Proyecto Alfa',
    answer: 'Identificado en repositorio 2024: Se aplicó protocolo v4.2 con acuerdo marco.',
    matchRate: '99.8%',
  },
  {
    query: '¿Dónde está el informe financiero consolidado?',
    source: 'Drive Corporativo / Finanzas',
    answer: 'Localizado en carpeta Directiva: Actualizado hoy a las 09:30 hrs.',
    matchRate: '100%',
  },
  {
    query: 'Generar resumen de acuerdos con cliente',
    source: 'Slack + Correos históricos',
    answer: '3 acuerdos clave detectados y estructurados con conocimiento de la casa.',
    matchRate: '99.5%',
  },
];

export const BentoSpecializedAgentVisual: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScenario((prev) => (prev + 1) % agentScenarios.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const scenario = agentScenarios[activeScenario];

  return (
    <div className="relative w-full min-h-[260px] sm:min-h-[290px] bg-[#FBFBFB] rounded-xl border border-neutral-200/90 p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-inner">
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#F2F2F2_1px,transparent_1px),linear-gradient(to_right,#F2F2F2_1px,transparent_1px)] bg-[size:16px_16px] opacity-60 pointer-events-none" />

      {/* Top Telemetry */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono-code text-neutral-400 pb-2 border-b border-neutral-200/60">
        <span className="flex items-center gap-2 text-neutral-800 font-medium">
          <span className="w-2 h-2 rounded-full bg-[#E10600] animate-ping" />
          AGENTE ESPECIALIZADO · CONOCIMIENTO PROPIO
        </span>
        <span className="text-[#E10600] font-mono-code text-[10px] font-semibold">
          PRECISIÓN: {scenario.matchRate}
        </span>
      </div>

      {/* Center Dynamic Graphic: Central Breathing Brain + 4 Connected Orbit Nodes */}
      <div className="relative z-10 my-auto py-2">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          
          {/* Central Neural Brain Core (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-center justify-center">
            <div className="relative flex items-center justify-center p-3">
              {/* Outer Aura 1 (Breathing Pulse) */}
              <motion.div
                animate={{
                  scale: [1, 1.35, 1],
                  opacity: [0.35, 0.05, 0.35],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute w-28 h-28 rounded-full bg-[#E10600] blur-md pointer-events-none"
              />

              {/* Outer Aura 2 (Concentric Ring) */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  rotate: { duration: 12, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 2.8, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="absolute w-20 h-20 rounded-full border border-dashed border-[#E10600]/60"
              />

              {/* Core Orb Container */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative z-10 w-16 h-16 bg-neutral-950 rounded-full flex flex-col items-center justify-center border-2 border-neutral-800 shadow-[0_0_25px_rgba(225,6,0,0.35)]"
              >
                <Bot className="w-7 h-7 text-white" />
                <motion.span
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-[#E10600] mt-0.5"
                />
              </motion.div>
            </div>

            <div className="text-center mt-1">
              <span className="text-[10px] font-mono-code font-bold uppercase tracking-widest text-neutral-900">
                CEREBRO OPERACIONAL
              </span>
              <p className="text-[9px] font-mono-code text-neutral-400">Pensando & Asistiendo en vivo</p>
            </div>
          </div>

          {/* Connected Daily Work Information Stack (7 cols) */}
          <div className="md:col-span-7 flex flex-col gap-2">
            {/* Live reasoning prompt card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScenario}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white border border-neutral-200 rounded-lg p-3 shadow-xs space-y-2"
              >
                {/* Team prompt */}
                <div className="flex items-start gap-2 text-xs">
                  <div className="p-1 rounded bg-neutral-100 text-neutral-600 shrink-0 mt-0.5">
                    <Search className="w-3 h-3 text-neutral-700" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-code text-neutral-400 uppercase">Consulta del equipo</span>
                    <p className="font-semibold text-neutral-900 leading-snug">{scenario.query}</p>
                  </div>
                </div>

                {/* Agent verified response */}
                <div className="flex items-start gap-2 text-xs pt-2 border-t border-neutral-100 bg-[#FAFAFA] p-2 rounded">
                  <div className="p-1 rounded bg-[#E10600]/10 text-[#E10600] shrink-0 mt-0.5">
                    <Sparkles className="w-3 h-3 text-[#E10600]" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-[9px] font-mono-code text-neutral-500 mb-0.5">
                      <span>Fuente: {scenario.source}</span>
                      <span className="text-emerald-600 font-semibold flex items-center gap-0.5">
                        <Check className="w-2.5 h-2.5" /> 0 alucinación
                      </span>
                    </div>
                    <p className="text-neutral-700 text-[11px] leading-tight font-medium">
                      {scenario.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Micro Knowledge tags */}
            <div className="flex items-center gap-1.5 text-[9px] font-mono-code text-neutral-500">
              <span className="px-2 py-0.5 bg-white border border-neutral-200 rounded flex items-center gap-1">
                <FileText className="w-2.5 h-2.5 text-[#E10600]" /> Informes & Proyectos
              </span>
              <span className="px-2 py-0.5 bg-white border border-neutral-200 rounded flex items-center gap-1">
                <Database className="w-2.5 h-2.5 text-neutral-700" /> Criterios técnicos
              </span>
              <span className="px-2 py-0.5 bg-white border border-neutral-200 rounded flex items-center gap-1">
                <MessageSquare className="w-2.5 h-2.5 text-neutral-700" /> Historial
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Telemetry Footer */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-neutral-500 pt-2.5 border-t border-neutral-200/60 gap-2">
        <span className="flex items-center gap-1.5 font-mono-code">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>Responde con conocimiento de la casa, como alguien del equipo</span>
        </span>
        <span className="text-neutral-900 font-mono-code text-[10px] font-medium">
          APRENDIZAJE CONTINUO
        </span>
      </div>
    </div>
  );
};
