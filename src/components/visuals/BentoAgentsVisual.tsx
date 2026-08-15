import React from 'react';
import { motion } from 'motion/react';
import { BlueprintFrame, BlueprintArrowV, useBlueprintMotion } from './blueprint';

/**
 * Agentes en general, no un agente especializado.
 *
 * A propósito sin nombrar qué agente ni sobre qué sistema: dentro de un diagrama
 * cualquier lista se lee como catálogo cerrado. Los ejemplos van en el copy de
 * la sección, donde se leen como ejemplos.
 */
const AGENT_COUNT = 3;

export const BentoAgentsVisual: React.FC = () => {
  const { item } = useBlueprintMotion();

  return (
    <BlueprintFrame
      label="Agentes sobre la capa"
      note="Cada agente hace un trabajo distinto. Todos leen de la misma capa y actúan sobre ella."
    >
      <div className="w-full flex flex-col">
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: AGENT_COUNT }, (_, i) => (
            <motion.div
              key={i}
              variants={item}
              className="border border-[#E10600] bg-white px-2 py-2.5 text-center"
            >
              <span className="block text-[10px] font-mono-code uppercase tracking-[0.14em] text-[#E10600]">
                agente
              </span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: AGENT_COUNT }, (_, i) => (
            <div key={i} className="flex justify-center">
              <BlueprintArrowV bidirectional className="h-14" />
            </div>
          ))}
        </div>

        <motion.div
          variants={item}
          className="border border-neutral-300 bg-neutral-50 px-3 py-3 text-center"
        >
          <span className="block text-[10px] font-mono-code uppercase tracking-[0.16em] text-neutral-500">
            Sustrato
          </span>
          <span className="block text-[11px] leading-snug text-neutral-600 mt-1">
            la información, los criterios y la historia de tu empresa
          </span>
        </motion.div>
      </div>
    </BlueprintFrame>
  );
};
