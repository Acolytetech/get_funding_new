import React, { useState } from 'react';
import { Rocket, CheckCircle2, ArrowRight, Globe, BarChart3, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const StartCampaign = () => {
  const [step, setStep] = useState(1);

  const steps = [
    { title: "Project Basics", icon: Rocket },
    { title: "Story & Media", icon: Globe },
    { title: "Funding Goal", icon: BarChart3 },
    { title: "Review & Launch", icon: ShieldCheck }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Start Your Campaign</h1>
          <p className="text-slate-500">Bring your vision to life with the support of our global community.</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12 relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 -z-10" />
          <div className="flex justify-between items-center">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border-4 ${step > i + 1 ? 'bg-emerald-600 border-emerald-100 text-white' : step === i + 1 ? 'bg-white border-emerald-600 text-emerald-600' : 'bg-white border-slate-200 text-slate-400'}`}
                >
                  {step > i + 1 ? <CheckCircle2 size={24} /> : <s.icon size={24} />}
                </div>
                <span className={`text-xs font-bold uppercase tracking-wider ${step === i + 1 ? 'text-emerald-600' : 'text-slate-400'}`}>
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white p-10 rounded-[40px] shadow-xl border border-slate-100">
          {step === 1 && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Tell us about your project</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Project Title</label>
                  <input 
                    type="text" 
                    placeholder="Enter a catchy title for your project"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Category</label>
                  <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all appearance-none">
                    <option>Select a category</option>
                    <option>Technology</option>
                    <option>Sustainability</option>
                    <option>Health & Wellness</option>
                    <option>Education</option>
                    <option>Community</option>
                    <option>Medical</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Location</label>
                  <input 
                    type="text" 
                    placeholder="e.g., Mumbai, India"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>
            </div>
          )}

          {step > 1 && (
            <div className="py-20 text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8 text-emerald-600">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Coming Soon!</h2>
              <p className="text-slate-500 max-w-md mx-auto leading-relaxed">
                We're currently refining our campaign creation process. Please check back soon or contact our support team to get started manually.
              </p>
            </div>
          )}

          <div className="mt-12 flex justify-between gap-4">
            {step > 1 && (
              <button 
                onClick={() => setStep(step - 1)}
                className="px-10 py-4 border-2 border-slate-200 text-slate-700 rounded-full font-bold hover:border-emerald-600 transition-all"
              >
                Back
              </button>
            )}
            <button 
              onClick={() => step < 4 ? setStep(step + 1) : null}
              className={`px-10 py-4 bg-emerald-600 text-white rounded-full font-bold flex items-center gap-2 hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl ml-auto ${step === 4 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {step === 4 ? 'Submit for Review' : 'Continue'} <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-4">Need help getting started?</p>
          <Link to="/contact-us" className="text-emerald-600 font-bold hover:underline">Talk to our campaign experts</Link>
        </div>
      </div>
    </div>
  );
};
