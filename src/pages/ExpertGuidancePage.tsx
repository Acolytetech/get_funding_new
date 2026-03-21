"use client";

import { motion } from "framer-motion";
import { CheckCircle, Phone, Mail, MapPin } from "lucide-react";

export default function ExpertGuidance() {
  return (
    <div className="bg-[#f6f8fb]">

      {/* ================= HERO ================= */}
      <section className="relative pt-28 pb-24 px-6 overflow-hidden">

        {/* PREMIUM BACKGROUND */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#e6f7f1] via-white to-[#dff5f8]" />
          <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-green-200/30 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-200/30 blur-[120px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Get Expert Guidance for{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Government Funding
              </span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              We help startups & MSMEs find the best schemes, check eligibility,
              and handle complete documentation — so you focus on growth.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Personalized Scheme Matching",
                "Eligibility & Documentation Support",
                "End-to-End Application Guidance",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-green-600" size={20} />
                  <span className="text-base text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
              Talk to Expert →
            </button>
          </div>

          {/* RIGHT FORM (PREMIUM GLASS) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative backdrop-blur-2xl bg-white/60 border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-3xl p-6 md:p-8"
          >
            {/* subtle inner glow */}
            <div className="absolute inset-0 rounded-3xl bg-white/20 pointer-events-none" />

            <h3 className="text-xl font-semibold text-slate-900 mb-6">
              Request a Free Consultation
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="premium-input" placeholder="Full Name" />
              <input className="premium-input" placeholder="Phone Number" />
              <input className="premium-input" placeholder="Email" />
              <input className="premium-input" placeholder="Company Name" />
            </div>

            <select className="premium-input mt-4">
              <option>Consultation required for</option>
              <option>Startup Funding</option>
              <option>MSME Scheme</option>
              <option>Subsidy</option>
            </select>

            <button className="w-full mt-6 bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-xl font-semibold shadow-md hover:scale-[1.02] transition-all">
              Send Request
            </button>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY ================= */}
      <section className="py-20 px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            Why Choose Us
          </h2>
          <p className="text-slate-500 mt-2">
            We simplify government funding for your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Expert Consultation",
            "High Success Rate",
            "Complete Support",
          ].map((title, i) => (
            <div
              key={i}
              className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/40 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all"
            >
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Professional support to maximize your funding success.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              Contact Us
            </h2>

            <div className="space-y-6 text-slate-700">
              <div className="flex items-center gap-4">
                <Phone className="text-green-600" />
                <span className="text-lg font-medium">1800-571-0809</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-green-600" />
                <span className="text-lg font-medium">info@startupflora.com</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-green-600" />
                <span className="text-lg font-medium">
                  Jaipur • Ahmedabad • Hyderabad • Gurugram
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-slate-50 p-8 rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              Already a customer?
            </h3>

            <input className="premium-input mb-3" placeholder="Your Name" />
            <input className="premium-input mb-3" placeholder="Phone Number" />
            <textarea
              className="premium-input h-24"
              placeholder="Describe your issue"
            />

            <button className="w-full mt-4 bg-black text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition">
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 text-center bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Get Government Funding?
        </h2>
        <p className="mb-6 opacity-90">
          Talk to experts and start your funding journey today.
        </p>

        <button className="bg-white text-green-600 px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
          Book Free Call
        </button>
      </section>

      {/* ================= GLOBAL INPUT STYLE ================= */}
      <style jsx>{`
        .premium-input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.05);
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(10px);
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .premium-input:focus {
          outline: none;
          border-color: #22c55e;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(34,197,94,0.1);
        }
      `}</style>
    </div>
  );
}