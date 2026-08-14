import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, ArrowRight } from 'lucide-react';

const teamMembers = [
  {
    id: 'francisco',
    name: 'Francisco Andrades Martínez',
    role: 'Senior AI & ML Engineer',
    expertise: ['AI', 'Machine Learning', 'Data Science', 'Autonomous Agents'],
    bio: 'Ingeniero Civil en Informática especializado en inteligencia artificial aplicada y agentes autónomos. Lidera el desarrollo de modelos predictivos, sistemas de razonamiento automatizado y arquitecturas de datos en producción. Forma a ingenieros de software senior de Latinoamérica en ML engineering y sistemas agénticos, y cuenta con investigación publicada en el área. Experiencia en startups y en programas de aceleración e inmersión hacia US.',
    linkedin: 'https://www.linkedin.com/in/francisco-andrades-mart%C3%ADnez-29b6101ab/',
    image: '/team/francisco.jpeg',
    // Retrato cuadrado en contenedor panorámico: subir el encuadre evita cortar el pelo.
    imagePosition: 'center 25%'
  },
  {
    id: 'ignacio',
    name: 'Ignacio Rubí Pérez',
    role: 'Full-Stack Developer | Automation & AI',
    expertise: ['Full-Stack', 'Automation', 'AI', 'System Integrations'],
    bio: 'Ingeniero en Ejecución Informática especializado en orquestar soluciones de software robustas. Experto en unir aplicaciones empresariales con motores de inteligencia artificial y automatización de flujos de trabajo, garantizando sistemas integrados, escalables y altamente eficientes.',
    linkedin: 'https://www.linkedin.com/in/ignacio-rubi/',
    image: '/team/fotoignacio.jpg'
  }
];

export const TeamSection: React.FC = () => {
  return (
    <section id="equipo" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-white border-t border-neutral-200/60 relative overflow-hidden">
      
      {/* Editorial Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#F5F5F5_1px,transparent_1px),linear-gradient(to_bottom,#F5F5F5_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] animate-pulse" />
            <span className="text-xs font-mono-code uppercase tracking-[0.2em] text-neutral-500 font-medium">
              Quiénes somos
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] max-w-4xl leading-[1.1]"
          >
            Las personas detrás de <br className="hidden sm:block" />
            <span className="text-neutral-400">sustrato.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed max-w-2xl"
          >
            Combinamos ingeniería de software pura con inteligencia artificial avanzada para construir soluciones tecnológicas reales, diseñadas para escalar tu operación.
          </motion.p>
        </div>

        {/* Team: ambos perfiles con el mismo peso */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: 0.15 * index, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col"
            >
              {/* Portrait */}
              <div className="relative w-full max-w-sm aspect-[4/3] bg-neutral-100 rounded-2xl overflow-hidden mb-8 border border-neutral-200/70 shadow-sm group-hover:shadow-lg transition-shadow duration-500">
                <img
                  src={member.image}
                  alt={member.name}
                  style={{ objectPosition: member.imagePosition }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
              </div>

              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-2 tracking-tight leading-tight group-hover:text-[#E10600] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-[13px] font-mono-code text-neutral-500 uppercase tracking-widest font-medium">
                  {member.role}
                </p>
              </div>

              <p className="text-base text-neutral-600 leading-relaxed mb-8 flex-grow">
                {member.bio}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-neutral-200/80 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-neutral-50 border border-neutral-200 rounded text-[10px] font-mono-code font-medium text-neutral-600 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-[#E10600] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
