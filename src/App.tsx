/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SustratoDiagram } from './components/SustratoDiagram';
import { CTASection } from './components/CTASection';
import { ConsultationModal } from './components/ConsultationModal';
import { TeamSection } from './components/TeamSection';

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
        {/* 1. Hero (La propuesta, con red neuronal sutil de fondo) */}
        <HeroSection onOpenConsultation={handleOpenConsultation} />

        {/* 2. Sustrato (La capa, en diagrama) */}
        <SustratoDiagram />

        {/* 3. Quiénes somos (Perfiles) */}
        <TeamSection />

        {/* 4. CTA y Cierre (Conversión sin fricción) */}
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

