import React from 'react';
import { motion } from 'motion/react';
import { BentoIntegrationVisual } from './visuals/BentoIntegrationVisual';
import { BentoAutomationVisual } from './visuals/BentoAutomationVisual';
import { BentoSpecializedAgentVisual } from './visuals/BentoSpecializedAgentVisual';
import { BentoCustomSoftwareVisual } from './visuals/BentoCustomSoftwareVisual';

const services = [
  {
    id: 'integraciones',
    step: '01',
    title: 'Integraciones',
    subtitle: 'Conectamos tus herramientas de trabajo con los agentes.',
    copy: 'Slack, Drive y correo quedan conectados vía MCP: el equipo puede consultar y delegar tareas al agente sobre sus propios archivos, mensajes y correos.',
    tag: 'Valor inmediato',
    visual: <BentoIntegrationVisual />,
  },
  {
    id: 'automatizaciones',
    step: '02',
    title: 'Automatizaciones',
    subtitle: 'Flujos que resuelven el trabajo repetitivo.',
    copy: 'Identificamos los procesos repetitivos de la operación y los dejamos corriendo con agentes: documentos que se preparan apoyándose en trabajos anteriores, informes que se generan desde los datos, correos que se procesan solos.',
    tag: 'Valor inmediato',
    visual: <BentoAutomationVisual />,
  },
  {
    id: 'agente-especializado',
    step: '03',
    title: 'Agente especializado',
    subtitle: 'Un agente que conoce a fondo la información de tu empresa.',
    copy: 'Implementamos un agente capaz de consultar el conocimiento de la empresa —proyectos, informes, criterios técnicos— y responder sobre él con precisión.',
    tag: 'Valor inmediato',
    visual: <BentoSpecializedAgentVisual />,
  },
  {
    id: 'desarrollo-a-medida',
    step: '04',
    title: 'Desarrollo de software a medida',
    subtitle: 'Herramientas diseñadas para trabajar con agentes.',
    copy: 'Desarrollamos las aplicaciones que la operación necesite, diseñadas para integrarse con agentes y con la capa de contexto: cada herramienta nueva es algo que los agentes también pueden usar y alimentar.',
    tag: 'Valor inmediato',
    visual: <BentoCustomSoftwareVisual />,
  },
];

export const BentoGrid: React.FC = () => {
  return (
    <section id="servicio" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-[#FAFAFA] border-t border-neutral-200/70">
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[12px] font-mono-code uppercase tracking-[0.24em] text-[#E10600] font-semibold mb-3"
          >
            El servicio
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight mb-6"
          >
            Dejamos los agentes funcionando dentro de tu operación.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal"
          >
            Agentes que conocen tu operación: trabajan con la información, los criterios y la historia de tu empresa. Cada etapa entrega algo utilizable desde el primer día y va construyendo la capa de contexto que lo hace posible.
          </motion.p>
        </div>

        {/* Vertical Stack: One Full-Section Block Per Service */}
        <div className="space-y-12 sm:space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-white rounded-2xl p-8 sm:p-12 lg:p-14 border border-neutral-200 hover:border-[#E10600] transition-colors duration-500 shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                {/* Left Column: Text & Hierarchy (7 cols) */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  {/* Top Metadata */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-mono-code uppercase tracking-widest text-[#E10600] font-semibold">
                      {service.step} · {service.title}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono-code font-medium bg-neutral-100 text-neutral-800 border border-neutral-200 group-hover:border-[#E10600]/30 group-hover:bg-[#E10600]/5 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
                      {service.tag}
                    </span>
                  </div>

                  {/* Subtitle / Headline */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4 leading-tight">
                    {service.subtitle}
                  </h3>

                  {/* Copy Description */}
                  <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
                    {service.copy}
                  </p>
                </div>

                {/* Right Column: Visual Animation Component (6 cols) */}
                <div className="lg:col-span-6 w-full">
                  {service.visual}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

