/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import { useEffect } from 'react';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const { pathname } = useLocation();
  const isDashboard = pathname === '/dashboard';

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <ScrollToTop />
      {!isDashboard && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/dashboard" element={<Dashboard />} />
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
  );
}

