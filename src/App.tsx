import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Branches from "./pages/Branches";
import Timeline from "./pages/Timeline";
import Rulebook from "./pages/Rulebook";
import Sponsors from "./pages/Sponsors";
import Gallery from "./pages/Gallery";
import Developers from "./pages/Developers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/rulebook" element={<Rulebook />} />
              <Route path="/branches" element={<Branches />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/developers" element={<Developers />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
