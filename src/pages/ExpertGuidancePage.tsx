"use client";

import { motion } from "framer-motion";
import { CheckCircle, Phone, Mail, MapPin } from "lucide-react";

export default function ExpertGuidance() {
  return (
    <div className="bg-[#f8fafc]">

      {/* ================= HERO ================= */}
      <section className="relative pt-28 pb-24 px-6 overflow-hidden">
        
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#e6f7f1] via-white to-[#dff5f8]" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Get Expert Guidance for{" "}
              <span className="text-green-600">Government Funding</span>
            </h1>

            <p className="text-lg text-slate-500 mb-8 max-w-lg">
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
                  <span className="text-base text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition">
              Talk to Expert →
            </button>
          </div>

          {/* RIGHT FORM (GLASS UI) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="backdrop-blur-xl bg-white/70 border border-white/40 shadow-2xl rounded-3xl p-6 md:p-8"
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-6">
              Request a Free Consultation
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="input" placeholder="Full Name" />
              <input className="input" placeholder="Phone Number" />
              <input className="input" placeholder="Email" />
              <input className="input" placeholder="Company Name" />
            </div>

            <select className="input mt-4">
              <option>Consultation required for</option>
              <option>Startup Funding</option>
              <option>MSME Scheme</option>
              <option>Subsidy</option>
            </select>

            <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold shadow-md">
              Send Request
            </button>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY SECTION ================= */}
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
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all"
            >
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-slate-500 text-sm">
                Professional support to maximize your funding success.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* LEFT INFO */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              Contact Us
            </h2>

            <div className="space-y-6 text-slate-700">
              <div className="flex items-center gap-4">
                <Phone className="text-green-600" />
                <span className="text-lg">1800-571-0809</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-green-600" />
                <span className="text-lg">info@startupflora.com</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-green-600" />
                <span className="text-lg">
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

            <input className="input mb-3" placeholder="Your Name" />
            <input className="input mb-3" placeholder="Phone Number" />
            <textarea
              className="input h-24"
              placeholder="Describe your issue"
            />

            <button className="w-full mt-4 bg-black text-white py-3 rounded-xl font-semibold">
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 text-center bg-gradient-to-r from-green-600 to-green-500 text-white">
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
    </div>
  );
}