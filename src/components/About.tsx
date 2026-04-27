import { motion } from 'motion/react';
import { Target, Eye, Star, UserRound, ArrowRight, Activity, Handshake, Mail, MapPin, Phone, MessageSquare, Facebook, Instagram, Linkedin, Send, Building2 } from 'lucide-react';
import { Page } from '../types';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const values = [
    { icon: Heart, title: 'Compassion', desc: 'We approach every person and community with genuine care, empathy, and respect for their dignity.' },
    { icon: Handshake, title: 'Integrity', desc: 'We operate with transparency, accountability, and honest stewardship of every resource.' },
    { icon: Activity, title: 'Excellence', desc: 'We pursue the highest standards in all our programs, continuously measuring and improving our impact.' },
    { icon: Star, title: 'Sustainability', desc: 'We design programs that create lasting change, empowering communities to lead their own growth.' },
    { icon: UserRound, title: 'Equity', desc: 'Every person deserves access to opportunity regardless of their background or circumstances.' },
    { icon: Building2, title: 'Collaboration', desc: 'We work in partnership with others to multiply our collective impact.' },
  ];

  const team = [
    { name: 'Abraham Norman Nortey', role: 'Founder & CEO', color: 'bg-vnf-navy' },
    { name: 'Dr. Abena Yeboah', role: 'Director', color: 'bg-vnf-green' },
    { name: 'Emmanuel Brobbery', role: 'Executive Secretary', color: 'bg-indigo-600' },
    { name: 'Dr. Sussie Anku', role: 'Head of Reproductive Health', color: 'bg-vnf-pink' },
    { name: 'Lauren Baaba Annan', role: 'Tertiary Institutional Head', color: 'bg-amber-600' },
    { name: 'Dr. Abigail Adu', role: 'Project Manager', color: 'bg-vnf-blue' },
  ];

  return (
    <div className="pb-24 text-vnf-navy">
      {/* Hero */}
      <section className="bg-vnf-navy py-20 sm:py-32 px-5 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-from-center from-vnf-blue/20 to-transparent blur-3xl opacity-50" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-1 max-w-4xl mx-auto"
        >
          <div className="inline-block px-4 py-1.5 bg-vnf-green/10 rounded-full text-vnf-green text-[10px] font-bold tracking-widest uppercase mb-8">
            Our Story
          </div>
          <h1 className="font-serif text-[2.75rem] sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">About the Foundation</h1>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Born from a deep belief that every person deserves access to opportunity, health, and dignity — regardless of where they were born.
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-32 px-5 sm:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 bg-vnf-blue/10 rounded-full text-vnf-blue text-[10px] font-bold tracking-widest uppercase mb-6">
              Our Journey
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-extrabold text-vnf-navy mb-8 leading-tight">From Vision to Impact</h2>
            <p className="text-slate-500 leading-relaxed mb-12 text-base sm:text-lg">
              The Visionary Norman Foundation was founded with a singular purpose: to create meaningful, lasting change in communities that need it most. What began as a small initiative to support students has grown into a multi-program organization reaching thousands across Ghana.
            </p>

            <div className="space-y-0 relative px-2">
              {[
                { year: '2020', title: 'Foundation Established', desc: 'Abraham Norman Nortey founded VNF with a mission to empower youth through education.' },
                { year: '2021', title: 'First Scholarship Program', desc: 'Launched our first formal scholarship program, supporting 50 students.' },
                { year: '2022', title: 'Health Initiatives Expanded', desc: 'Introduced public health and menstrual hygiene programs reaching 5 new communities.' },
                { year: '2023–25', title: 'National Scale', desc: 'Expanded to 15+ communities, impacting over 1,200 lives across Ghana.' },
              ].map((item, i, arr) => (
                <motion.div 
                  key={item.year} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 sm:gap-8 group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-linear-to-br from-vnf-blue to-vnf-green shrink-0 flex items-center justify-center text-white font-bold text-xs sm:text-sm z-1 group-hover:scale-110 transition-transform">
                      {i + 1}
                    </div>
                    {i !== arr.length - 1 && <div className="w-px h-full bg-linear-to-b from-vnf-blue/30 to-vnf-blue/5 my-2" />}
                  </div>
                  <div className="pb-10">
                    <div className="text-vnf-blue font-black text-[10px] uppercase tracking-widest mb-1">{item.year}</div>
                    <h4 className="text-lg font-bold text-vnf-navy mb-2 leading-tight">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-vnf-navy rounded-[2.5rem] p-10 sm:p-12 overflow-hidden relative group/hero shadow-2xl shadow-vnf-navy/20"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-vnf-blue/20 blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-1 space-y-4">
              {[
                { val: '500+', label: 'Students supported' },
                { val: '15+', label: 'Communities reached' },
                { val: '1,200+', label: 'Lives impacted' },
                { val: '6', label: 'Active programs' },
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-xl flex justify-between items-center hover:bg-white/[0.08] transition-all relative overflow-hidden group/stat"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-vnf-green/5 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity" />
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-[2px] relative z-1">{stat.label}</span>
                  <span className="text-2xl sm:text-3xl font-black text-white relative z-1">{stat.val}</span>
                </motion.div>
              ))}
              
              <div className="pt-8 text-center">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="w-16 h-16 rounded-2xl bg-vnf-green/20 mx-auto flex items-center justify-center text-vnf-green mb-4 group-hover/hero:scale-110 transition-transform"
                >
                  <Star size={32} />
                </motion.div>
                <h4 className="text-white font-bold mb-1">Community Choice Award</h4>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Most Impactful NGO 2024</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-20 lg:py-32 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1.5 bg-vnf-blue/10 rounded-full text-vnf-blue text-[10px] font-bold tracking-widest uppercase mb-4">
                What Guides Us
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-extrabold text-vnf-navy mb-4">Our Core Values</h2>
              <p className="text-slate-500 max-w-xl mx-auto leading-relaxed px-4 text-sm sm:text-base">
                Six principles that shape every decision we make and every program we run.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {values.map((v, i) => (
              <motion.div 
                key={v.title} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-8 sm:p-10 bg-white/60 backdrop-blur-md rounded-[2.5rem] border border-slate-200/50 hover:border-vnf-blue/20 hover:shadow-[0_32px_64px_-16px_rgba(0,59,149,0.08)] transition-all text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-vnf-blue/5 flex items-center justify-center text-vnf-blue mx-auto mb-8 group-hover:bg-vnf-blue group-hover:text-white transition-all shadow-sm group-hover:shadow-vnf-blue/20">
                  <v.icon size={26} />
                </div>
                <h3 className="text-lg font-bold text-vnf-navy mb-4 leading-tight">{v.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-32 px-5 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 bg-vnf-blue/10 rounded-full text-vnf-blue text-[10px] font-bold tracking-widest uppercase mb-4">
              The Team
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-extrabold text-vnf-navy mb-4">Our Leadership</h2>
            <p className="text-slate-500 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
              Dedicated professionals committed to our mission of community transformation.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {team.map((m, i) => (
            <motion.div 
              key={m.name} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[2.5rem] border border-slate-200/60 overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className={`h-72 sm:h-80 ${m.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-vnf-navy/20 group-hover:bg-vnf-navy/0 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 pt-20 bg-linear-to-t from-vnf-navy/90 via-vnf-navy/40 to-transparent">
                  <div className="text-white font-serif text-sm sm:text-base font-bold mb-1 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                    Professional, Dedicated, Visionary
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-lg font-bold text-vnf-navy mb-1 group-hover:text-vnf-blue transition-colors leading-tight">{m.name}</h3>
                <div className="text-[10px] font-black text-vnf-green uppercase tracking-[2px]">{m.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-32 px-5 text-center max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-10 sm:p-16 bg-vnf-navy rounded-[2.5rem] text-white overflow-hidden relative shadow-2xl shadow-vnf-navy/20"
        >
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-vnf-blue/30 blur-3xl rounded-full translate-y-1/2 translate-x-1/2" />
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold mb-6 relative z-1 leading-tight">Be Part of Our Story</h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto relative z-1 text-sm sm:text-base leading-relaxed">
            Join us in writing the next chapter of community transformation in Ghana.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-1">
            <button onClick={() => onNavigate('involved')} className="btn-accent w-full sm:w-auto">Support Our Work</button>
            <button onClick={() => onNavigate('contact')} className="btn-ghost border-white/20 text-white hover:bg-white/10 w-full sm:w-auto">Contact Us</button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

const Heart = Activity;
const Landmark = Building2;
