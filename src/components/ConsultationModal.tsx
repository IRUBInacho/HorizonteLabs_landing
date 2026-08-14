import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CheckCircle2, Building, Mail, User, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    tools: [] as string[],
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const availableTools = ['Slack', 'Google Drive / Workspace', 'Correo corporativo', 'CRM / ERP', 'Bases de datos SQL'];

  const toggleTool = (tool: string) => {
    setFormData((prev) => ({
      ...prev,
      tools: prev.tools.includes(tool)
        ? prev.tools.filter((t) => t !== tool)
        : [...prev.tools, tool],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#E10600', '#111111', '#B0B0B0'],
      });
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      tools: [],
      notes: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-white rounded-2xl border border-neutral-200 shadow-2xl p-6 sm:p-10 z-10 overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-neutral-100 text-[11px] font-mono-code text-neutral-600 mb-3 border border-neutral-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
                    PRIMER PASO · DIAGNÓSTICO OPERACIONAL
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">
                    Revisemos juntos tu operación
                  </h3>
                  <p className="text-sm text-neutral-600 mt-1">
                    Nos reunimos a evaluar tus flujos de trabajo actuales y definir la primera automatización con agentes.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono-code uppercase tracking-wider text-neutral-600 mb-1.5">
                      Nombre y Apellido *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Martín Larraín"
                        className="w-full pl-10 pr-4 py-2.5 bg-[#FBFBFB] border border-neutral-200 rounded-lg text-sm text-neutral-900 focus:outline-none focus:border-[#E10600] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-code uppercase tracking-wider text-neutral-600 mb-1.5">
                        Correo Corporativo *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="martin@empresa.com"
                          className="w-full pl-10 pr-4 py-2.5 bg-[#FBFBFB] border border-neutral-200 rounded-lg text-sm text-neutral-900 focus:outline-none focus:border-[#E10600] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono-code uppercase tracking-wider text-neutral-600 mb-1.5">
                        Empresa *
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Nombre de la empresa"
                          className="w-full pl-10 pr-4 py-2.5 bg-[#FBFBFB] border border-neutral-200 rounded-lg text-sm text-neutral-900 focus:outline-none focus:border-[#E10600] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code uppercase tracking-wider text-neutral-600 mb-1.5">
                      Herramientas principales en tu operación
                    </label>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {availableTools.map((t) => {
                        const isSelected = formData.tools.includes(t);
                        return (
                          <button
                            type="button"
                            key={t}
                            onClick={() => toggleTool(t)}
                            className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                              isSelected
                                ? 'bg-neutral-900 text-white border border-neutral-900'
                                : 'bg-[#F5F5F5] text-neutral-700 hover:bg-neutral-200 border border-neutral-200/80'
                            }`}
                          >
                            {isSelected && '✓ '}
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code uppercase tracking-wider text-neutral-600 mb-1.5">
                      ¿Qué proceso repetitivo te gustaría resolver primero? (Opcional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Ej. Preparación de informes semanales, búsqueda de documentos técnicos, respuestas de soporte..."
                      className="w-full px-4 py-2 bg-[#FBFBFB] border border-neutral-200 rounded-lg text-sm text-neutral-900 focus:outline-none focus:border-[#E10600] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#E10600] hover:bg-[#c90500] text-white text-sm font-semibold tracking-wide rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer disabled:opacity-70"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2 font-mono-code text-xs">
                          <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                          COORDINANDO SESIÓN...
                        </span>
                      ) : (
                        <>
                          <span>Agendar revisión de operación</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-neutral-50 border border-neutral-200 rounded-full flex items-center justify-center mx-auto mb-5 text-[#E10600]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-neutral-900 mb-2">
                  ¡Solicitud confirmada!
                </h4>
                <p className="text-neutral-600 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                  Gracias <strong className="text-black">{formData.name}</strong>. Nos pondremos en contacto a <strong className="text-black">{formData.email}</strong> en menos de 24 horas para fijar la sesión y revisar la operación de <strong className="text-black">{formData.company}</strong>.
                </p>
                <div className="p-4 bg-[#F9F9F9] border border-neutral-200 rounded-lg text-left max-w-sm mx-auto mb-6 text-xs text-neutral-600 font-mono-code space-y-1">
                  <div className="flex items-center gap-1.5 text-black font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-[#E10600]" />
                    <span>Preparación sustrato:</span>
                  </div>
                  <div>• Análisis preliminar de integraciones</div>
                  <div>• Propuesta de primera automatización rápida</div>
                </div>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-neutral-900 text-white rounded-md text-xs font-semibold uppercase tracking-wider hover:bg-black transition-colors"
                >
                  Entendido
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
