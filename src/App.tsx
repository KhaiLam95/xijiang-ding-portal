
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import AIService from './pages/services/AIService';
import SoftwareService from './pages/services/SoftwareService';
import ConsultingService from './pages/services/ConsultingService';
import DataService from './pages/services/DataService';
import Solutions from './pages/Solutions';
import DigitalTourismSolution from './pages/solutions/DigitalTourismSolution';
import HealthcareSolution from './pages/solutions/HealthcareSolution';
import EducationSolution from './pages/solutions/EducationSolution';
import SmartCitySolution from './pages/solutions/SmartCitySolution';
import NotFound from './pages/NotFound';
import { LanguageProvider } from './contexts/LanguageContext';
import FloatingQRCode from './components/FloatingQRCode';

import './App.css';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/ai" element={<AIService />} />
          <Route path="/services/software" element={<SoftwareService />} />
          <Route path="/services/consulting" element={<ConsultingService />} />
          <Route path="/services/data" element={<DataService />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/digital-tourism" element={<DigitalTourismSolution />} />
          <Route path="/solutions/healthcare" element={<HealthcareSolution />} />
          <Route path="/solutions/education" element={<EducationSolution />} />
          <Route path="/solutions/smartcity" element={<SmartCitySolution />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingQRCode />
        <Toaster />
      </Router>
    </LanguageProvider>
  );
}

export default App;
