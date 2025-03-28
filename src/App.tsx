
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Service detail pages
import AIService from "./pages/services/AIService";
import SoftwareService from "./pages/services/SoftwareService";
import ConsultingService from "./pages/services/ConsultingService";
import DataService from "./pages/services/DataService";

// Solution detail pages
import FintechSolution from "./pages/solutions/FintechSolution";
import HealthcareSolution from "./pages/solutions/HealthcareSolution";
import EducationSolution from "./pages/solutions/EducationSolution";
import SmartCitySolution from "./pages/solutions/SmartCitySolution";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Service detail routes */}
            <Route path="/services/ai" element={<AIService />} />
            <Route path="/services/software" element={<SoftwareService />} />
            <Route path="/services/consulting" element={<ConsultingService />} />
            <Route path="/services/data" element={<DataService />} />
            
            {/* Solution detail routes */}
            <Route path="/solutions/fintech" element={<FintechSolution />} />
            <Route path="/solutions/healthcare" element={<HealthcareSolution />} />
            <Route path="/solutions/education" element={<EducationSolution />} />
            <Route path="/solutions/smartcity" element={<SmartCitySolution />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
