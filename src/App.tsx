/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { HowItWorks } from './pages/HowItWorks';
import { SuccessStories } from './pages/SuccessStories';
import { Pricing } from './pages/Pricing';
import { AboutUs } from './pages/AboutUs';
import { StartCampaign } from './pages/StartCampaign';
import { ContactUs } from './pages/ContactUs';
import { CampaignDetails } from './pages/CampaignDetails';
import { Dashboard } from './pages/Dashboard';
import { AuthProvider, useAuth } from './contexts/AuthContext';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
  if (!user) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
};

export default function App() {
  const { pathname } = useLocation();
  const isDashboard = pathname === '/dashboard';

  return (
    <AuthProvider>
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        <ScrollToTop />
        {!isDashboard && <Navbar />}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route 
              path="/dashboard" 
              element={
                // <ProtectedRoute>
                  <Dashboard />
                // </ProtectedRoute>
              } 
            />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/start-campaign" element={<StartCampaign />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/campaign/:id" element={<CampaignDetails />} />
            
            {/* Fallback to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        {!isDashboard && <Footer />}
      </div>
    </AuthProvider>
  );
}

