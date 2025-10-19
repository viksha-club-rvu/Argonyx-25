import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Argonyx24 from "./pages/Argonyx24";
import Winners24 from "./pages/Winners24";
import Winners25 from "./pages/Winners25";
import Judges25 from "./pages/Judges25";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollRestoration from 'react-router-dom';

const queryClient = new QueryClient();

const rawBase =
  ((import.meta.env as any).VITE_BASE_URL as string | undefined) ??
  (import.meta.env.BASE_URL as string | undefined) ??
  "/";
const basename =
  rawBase === "/" || rawBase === ""
    ? "/"
    : // remove trailing slash 
      rawBase.replace(/\/$/, "");

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/winners25" element={<Winners25 />} />
            <Route path="/judges25" element={<Judges25 />} />
            <Route path="/argonyx24" element={<Argonyx24 />} />
            <Route path="/winners24" element={<Winners24 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
