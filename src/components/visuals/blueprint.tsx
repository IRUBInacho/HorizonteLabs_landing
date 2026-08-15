import React from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import type { LucideIcon } from 'lucide-react';

/**
 * Primitivas compartidas por las visuals de tipo diagrama.
 *
 * Reglas del lenguaje gráfico:
 * - Trazo hairline de 1px, esquinas rectas, monocromo.
 * - El acento rojo aparece UNA sola vez por diagrama: marca lo que esa card explica.
 * - Sin glow, sin blur, sin animación en loop. Solo la entrada, una vez.
 */

const ACCENT = '#E10600';
const ARROW_NEUTRAL = '#A3A3A3';

/** Variantes de entrada. Con prefers-reduced-motion el diagrama aparece sin desplazamiento. */
export const useBlueprintMotion = () => {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.06 } },
  };

  const item: Variants = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 6 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
      };

  return { container, item };
};

interface BlueprintFrameProps {
  /** Rótulo del diagrama, arriba a la izquierda. Describe qué se está mostrando. */
  label: string;
  /** Nota al pie. Una frase, sin métricas. */
  note?: string;
  children: React.ReactNode;
}

export const BlueprintFrame: React.FC<BlueprintFrameProps> = ({ label, note, children }) => {
  const { container } = useBlueprintMotion();

  return (
    <div className="relative w-full min-h-[260px] sm:min-h-[300px] bg-white rounded-xl border border-neutral-200/90 p-5 sm:p-6 flex flex-col overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,#F2F2F2_1px,transparent_1px),linear-gradient(to_bottom,#F2F2F2_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"
      />

      <span className="relative z-10 text-[10px] font-mono-code uppercase tracking-[0.18em] text-neutral-400">
        {label}
      </span>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
        className="relative z-10 flex-1 flex items-center py-5"
      >
        {children}
      </motion.div>

      {note && (
        <p className="relative z-10 text-[10px] sm:text-[11px] font-mono-code text-neutral-500 leading-snug border-t border-neutral-200/70 pt-2.5">
          {note}
        </p>
      )}
    </div>
  );
};

interface BlueprintNodeProps {
  icon?: LucideIcon;
  title: string;
  meta?: string;
  /** Marca este nodo como el acento del diagrama. */
  accent?: boolean;
  className?: string;
}

export const BlueprintNode: React.FC<BlueprintNodeProps> = ({
  icon: Icon,
  title,
  meta,
  accent = false,
  className = '',
}) => {
  const { item } = useBlueprintMotion();

  return (
    <motion.div
      variants={item}
      className={`flex items-center gap-2 bg-white border px-2.5 py-2 min-w-0 ${
        accent ? 'border-[#E10600]' : 'border-neutral-300'
      } ${className}`}
    >
      {Icon && (
        <Icon
          className={`w-3.5 h-3.5 shrink-0 ${accent ? 'text-[#E10600]' : 'text-neutral-500'}`}
          strokeWidth={1.5}
        />
      )}
      <div className="min-w-0">
        <span className="block text-[11px] leading-tight font-medium text-neutral-900">{title}</span>
        {meta && (
          <span className="block text-[9px] font-mono-code leading-tight text-neutral-400 mt-0.5">
            {meta}
          </span>
        )}
      </div>
    </motion.div>
  );
};

/** Punta de flecha de tamaño fijo, para que nunca se deforme al escalar el contenedor. */
const Head: React.FC<{ accent: boolean; dir: 'right' | 'left' | 'up' | 'down' }> = ({
  accent,
  dir,
}) => {
  const fill = accent ? ACCENT : ARROW_NEUTRAL;
  const horizontal = dir === 'right' || dir === 'left';

  const path = {
    right: 'M0 0 L5 3.5 L0 7 Z',
    left: 'M5 0 L0 3.5 L5 7 Z',
    down: 'M0 0 L3.5 5 L7 0 Z',
    up: 'M0 5 L3.5 0 L7 5 Z',
  }[dir];

  return (
    <svg
      width={horizontal ? 5 : 7}
      height={horizontal ? 7 : 5}
      viewBox={horizontal ? '0 0 5 7' : '0 0 7 5'}
      aria-hidden
      className="shrink-0"
    >
      <path d={path} fill={fill} />
    </svg>
  );
};

interface ArrowProps {
  label?: string;
  accent?: boolean;
  /** Punta en ambos extremos: relación de ida y vuelta. */
  bidirectional?: boolean;
  className?: string;
}

/** Conector horizontal. Ocupa el espacio disponible entre dos nodos. */
export const BlueprintArrowH: React.FC<ArrowProps> = ({
  label,
  accent = false,
  bidirectional = false,
  className = '',
}) => {
  const { item } = useBlueprintMotion();

  return (
    <motion.div
      variants={item}
      className={`relative flex-1 min-w-[20px] flex items-center ${className}`}
    >
      {bidirectional && <Head accent={accent} dir="left" />}
      <span className={`flex-1 h-px ${accent ? 'bg-[#E10600]' : 'bg-neutral-300'}`} />
      <Head accent={accent} dir="right" />
      {label && (
        <span
          className={`absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] font-mono-code uppercase tracking-[0.1em] ${
            accent ? 'text-[#E10600]' : 'text-neutral-400'
          }`}
        >
          {label}
        </span>
      )}
    </motion.div>
  );
};

interface ArrowVProps {
  accent?: boolean;
  /** Hacia dónde apunta. Se ignora si es bidireccional. */
  dir?: 'down' | 'up';
  /** Punta en ambos extremos: relación de ida y vuelta. */
  bidirectional?: boolean;
  className?: string;
}

/** Conector vertical. La altura la define el consumidor. */
export const BlueprintArrowV: React.FC<ArrowVProps> = ({
  accent = false,
  dir = 'down',
  bidirectional = false,
  className = '',
}) => {
  const { item } = useBlueprintMotion();

  return (
    <motion.div variants={item} className={`flex flex-col items-center ${className}`}>
      {(bidirectional || dir === 'up') && <Head accent={accent} dir="up" />}
      <span className={`w-px flex-1 min-h-[12px] ${accent ? 'bg-[#E10600]' : 'bg-neutral-300'}`} />
      {(bidirectional || dir === 'down') && <Head accent={accent} dir="down" />}
    </motion.div>
  );
};

/** Rótulo de columna, en mayúsculas y mono. */
export const BlueprintColumnLabel: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <span
    className={`block text-[9px] font-mono-code uppercase tracking-[0.16em] text-neutral-400 ${className}`}
  >
    {children}
  </span>
);
