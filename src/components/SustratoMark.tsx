import React from 'react';

interface SustratoMarkProps {
  /** Prefijo de los ids de <defs>. Obligatorio y distinto por instancia: dos
   *  marcas en el mismo documento con ids repetidos producen HTML inválido. */
  idPrefix: string;
  className?: string;
}

/**
 * Isotipo de sustrato: el agente irradia desde arriba, un haz cónico lo conecta
 * con la capa y la capa devuelve el reflejo. Ninguna forma tiene contorno; se
 * definen por gradientes radiales y no por brillos blancos, que sobre el fondo
 * blanco de la landing serían invisibles.
 *
 * Va inline y no como <img> para que las dos capas inferiores hereden
 * currentColor y sigan el color del texto que las rodea.
 */
export const SustratoMark: React.FC<SustratoMarkProps> = ({ idPrefix, className }) => {
  const id = (name: string) => `${idPrefix}-${name}`;

  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <defs>
        <radialGradient id={id('halo')}>
          <stop offset="0" stopColor="#FF2A1E" stopOpacity="0.42" />
          <stop offset="0.5" stopColor="#E10600" stopOpacity="0.15" />
          <stop offset="1" stopColor="#E10600" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={id('core')} cx="0.38" cy="0.32" r="0.78">
          <stop offset="0" stopColor="#FF4A3D" />
          <stop offset="1" stopColor="#C10500" />
        </radialGradient>
        <linearGradient id={id('beam')} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#E10600" stopOpacity="0" />
          <stop offset="0.5" stopColor="#C10500" stopOpacity="1" />
          <stop offset="1" stopColor="#E10600" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={id('spill')} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#E10600" stopOpacity="0" />
          <stop offset="0.5" stopColor="#FF2A1E" stopOpacity="0.38" />
          <stop offset="1" stopColor="#E10600" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={id('cone')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E10600" stopOpacity="0.42" />
          <stop offset="1" stopColor="#E10600" stopOpacity="0.06" />
        </linearGradient>
      </defs>

      <circle cx="24" cy="14" r="16" fill={`url(#${id('halo')})`} />
      <path d="M20.5,19 L27.5,19 L31,32.6 L17,32.6 Z" fill={`url(#${id('cone')})`} />
      <ellipse cx="24" cy="33.6" rx="23" ry="5.4" fill={`url(#${id('spill')})`} />
      <rect x="2" y="32" width="44" height="3.4" rx="1.7" fill={`url(#${id('beam')})`} />
      <rect x="6" y="38.2" width="36" height="1.8" rx="0.9" fill="currentColor" opacity="0.24" />
      <rect x="11" y="42.2" width="26" height="1.4" rx="0.7" fill="currentColor" opacity="0.12" />
      <circle cx="24" cy="14" r="8" fill={`url(#${id('core')})`} />
    </svg>
  );
};
