import React from 'react';
import { motion } from 'motion/react';
import { BlueprintFrame, BlueprintArrowV, useBlueprintMotion } from './blueprint';

/**
 * La anatomía del flujo, no un catálogo de automatizaciones.
 *
 * Tres flujos concretos hacían parecer que todo termina en un documento. Acá los
 * ejemplos son categorías: lo que dispara y lo que queda hecho cambian con la
 * operación, el flujo es el mismo. "Se documenta" es uno de cinco verbos, no el único.
 *
 * Cada ejemplo es su propio span para que nunca se parta a mitad de frase al envolver.
 */
const stages = [
  {
    id: 'disparador',
    label: 'Disparador',
    body: 'Algo que ya pasa en la operación',
    examples: ['un correo', 'un ticket', 'un dato nuevo', 'un plazo'],
  },
  {
    id: 'criterio',
    label: 'Criterio',
    body: 'Cómo se resuelve eso en esta empresa',
    examples: ['casos anteriores', 'decisiones del equipo'],
  },
  {
    id: 'resultado',
    label: 'Resultado',
    body: 'El trabajo queda hecho',
    examples: ['se responde', 'se deriva', 'se actualiza', 'se registra', 'se documenta'],
  },
];

export const BentoAutomationVisual: React.FC = () => {
  const { item } = useBlueprintMotion();

  return (
    <BlueprintFrame
      label="Anatomía de un flujo"
      note="Cambia lo que dispara y lo que queda hecho según la operación. El flujo es el mismo."
    >
      <div className="w-full flex flex-col items-stretch">
        {stages.map((stage, i) => (
          <React.Fragment key={stage.id}>
            {i > 0 && (
              <div className="flex justify-center py-1">
                <BlueprintArrowV accent dir="down" className="h-6" />
              </div>
            )}

            <motion.div variants={item} className="flex flex-col items-center">
              <div className="w-full border border-neutral-300 bg-white px-3 py-2.5 text-center">
                <span className="block text-[10px] font-mono-code uppercase tracking-[0.16em] text-neutral-500">
                  {stage.label}
                </span>
                <span className="block text-[11px] leading-snug text-neutral-900 font-medium mt-1">
                  {stage.body}
                </span>
              </div>

              {/* Sin separadores: al envolver dejaban un punto colgando al inicio de la línea. */}
              <span className="flex flex-wrap justify-center gap-x-3 gap-y-0.5 text-[9px] font-mono-code leading-snug text-neutral-400 mt-1.5 px-1">
                {stage.examples.map((example) => (
                  <span key={example} className="whitespace-nowrap">
                    {example}
                  </span>
                ))}
              </span>
            </motion.div>
          </React.Fragment>
        ))}
      </div>
    </BlueprintFrame>
  );
};
