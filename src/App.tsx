
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Types from "./pages/services/Types";
import Pricing from "./pages/services/Pricing";
import Portfolio from "./pages/services/Portfolio";
import Reviews from "./pages/services/Reviews";
import Photographer from "./pages/courses/Photographer";
import Posing from "./pages/courses/Posing";
import Workshops from "./pages/courses/Workshops";
import CoursesReviews from "./pages/courses/Reviews";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Types />} />
          <Route path="/services/types" element={<Types />} />
          <Route path="/services/pricing" element={<Pricing />} />
          <Route path="/services/portfolio" element={<Portfolio />} />
          <Route path="/services/reviews" element={<Reviews />} />
          <Route path="/courses" element={<Photographer />} />
          <Route path="/courses/photographer" element={<Photographer />} />
          <Route path="/courses/posing" element={<Posing />} />
          <Route path="/courses/workshops" element={<Workshops />} />
          <Route path="/courses/reviews" element={<CoursesReviews />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;