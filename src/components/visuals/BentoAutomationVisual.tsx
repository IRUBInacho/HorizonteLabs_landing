import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageSquare, Ticket, FileText, CheckCircle2, Zap, ArrowRight, Check } from 'lucide-react';

const pipelineTasks = [
  {
    id: 1,
    input: {
      title: 'Ticket de soporte',
      detail: 'Consulta técnica compleja',
      icon: Ticket,
      meta: 'SLA: Inmediato',
    },
    process: {
      name: 'Análisis de histórico',
      model: 'Agente MCP',
      speed: '0.18s',
    },
    output: {
      title: 'Respuesta precisa redactada',
      detail: 'Enviada al cliente con solución',
      icon: CheckCircle2,
      tag: '100% Resuelto',
    },
  },
  {
    id: 2,
    input: {
      title: 'Correo con contrato',
      detail: 'Revisión de cláusulas legales',
      icon: Mail,
      meta: 'Legal & Compliance',
    },
    process: {
      name: 'Criterio técnico v4.2',
      model: 'Capa de Contexto',
      speed: '0.34s',
    },
    output: {
      title: 'Documento preparado',
      detail: 'Apoyado en trabajos anteriores',
      icon: FileText,
      tag: 'Listo para firma',
    },
  },
  {
    id: 3,
    input: {
      title: 'Datos de la semana',
      detail: 'Métricas de 5 plataformas',
      icon: MessageSquare,
      meta: 'Operaciones',
    },
    process: {
      name: 'Consolidación de datos',
      model: 'Motor de Informes',
      speed: '0.22s',
    },
    output: {
      title: 'Informe operacional',
      detail: 'Generado y distribuido al equipo',
      icon: CheckCircle2,
      tag: 'Completado',
    },
  },
];

export const BentoAutomationVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % pipelineTasks.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const current = pipelineTasks[activeStep];
  const InputIcon = current.input.icon;
  const OutputIcon = current.output.icon;

  return (
    <div className="relative w-full min-h-[260px] sm:min-h-[290px] bg-[#FBFBFB] rounded-xl border border-neutral-200/90 p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-inner">
      {/* Background assembly grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#E8E8E8_1px,transparent_1px)] [background-size:14px_14px] opacity-70 pointer-events-none" />

      {/* Top Telemetry */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono-code text-neutral-400 pb-2 border-b border-neutral-200/60">
        <span className="flex items-center gap-2 text-neutral-800 font-medium">
          <span className="w-2 h-2 rounded-full bg-[#E10600] animate-ping" />
          CADENA DE MONTAJE DIGITAL · 24/7
        </span>
        <span className="text-neutral-500 font-mono-code text-[10px]">
          FLUJO CONTINUO SIN ESPERA
        </span>
      </div>

      {/* Main Assembly Stage: Input -> Process Engine -> Output */}
      <div className="relative z-10 my-auto py-2">
        <div className="grid grid-cols-1 md:grid-cols-11 gap-3 sm:gap-4 items-center">
          
          {/* Stage 1: INPUT (4 cols) */}
          <div className="md:col-span-4 flex flex-col">
            <div className="flex items-center justify-between text-[10px] font-mono-code text-neutral-400 mb-1.5 uppercase tracking-wider">
              <span>01 · ENTRADA (INPUT)</span>
              <span className="text-neutral-500">Auto-detect</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`input-${activeStep}`}
                initial={{ opacity: 0, x: -16, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 16, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white border border-neutral-200 rounded-lg p-3 shadow-xs"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded bg-neutral-50 text-neutral-800 border border-neutral-100 shrink-0">
                    <InputIcon className="w-4 h-4 text-neutral-700" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-xs font-bold text-neutral-900 truncate">{current.input.title}</h5>
                    <p className="text-[11px] text-neutral-500 truncate">{current.input.detail}</p>
                    <span className="inline-block text-[9px] font-mono-code text-neutral-400 mt-0.5">
                      {current.input.meta}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Stage 2: PROCESO / IA (3 cols) */}
          <div className="md:col-span-3 flex flex-col items-center justify-center my-1 md:my-0">
            <div className="relative flex flex-col items-center">
              {/* Outer pulsing ring in Rosso Corsa */}
              <motion.div
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.6, 0.1, 0.6],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -inset-2 rounded-full border border-[#E10600]"
              />

              {/* Core Processor */}
              <div className="relative w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center border border-neutral-800 shadow-md">
                <Zap className="w-5 h-5 text-[#E10600] animate-pulse" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border-t border-r border-[#E10600]/80"
                />
              </div>

              <span className="mt-1.5 text-[10px] font-mono-code font-bold text-neutral-900 uppercase tracking-wider">
                PROCESO IA
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={`proc-${activeStep}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-[9px] font-mono-code text-[#E10600] font-semibold"
                >
                  {current.process.speed}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Stage 3: OUTPUT (4 cols) */}
          <div className="md:col-span-4 flex flex-col">
            <div className="flex items-center justify-between text-[10px] font-mono-code text-neutral-400 mb-1.5 uppercase tracking-wider">
              <span>03 · SALIDA (OUTPUT)</span>
              <span className="text-emerald-600 font-semibold">Completado</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`output-${activeStep}`}
                initial={{ opacity: 0, x: 16, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -16, scale: 0.96 }}
                transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white border border-emerald-200/80 rounded-lg p-3 shadow-xs bg-gradient-to-r from-white to-emerald-50/20"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded bg-emerald-50 text-emerald-700 border border-emerald-100 shrink-0">
                    <OutputIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-xs font-bold text-neutral-900 truncate">{current.output.title}</h5>
                    <p className="text-[11px] text-neutral-500 truncate">{current.output.detail}</p>
                    <span className="inline-flex items-center gap-1 text-[9px] font-mono-code text-emerald-700 font-medium mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                      {current.output.tag}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Bottom Progress Controls & Telemetry */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-neutral-500 pt-2.5 border-t border-neutral-200/60 gap-2">
        <div className="flex items-center gap-2">
          {pipelineTasks.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setActiveStep(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                idx === activeStep ? 'w-8 bg-[#E10600]' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
              }`}
              aria-label={`Flujo ${idx + 1}`}
            />
          ))}
          <span className="text-[10px] font-mono-code text-neutral-600 ml-1">
            Loop activo 24/7
          </span>
        </div>

        <div className="flex items-center gap-1 text-[10px] font-mono-code text-neutral-700">
          <span>Informes · Documentos · Correos</span>
          <ArrowRight className="w-3 h-3 text-[#E10600]" />
        </div>
      </div>
    </div>
  );
};
