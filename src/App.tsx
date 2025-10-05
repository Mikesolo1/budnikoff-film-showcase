import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Scripts from "./pages/Scripts";
import Production from "./pages/Production";
import ProductPlacement from "./pages/ProductPlacement";
import Events from "./pages/Events";
import Contacts from "./pages/Contacts";
import Casting from "./pages/Casting";
import Team from "./pages/Team";
import About from "./pages/About";
import Cases from "./pages/Cases";
import Kremlin from "./pages/Kremlin";
import NotFound from "./pages/NotFound";
// English pages
import IndexEn from "./pages/en/Index";
import ScriptsEn from "./pages/en/Scripts";
import ProductionEn from "./pages/en/Production";
import ProductPlacementEn from "./pages/en/ProductPlacement";
import EventsEn from "./pages/en/Events";
import ContactsEn from "./pages/en/Contacts";
import CastingEn from "./pages/en/Casting";
import TeamEn from "./pages/en/Team";
import AboutEn from "./pages/en/About";
import CasesEn from "./pages/en/Cases";
import KremlinEn from "./pages/en/Kremlin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Russian pages */}
            <Route path="/" element={<Index />} />
            <Route path="/scripts" element={<Scripts />} />
            <Route path="/production" element={<Production />} />
            <Route path="/product-placement" element={<ProductPlacement />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/casting" element={<Casting />} />
            <Route path="/team" element={<Team />} />
            <Route path="/about" element={<About />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/kremlin" element={<Kremlin />} />
            
            {/* English pages */}
            <Route path="/en" element={<IndexEn />} />
            <Route path="/en/scripts" element={<ScriptsEn />} />
            <Route path="/en/production" element={<ProductionEn />} />
            <Route path="/en/product-placement" element={<ProductPlacementEn />} />
            <Route path="/en/events" element={<EventsEn />} />
            <Route path="/en/contacts" element={<ContactsEn />} />
            <Route path="/en/casting" element={<CastingEn />} />
            <Route path="/en/team" element={<TeamEn />} />
            <Route path="/en/about" element={<AboutEn />} />
            <Route path="/en/cases" element={<CasesEn />} />
            <Route path="/en/kremlin" element={<KremlinEn />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
