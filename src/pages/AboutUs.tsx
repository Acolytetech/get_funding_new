import React from 'react';
import { Rocket, Users, Globe, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutUs = () => {
  const values = [
    { title: "Innovation", desc: "We believe in the power of new ideas to solve the world's most pressing challenges.", icon: Rocket },
    { title: "Community", desc: "We are building a global network of innovators and investors who support each other.", icon: Users },
    { title: "Transparency", desc: "We are committed to open and honest communication in everything we do.", icon: ShieldCheck },
    { title: "Impact", desc: "We measure our success by the positive change our projects bring to the world.", icon: Globe }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Our Mission</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            GetFunding is on a mission to democratize access to capital for innovators and entrepreneurs across India and the world.
          </p>
        </div>

        <div className="relative h-[500px] rounded-[40px] overflow-hidden mb-32 shadow-2xl border-8 border-slate-50">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
            alt="Our Team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-12">
            <div className="text-white max-w-2xl">
              <h2 className="text-4xl font-bold mb-4">Building the Future Together</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Founded in 2024, GetFunding has quickly become India's most trusted crowdfunding platform, helping thousands of projects come to life.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              These core principles guide everything we do at GetFunding.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((value, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 mb-6">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet Our Leadership</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              A diverse team of experts dedicated to empowering innovators.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Arjun Sharma", role: "CEO & Founder", image: "https://i.pravatar.cc/300?u=arjun" },
              { name: "Priya Patel", role: "Chief Operating Officer", image: "https://i.pravatar.cc/300?u=priya" },
              { name: "Rahul Verma", role: "Chief Technology Officer", image: "https://i.pravatar.cc/300?u=rahul" }
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-xl border-4 border-white group-hover:border-emerald-500 transition-all">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h3>
                <p className="text-emerald-600 font-bold uppercase tracking-wider text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-slate-900 rounded-[40px] p-12 lg:p-20 text-center text-white">
          <h2 className="text-4xl font-bold mb-8">Join the GetFunding Community</h2>
          <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto">
            Whether you're an innovator with a big idea or an investor looking for the next big thing, we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/start-campaign" className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-lg hover:shadow-xl">
              Start Your Campaign
            </Link>
            <Link to="/contact-us" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-5 rounded-full font-bold text-xl transition-all">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
