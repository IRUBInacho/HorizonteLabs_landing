# Horizonte Labs — Landing Page

<div align="center">

![Horizonte Labs](https://img.shields.io/badge/Horizonte%20Labs-AI%20Agents-E10600?style=for-the-badge&logoColor=white)
![React](https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript%205.8-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS%20v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite%206-646CFF?style=for-the-badge&logo=vite&logoColor=white)

<p align="center">
  <strong>Integramos agentes de Inteligencia Artificial al trabajo diario de tu empresa sobre una capa de contexto propia.</strong>
</p>

[Demostración](#-despliegue) • [Características](#-características) • [Stack Tecnológico](#-stack-tecnológico) • [Estructura](#-estructura-del-proyecto) • [Instalación](#-instalación-y-desarrollo)

---

</div>

## 📌 Acerca de Horizonte Labs

**Horizonte Labs** es una plataforma y consultora técnica especializada en el despliegue de **agentes de Inteligencia Artificial contextualizados** para operaciones empresariales de alto impacto. 

A diferencia de los chatbots genéricos, nuestras soluciones operan sobre una **Capa de Contexto Propia** que conecta los sistemas, flujos y datos propietarios de cada organización con modelos fundacionales de vanguardia.

---

## ✨ Características y Secciones

- **🧠 Hero con Red Neuronal Interactiva:** Visualización dinámica en canvas con nodos y conexiones generativas en tiempo real.
- **⚡ Diagnóstico Operativo & Ecuación del Valor:** Desglose interactivo del impacto en costes, horas hombre y aceleración operativa.
- **🍱 Bento Grid Modular:** Muestra estructurada de casos de uso (soporte inteligente, análisis predictivo, automatización de flujos y orquestación de agentes).
- **🏗️ Diagrama de Capa de Contexto:** Demostración visual de la arquitectura técnica (Sistemas Legacy $\leftrightarrow$ Capa de Contexto $\leftrightarrow$ Agentes Autónomos).
- **📊 Métricas y Resultados:** Casos de éxito y KPIs clave en formato split 50/50.
- **👥 Equipo Especializado:** Perfiles y roles técnicos detrás de la tecnología de Horizonte Labs.
- **🎯 Modal de Diagnóstico Interactivo:** Formulario guiado de pre-evaluación operativa con micro-animaciones y feedback visual.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología |
| :--- | :--- |
| **Framework UI** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool** | [Vite 6](https://vitejs.dev/) |
| **Estilos** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animaciones** | [Motion](https://motion.dev/) (Framer Motion v12) |
| **Iconografía** | [Lucide React](https://lucide.dev/) |
| **Efectos** | Canvas Confetti |

---

## 📂 Estructura del Proyecto

```plaintext
horizon-labs-landing/
├── public/                  # Assets estáticos y favicon
├── src/
│   ├── components/          # Componentes modulares de la interfaz
│   │   ├── BentoGrid.tsx            # Grid de soluciones y capacidades
│   │   ├── ConsultationModal.tsx    # Modal de diagnóstico y contacto
│   │   ├── ContextLayerDiagram.tsx  # Diagrama de arquitectura contextual
│   │   ├── CTASection.tsx           # Sección de llamada a la acción y footer
│   │   ├── HeroNeuralCanvas.tsx     # Canvas interactivo de nodos neuronales
│   │   ├── HeroSection.tsx          # Portada principal con copy editorial
│   │   ├── Navbar.tsx               # Barra de navegación flotante
│   │   ├── ProblemSection.tsx       # Problema y ecuación de valor
│   │   ├── ResultsSection.tsx       # Métricas de impacto empresarial
│   │   └── TeamSection.tsx          # Presentación del equipo técnico
│   ├── types.ts             # Definiciones TypeScript globales
│   ├── index.css            # Configuración Tailwind y tokens de diseño
│   ├── App.tsx              # Ensamblador principal de la landing
│   └── main.tsx             # Punto de entrada de React
├── index.html               # Plantilla HTML5 con SEO y OpenGraph
├── vite.config.ts           # Configuración de Vite y plugins
└── package.json             # Dependencias y scripts del proyecto
```

---

## 🚀 Instalación y Desarrollo

### Prerrequisitos

- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
- Gestor de paquetes `npm`, `pnpm` o `yarn`

### Pasos para iniciar en local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/horizontelabs/HorizonteLabs_landing.git
   cd HorizonteLabs_landing
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:3000`.

4. **Compilar para producción:**
   ```bash
   npm run build
   ```

5. **Previsualizar la versión de producción:**
   ```bash
   npm run preview
   ```

---

## 🌐 Despliegue

El proyecto está optimizado para despliegue instantáneo en **Vercel** o plataformas compatibles:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/horizontelabs/HorizonteLabs_landing)

---

## 📄 Licencia

Este proyecto se encuentra bajo la licencia **Apache 2.0**.
