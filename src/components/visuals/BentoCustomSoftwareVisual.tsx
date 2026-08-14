import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { LayoutDashboard, Bot, GitBranch, Settings, Activity, ArrowUpRight, Check, Database } from 'lucide-react';

export const BentoCustomSoftwareVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [chartKey, setChartKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setChartKey((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const barData = [
    { label: 'Lun', height: '45%' },
    { label: 'Mar', height: '68%' },
    { label: 'Mie', height: '52%' },
    { label: 'Jue', height: '88%' },
    { label: 'Vie', height: '74%' },
    { label: 'Sab', height: '95%' },
    { label: 'Dom', height: '100%' },
  ];

  return (
    <div className="relative w-full min-h-[260px] sm:min-h-[290px] bg-[#FBFBFB] rounded-xl border border-neutral-200/90 p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-inner">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ECECEC_1px,transparent_1px),linear-gradient(to_bottom,#ECECEC_1px,transparent_1px)] bg-[size:16px_16px] opacity-60 pointer-events-none" />

      {/* Top Telemetry Header */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono-code text-neutral-400 pb-2 border-b border-neutral-200/60">
        <span className="flex items-center gap-2 text-neutral-800 font-medium">
          <span className="w-2 h-2 rounded-full bg-[#E10600] animate-ping" />
          SOFTWARE AGENT-NATIVE A MEDIDA
        </span>
        <span className="text-[#E10600] font-mono-code text-[10px] font-semibold">
          API BIDIRECCIONAL ACTIVA
        </span>
      </div>

      {/* High-Contrast Luxury Dark SaaS Mockup */}
      <div className="relative z-10 my-auto py-1">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full bg-[#0C0D12] text-neutral-200 rounded-xl border border-neutral-800 shadow-[0_10px_30px_rgba(0,0,0,0.2)] overflow-hidden"
        >
          {/* Mockup Window Chrome Header */}
          <div className="flex items-center justify-between px-3 py-2 bg-[#14161F] border-b border-neutral-800/80">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
              <span className="ml-2 text-[10px] font-mono-code text-neutral-400">app.horizon-labs.internal</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[9px] font-mono-code text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                2-WAY AGENT SYNC
              </span>
            </div>
          </div>

          {/* Mini Dashboard Workspace */}
          <div className="grid grid-cols-12 min-h-[140px]">
            {/* Mini Sidebar (2 cols) */}
            <div className="col-span-2 bg-[#0E0F14] border-r border-neutral-800/80 p-2 flex flex-col items-center justify-between">
              <div className="flex flex-col gap-2 w-full">
                {[
                  { icon: LayoutDashboard, label: 'Dashboard' },
                  { icon: Bot, label: 'Agente' },
                  { icon: GitBranch, label: 'Flujos' },
                  { icon: Settings, label: 'Ajustes' },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  const isActive = idx === activeTab;
                  return (
                    <button
                      key={item.label}
                      onClick={() => setActiveTab(idx)}
                      className={`w-full p-1.5 rounded flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-[#E10600] text-white shadow-xs'
                          : 'text-neutral-500 hover:text-neutral-300 hover:bg-neutral-800/50'
                      }`}
                      title={item.label}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </button>
                  );
                })}
              </div>

              <div className="w-2 h-2 rounded-full bg-[#E10600] animate-pulse mb-1" />
            </div>

            {/* Main Stage Panel (10 cols) */}
            <div className="col-span-10 p-3 flex flex-col justify-between">
              {/* Top 3 KPI metric cards */}
              <div className="grid grid-cols-3 gap-2 mb-2.5">
                <div className="p-1.5 bg-[#14161F] border border-neutral-800/70 rounded">
                  <span className="text-[8px] font-mono-code text-neutral-400 block uppercase">Operaciones IA</span>
                  <span className="text-xs font-mono-code font-bold text-white flex items-center justify-between">
                    14,820 <span className="text-[8px] text-emerald-400">+28%</span>
                  </span>
                </div>
                <div className="p-1.5 bg-[#14161F] border border-neutral-800/70 rounded">
                  <span className="text-[8px] font-mono-code text-neutral-400 block uppercase">Latencia</span>
                  <span className="text-xs font-mono-code font-bold text-white flex items-center justify-between">
                    0.18s <span className="text-[8px] text-[#E10600]">100%</span>
                  </span>
                </div>
                <div className="p-1.5 bg-[#14161F] border border-neutral-800/70 rounded">
                  <span className="text-[8px] font-mono-code text-neutral-400 block uppercase">Contexto</span>
                  <span className="text-xs font-mono-code font-bold text-emerald-400 flex items-center gap-0.5">
                    <Check className="w-2.5 h-2.5" /> Conectado
                  </span>
                </div>
              </div>

              {/* Dynamic Animated Bar Chart Skeleton */}
              <div className="bg-[#14161F]/60 border border-neutral-800/60 rounded p-2 flex items-end justify-between gap-1.5 h-16">
                {barData.map((bar, idx) => (
                  <div key={`${chartKey}-${idx}`} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: bar.height }}
                      transition={{
                        duration: 0.8,
                        delay: idx * 0.08,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={`w-full rounded-xs ${
                        idx === 6
                          ? 'bg-[#E10600] shadow-[0_0_8px_rgba(225,6,0,0.6)]'
                          : idx === 5
                          ? 'bg-white'
                          : 'bg-neutral-700 hover:bg-neutral-600'
                      }`}
                    />
                    <span className="text-[7px] font-mono-code text-neutral-500 leading-none">{bar.label}</span>
                  </div>
                ))}
              </div>

              {/* Agent live sync ticker */}
              <div className="flex items-center justify-between mt-2 text-[9px] font-mono-code text-neutral-400">
                <span className="flex items-center gap-1">
                  <Activity className="w-3 h-3 text-[#E10600]" />
                  <span>Cada herramienta nueva alimenta la capa de contexto</span>
                </span>
                <span className="text-neutral-300 font-semibold flex items-center gap-0.5">
                  Listo <ArrowUpRight className="w-2.5 h-2.5 text-[#E10600]" />
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Telemetry */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-neutral-500 pt-2.5 border-t border-neutral-200/60 gap-2">
        <span className="flex items-center gap-1.5 font-mono-code">
          <Database className="w-3.5 h-3.5 text-neutral-700" />
          <span>Herramientas diseñadas para que los agentes también las usen y nutran</span>
        </span>
        <span className="text-neutral-900 font-mono-code text-[10px] font-medium">
          MODULAR & ESCALABLE
        </span>
      </div>
    </div>
  );
};
