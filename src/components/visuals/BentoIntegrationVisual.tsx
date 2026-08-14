import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, HardDrive, Mail, Cpu, ArrowRight, Check } from 'lucide-react';

export const BentoIntegrationVisual: React.FC = () => {
  return (
    <div className="relative w-full min-h-[260px] sm:min-h-[290px] bg-[#FBFBFB] rounded-xl border border-neutral-200/90 p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-inner">
      {/* Precision background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#EFEFEF_1px,transparent_1px),linear-gradient(to_bottom,#EFEFEF_1px,transparent_1px)] bg-[size:18px_18px] opacity-60 pointer-events-none" />

      {/* Top Telemetry Header */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono-code text-neutral-400 pb-2 border-b border-neutral-200/60">
        <span className="flex items-center gap-2 text-neutral-800 font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E10600] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E10600]" />
          </span>
          CONECTOR MCP MULTICANAL
        </span>
        <span className="text-neutral-500 font-mono-code text-[10px]">
          LATENCIA: &lt; 14ms · 100% CIFRADO
        </span>
      </div>

      {/* Center Animated Connection Stage */}
      <div className="relative z-10 flex items-center justify-between my-auto px-1 sm:px-3">
        {/* Source Tools Column */}
        <div className="flex flex-col gap-2.5 z-20">
          {[
            { name: 'Google Drive', icon: HardDrive, detail: 'Archivos & Docs' },
            { name: 'Slack', icon: MessageSquare, detail: 'Mensajes & Canales' },
            { name: 'Correo', icon: Mail, detail: 'Inbox Corporativo' },
          ].map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.6 }}
              className="flex items-center gap-2.5 px-3 py-2 bg-white border border-neutral-200/90 rounded-lg text-xs text-neutral-900 shadow-xs hover:border-[#E10600]/60 transition-colors"
            >
              <div className="p-1 rounded bg-neutral-50 border border-neutral-100 text-neutral-700">
                <tool.icon className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-[11px] leading-tight">{tool.name}</span>
                <span className="text-[9px] text-neutral-400 font-mono-code leading-none">{tool.detail}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Animated Beam SVG Canvas */}
        <div className="flex-1 relative flex items-center justify-center px-3 sm:px-6">
          <svg className="w-full h-32 overflow-visible" viewBox="0 0 140 80">
            <defs>
              <linearGradient id="beamGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E5E7EB" />
                <stop offset="50%" stopColor="#E10600" />
                <stop offset="100%" stopColor="#E10600" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Base hairline guide paths */}
            <path d="M 0 15 C 70 15, 70 40, 140 40" fill="none" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M 0 40 L 140 40" fill="none" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M 0 65 C 70 65, 70 40, 140 40" fill="none" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Glowing active pulse paths */}
            <motion.path
              d="M 0 15 C 70 15, 70 40, 140 40"
              fill="none"
              stroke="#E10600"
              strokeWidth="2"
              strokeDasharray="20 120"
              animate={{
                strokeDashoffset: [-140, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <motion.path
              d="M 0 40 L 140 40"
              fill="none"
              stroke="#E10600"
              strokeWidth="2"
              strokeDasharray="20 120"
              animate={{
                strokeDashoffset: [-140, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                delay: 0.4,
                ease: 'linear',
              }}
            />
            <motion.path
              d="M 0 65 C 70 65, 70 40, 140 40"
              fill="none"
              stroke="#E10600"
              strokeWidth="2"
              strokeDasharray="20 120"
              animate={{
                strokeDashoffset: [-140, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: 0.9,
                ease: 'linear',
              }}
            />

            {/* Animated Energy Orbs */}
            <motion.circle
              r="3.5"
              fill="#E10600"
              filter="url(#glow)"
              animate={{
                offsetDistance: ['0%', '100%'],
                opacity: [0, 1, 1, 0],
              }}
              style={{
                offsetPath: `path('M 0 15 C 70 15, 70 40, 140 40')`,
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.circle
              r="3.5"
              fill="#E10600"
              filter="url(#glow)"
              animate={{
                offsetDistance: ['0%', '100%'],
                opacity: [0, 1, 1, 0],
              }}
              style={{
                offsetPath: `path('M 0 40 L 140 40')`,
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                delay: 0.4,
                ease: 'easeInOut',
              }}
            />
            <motion.circle
              r="3.5"
              fill="#E10600"
              filter="url(#glow)"
              animate={{
                offsetDistance: ['0%', '100%'],
                opacity: [0, 1, 1, 0],
              }}
              style={{
                offsetPath: `path('M 0 65 C 70 65, 70 40, 140 40')`,
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: 0.9,
                ease: 'easeInOut',
              }}
            />
          </svg>
        </div>

        {/* Central Hub: MCP Agent Destination */}
        <div className="flex flex-col items-center z-20">
          <div className="relative p-3.5 sm:p-4 bg-neutral-950 text-white rounded-xl shadow-lg border border-neutral-800 flex items-center justify-center">
            {/* Outer pulsating radar ring */}
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 rounded-xl border border-[#E10600]"
            />
            <Cpu className="w-6 h-6 text-white relative z-10" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E10600] opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E10600]" />
            </span>
          </div>
          <span className="mt-2 text-[10px] font-mono-code font-bold tracking-widest text-neutral-900 uppercase">
            NODO AGENTE
          </span>
          <span className="text-[9px] font-mono-code text-neutral-400">Contexto Unificado</span>
        </div>
      </div>

      {/* Bottom Live Activity Prompt Banner */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-neutral-600 pt-2.5 border-t border-neutral-200/60 gap-2">
        <span className="flex items-center gap-1.5 font-mono-code">
          <Check className="w-3.5 h-3.5 text-emerald-600" />
          <span>Búsqueda semántica activa en archivos, mensajes y correos</span>
        </span>
        <span className="text-black font-mono-code font-medium flex items-center gap-1 text-[10px] bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">
          PROTOCOLO MCP <ArrowRight className="w-3 h-3 text-[#E10600]" />
        </span>
      </div>
    </div>
  );
};
