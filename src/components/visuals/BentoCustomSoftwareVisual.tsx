import React from 'react';
import { motion } from 'motion/react';
import { Users } from 'lucide-react';
import { BlueprintFrame, BlueprintNode, BlueprintArrowV, useBlueprintMotion } from './blueprint';

/**
 * La aplicación es la protagonista, no su compatibilidad con agentes.
 *
 * Por eso el acento rojo está en la app y el equipo es el usuario principal, con
 * flecha directa. Los agentes llegan a través de la capa: una capacidad que se
 * suma, no el criterio que define lo que se construye.
 */
const views = ['Panel', 'Solicitudes', 'Reportes'];

export const BentoCustomSoftwareVisual: React.FC = () => {
  const { item } = useBlueprintMotion();

  return (
    <BlueprintFrame
      label="Aplicación a medida sobre el sustrato"
      note="Primero resuelve lo que el equipo necesita. Además queda sobre la capa, así que los agentes también pueden usarla."
    >
      <div className="w-full flex flex-col items-center">
        <BlueprintNode icon={Users} title="Equipo" className="px-2.5 py-1.5" />

        <div className="flex items-center gap-1.5">
          <BlueprintArrowV dir="down" className="h-8" />
          <span className="text-[9px] font-mono-code uppercase tracking-[0.1em] text-neutral-400">
            la usa
          </span>
        </div>

        {/* El acento del diagrama: la aplicación */}
        <motion.div
          variants={item}
          className="w-full border border-[#E10600] bg-white px-3 py-3 text-center"
        >
          <span className="block text-[10px] font-mono-code uppercase tracking-[0.16em] text-[#E10600] font-semibold mb-2">
            Aplicación a medida
          </span>
          <div className="flex items-center justify-center gap-1.5 flex-wrap">
            {views.map((view) => (
              <span
                key={view}
                className="border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[10px] text-neutral-600"
              >
                {view}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="flex items-center gap-1.5">
          <BlueprintArrowV bidirectional className="h-9" />
          <span className="text-[9px] font-mono-code uppercase tracking-[0.1em] text-neutral-400">
            además, conectada
          </span>
        </div>

        <motion.div
          variants={item}
          className="w-full border border-neutral-300 bg-neutral-50 px-3 py-2.5 text-center"
        >
          <span className="block text-[10px] font-mono-code uppercase tracking-[0.16em] text-neutral-500">
            Sustrato
          </span>
          <span className="block text-[11px] leading-snug text-neutral-600 mt-1">
            y los agentes que trabajan sobre él
          </span>
        </motion.div>
      </div>
    </BlueprintFrame>
  );
};
