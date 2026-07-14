// ─────────────────────────────────────────────
//  App.tsx — Root application with MVC structure
// ─────────────────────────────────────────────

import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// ── Auth layer ─────────────────────────────────────────────────────────
import { AuthProvider, ProtectedRoute } from '@/auth';

// ── Global store ───────────────────────────────────────────────────────
import { CMSProvider } from '@/store';

// ── Animations ─────────────────────────────────────────────────────────
import PageTransition from '@/components/animations/PageTransition';

// ── Shared ─────────────────────────────────────────────────────────────
import ScrollToTop from '@/components/shared/ScrollToTop';

// ── Feature pages ──────────────────────────────────────────────────────
import Home               from '@/features/home/Home.page';
import About              from '@/features/about/About.page';
import ServicesPage       from '@/features/services/Services.page';
import IELTS              from '@/features/ielts/IELTS.page';
import PTE                from '@/features/pte/PTE.page';
import Destinations       from '@/features/destinations/Destinations.page';
import CountryDetail      from '@/features/destinations/CountryDetail.page';
import Contact            from '@/features/contact/Contact.page';
import Apply              from '@/features/apply/Apply.page';
import ApplyIELTS         from '@/features/apply/ApplyIELTS.page';
import FreeConsultation   from '@/features/apply/FreeConsultation.page';
import Events             from '@/features/events/Events.page';
import Success            from '@/features/apply/Success.page';
import NotFound           from '@/features/NotFound.page';

// ── Admin feature ──────────────────────────────────────────────────────
import AdminLogin         from '@/features/admin/AdminLogin.page';
import StudentLogin       from '@/features/admin/StudentLogin.page';
import AdminLayout        from '@/features/admin/components/AdminLayout';
import AdminDashboard     from '@/features/admin/AdminDashboard.page';
import AdminAds           from '@/features/admin/AdminAds.page';
import AdminTeam          from '@/features/admin/AdminTeam.page';
import AdminCourses       from '@/features/admin/AdminCourses.page';
import AdminPlaceholder   from '@/features/admin/components/Placeholder';
import ManageHome         from '@/features/admin/pages/ManageHome';
import ManageIELTS        from '@/features/admin/pages/ManageIELTS';
import ManagePTE          from '@/features/admin/pages/ManagePTE';
import ManageAbout        from '@/features/admin/pages/ManageAbout';
import ManageDestinations from '@/features/admin/pages/ManageDestinations';
import ManageServices     from '@/features/admin/pages/ManageServices';
import ManageEvents       from '@/features/admin/pages/ManageEvents';
import ManageContact      from '@/features/admin/pages/ManageContact';

const queryClient = new QueryClient();

// ─────────────────────────────────────────────
//  Animated Routes
// ─────────────────────────────────────────────
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* ── Public Routes ── */}
        <Route path="/"                  element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about"             element={<PageTransition><About /></PageTransition>} />
        <Route path="/services"          element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/ielts"             element={<PageTransition><IELTS /></PageTransition>} />
        <Route path="/pte"               element={<PageTransition><PTE /></PageTransition>} />
        <Route path="/destinations"      element={<PageTransition><Destinations /></PageTransition>} />
        <Route path="/destinations/:country" element={<PageTransition><CountryDetail /></PageTransition>} />
        <Route path="/contact"           element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/apply"             element={<PageTransition><Apply /></PageTransition>} />
        <Route path="/apply-ielts"       element={<PageTransition><ApplyIELTS /></PageTransition>} />
        <Route path="/free-consultation" element={<PageTransition><FreeConsultation /></PageTransition>} />
        <Route path="/events"            element={<PageTransition><Events /></PageTransition>} />
        <Route path="/success"           element={<PageTransition><Success /></PageTransition>} />

        {/* ── Auth Routes ── */}
        <Route path="/admin/login"   element={<PageTransition><AdminLogin /></PageTransition>} />
        <Route path="/student/login" element={<PageTransition><StudentLogin /></PageTransition>} />

        {/* ── Protected Admin Routes ── */}
        <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
          <Route index                      element={<AdminDashboard />} />
          <Route path="dashboard"           element={<AdminDashboard />} />
          <Route path="team"                element={<AdminTeam />} />
          <Route path="courses"             element={<AdminCourses />} />
          <Route path="ads"                 element={<AdminAds />} />
          <Route path="pages/home"          element={<ManageHome />} />
          <Route path="pages/ielts"         element={<ManageIELTS />} />
          <Route path="pages/pte"           element={<ManagePTE />} />
          <Route path="pages/about"         element={<ManageAbout />} />
          <Route path="pages/destinations"  element={<ManageDestinations />} />
          <Route path="pages/services"      element={<ManageServices />} />
          <Route path="pages/events"        element={<ManageEvents />} />
          <Route path="pages/contact"       element={<ManageContact />} />
          <Route path="media"               element={<AdminPlaceholder title="Gallery & Media Manager" />} />
          <Route path="students"            element={<AdminPlaceholder title="Student Applications" />} />
          <Route path="destinations"        element={<AdminPlaceholder title="Destinations Manager" />} />
          <Route path="settings"            element={<AdminPlaceholder title="Admin Settings" />} />
        </Route>

        {/* ── 404 ── */}
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

// ─────────────────────────────────────────────
//  App — Provider Hierarchy
//  AuthProvider > CMSProvider > QueryClient > UI > Router
// ─────────────────────────────────────────────
const App = () => (
  <AuthProvider>
    <CMSProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <AnimatedRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </CMSProvider>
  </AuthProvider>
);

export default App;
