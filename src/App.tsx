import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Booking from "./pages/Booking";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TechnicianLogin from "./pages/TechnicianLogin";
import DashboardClient from "./pages/DashboardClient";
import DashboardTechnician from "./pages/DashboardTechnician";
import DashboardAdmin from "./pages/DashboardAdmin";
import NotFound from "./pages/NotFound";
import SiteHeader from "@/components/layout/SiteHeader";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/technician-login" element={<TechnicianLogin />} />
            <Route path="/dashboard" element={<DashboardClient />} />
            <Route path="/technician" element={<DashboardTechnician />} />
            <Route path="/admin" element={<DashboardAdmin />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
