import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import React, { Suspense, lazy } from "react";
import Index from "./pages/Index";
import SiteHeader from "@/components/layout/SiteHeader";

const Booking = lazy(() => import("./pages/Booking"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const TechnicianLogin = lazy(() => import("./pages/TechnicianLogin"));
const DashboardClient = lazy(() => import("./pages/DashboardClient"));
const DashboardTechnician = lazy(() => import("./pages/DashboardTechnician"));
const DashboardAdmin = lazy(() => import("./pages/DashboardAdmin"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Gallery = lazy(() => import("./pages/Gallery"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SiteHeader />
          <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/technician-login" element={<TechnicianLogin />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/dashboard" element={<DashboardClient />} />
              <Route path="/technician" element={<DashboardTechnician />} />
              <Route path="/admin" element={<DashboardAdmin />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
