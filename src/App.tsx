/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { BentoGrid } from './components/BentoGrid';
import { ContextLayerDiagram } from './components/ContextLayerDiagram';
import { ResultsSection } from './components/ResultsSection';
import { CTASection } from './components/CTASection';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-[#E10600] selection:text-white relative">
      {/* Editorial Luxury Header */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section (La Primera Vista con Red Neuronal Sutil) */}
        <HeroSection onOpenConsultation={handleOpenConsultation} />

        {/* 1.5. El Problema (Dolores que resolvemos + Ecuación del Valor) */}
        <ProblemSection />

        {/* 2. El Servicio (Bento Grid con micro-animaciones) */}
        <BentoGrid />

        {/* 3. El Diferenciador (La Capa de Contexto - Split Banner Diagram) */}
        <ContextLayerDiagram />

        {/* 4. Resultados (Split Layout 50/50) */}
        <ResultsSection />

        {/* 5. CTA y Cierre (Conversión sin fricción) */}
        <CTASection onOpenConsultation={handleOpenConsultation} />
      </main>

      {/* Operational Diagnostic / Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
      />
    </div>
  );
}

