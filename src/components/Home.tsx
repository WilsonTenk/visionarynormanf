import { Heart, Play, GraduationCap, Activity, Handshake, Stethoscope, Building2, UserRound, MapPin, Users, LayoutGrid, ChevronDown, ArrowRight, ExternalLink, Star, Venus, Target, Eye, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const stats = [
    { value: '500+', label: 'Students Supported' },
    { value: '15+', label: 'Communities Reached' },
    { value: '1.2K+', label: 'Lives Impacted' },
    { value: '10+', label: 'Programs Running' },
  ];

  const programs = [
    { icon: GraduationCap, color: 'from-vnf-navy to-vnf-blue', title: 'Educational Outreach', desc: 'Scholarships, tutoring, and school supply drives to promote access to quality education.', bg: '/visionarynormanf/images/school 1.jpg' },
    { icon: Activity, color: 'from-vnf-green to-emerald-500', title: 'Public Health Initiatives', desc: 'Community health screenings, vaccination campaigns, and health education for all ages.', bg: '/visionarynormanf/images/VNF 8.jpg' },
    { icon: Venus, color: 'from-vnf-pink to-rose-400', title: 'Menstrual Hygiene', desc: 'Distributing sanitary products and providing health education to empower girls.', bg: '/visionarynormanf/images/women.jpg' },
    { icon: Handshake, color: 'from-amber-600 to-vnf-green', title: 'Social Support', desc: 'Providing food, shelter, and essentials to vulnerable groups across communities.', bg: '/visionarynormanf/images/Lambussie 1.jpg' },
    { icon: Stethoscope, color: 'from-vnf-blue to-cyan-400', title: 'Medical Programs', desc: 'Mobile clinics and specialist outreach for underserved populations across Ghana.', bg: '/visionarynormanf/images/VNF 9.jpg' },
    { icon: Building2, color: 'from-vnf-navy to-slate-600', title: 'Community Development', desc: 'Skills training and leadership development for resilient, self-sustaining communities.', bg: '/visionarynormanf/images/vnf 4.jpg' },
  ];

  const news = [
    { date: 'August 2025', title: '2025 Scholarship Portal Open', desc: 'The 2025 Scholarship Portal is officially open! Students are encouraged to apply for support.', link: 'https://tinyurl.com/VNFScholarship', cta: 'Apply Now', img: '/visionarynormanf/images/scholarship pc.png' },
    { date: 'February 2024', title: 'Feed the Street Cape Coast', desc: 'Our food distribution initiative provided meals to over 800 vulnerable people across Cape Coast.', link: 'https://share.google/K2NjTJBZ8uEEqJutO', cta: 'Read More', img: '/visionarynormanf/images/fts 1.jpg' },
    { date: 'September 2024', title: 'Outreach at Kyeaboso', desc: 'We equipped students with essential supplies and conducted vision screenings.', link: 'https://share.google/N6vZ7Bt3dIkPOl8uB', cta: 'Read More', img: '/visionarynormanf/images/VNF 7.jpg' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-68px)] bg-vnf-navy flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="/visionarynormanf/images/VNF 6.jpg" alt="VNF Community" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-linear-to-br from-vnf-navy/90 via-vnf-blue/40 to-transparent" />
          <div className="absolute inset-0 hero-grid" />
        </div>

        <div className="relative z-1 max-w-7xl mx-auto px-5 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center flex flex-col lg:flex-row text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start"
          >
            <h1 className="font-serif text-[2.75rem] sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6">
              Empowering Youth <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-vnf-blue to-vnf-green italic">& Communities</span>
            </h1>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-xl mb-10">
              Through education, health initiatives, leadership development, and philanthropic efforts, we're building a brighter future for every community we serve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                onClick={() => onNavigate('involved')}
                className="btn-accent w-full sm:w-auto"
              >
                <Heart size={20} /> Get Involved
              </button>
              <button 
                onClick={() => onNavigate('about')}
                className="btn-ghost w-full sm:w-auto border-white/20 text-white hover:bg-white/10"
              >
                <Play size={20} /> Our Story
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="p-6 sm:p-8 rounded-[2.5rem] bg-white/2 border border-white/5 backdrop-blur-2xl hover:bg-white/10 hover:border-white/20 transition-all group relative overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-vnf-green/5 blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-vnf-green/20 transition-colors" />
                <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1 sm:text-white group-hover:text-vnf-green transition-colors flex items-baseline gap-1">
                  {stat.value}
                </div>
                <div className="text-[9px] sm:text-[10px] font-bold text-white/40 uppercase tracking-[2px] leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest animate-bounce">
          <span>Scroll to explore</span>
          <ChevronDown size={14} />
        </div>
      </section>

      {/* Mission Strip */}
      <section className="bg-vnf-navy py-20 lg:py-32 px-5 sm:px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <div className="inline-block px-4 py-1.5 bg-vnf-green/10 rounded-full text-vnf-green text-[10px] font-bold tracking-widest uppercase mb-6">
              Who We Are
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Driven by purpose,<br className="hidden sm:block" />guided by impact
            </h2>
            <p className="text-white/60 leading-relaxed max-w-lg mx-auto lg:mx-0">
              The Visionary Norman Foundation creates sustainable change by investing in the potential of individuals and communities across Ghana.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              { icon: Target, title: 'Our Mission', desc: 'To empower and uplift individuals by providing support, resources, and opportunities that create lasting change.' },
              { icon: Eye, title: 'Our Vision', desc: 'A world rooted in equity, dignity, and sustainable development where every community thrives.' },
              { icon: Star, title: 'Our Values', desc: 'Integrity, compassion, excellence, and a commitment to community-led solutions that endure.' },
            ].map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: idx * 0.07, duration: 0.4, ease: 'easeOut' }}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-xl flex gap-6 hover:bg-white/[0.08] hover:border-white/10 transition-all shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-vnf-blue/80 to-vnf-green/80 flex items-center justify-center text-white shrink-0 shadow-lg shadow-vnf-blue/20">
                  <card.icon size={22} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">{card.title}</h4>
                  <p className="text-xs text-white/50 leading-relaxed font-medium">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20 lg:py-32 px-5 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <div className="inline-block px-4 py-1.5 bg-vnf-blue/10 rounded-full text-vnf-blue text-[10px] font-bold tracking-widest uppercase mb-4">
              What We Do
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-extrabold text-vnf-navy mb-4">Our Key Initiatives</h2>
            <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed px-4">
              Six interconnected programs working together to transform communities from the inside out.
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (i % 3) * 0.06, duration: 0.4, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-50px' }}
              onClick={() => onNavigate('programs')}
              className="group bg-white rounded-[2.5rem] border border-slate-200/60 overflow-hidden hover:shadow-[0_32px_64px_-16px_rgba(0,59,149,0.1)] hover:border-vnf-blue/20 transition-all cursor-pointer hover:-translate-y-1"
            >
              <div className={`h-40 sm:h-44 bg-linear-to-br ${prog.color} flex items-end p-8 relative overflow-hidden`}>
                {/* Faint background photo */}
                <img
                  src={prog.bg}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity group-hover:opacity-30 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-br from-black/10 to-transparent" />
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white relative z-10 ring-1 ring-white/30">
                  <prog.icon size={24} />
                </div>
                <div className="absolute top-6 right-6 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[9px] font-black text-white uppercase tracking-[1.5px] z-10 border border-white/10">
                  Impact
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-lg font-bold text-vnf-navy mb-3 group-hover:text-vnf-blue transition-colors leading-tight">{prog.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6 font-medium line-clamp-3">{prog.desc}</p>
                <div className="flex items-center gap-2 text-vnf-blue font-bold text-xs tracking-tight uppercase">
                  Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 lg:py-32 px-5 sm:px-6 bg-linear-to-br from-vnf-navy to-vnf-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        
        <div className="max-w-7xl mx-auto relative z-1">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1.5 bg-vnf-green/20 rounded-full text-vnf-green text-[10px] font-bold tracking-widest uppercase mb-4">
                Our Impact
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-extrabold text-white mb-4">Numbers that tell our story</h2>
              <p className="text-white/60 max-w-xl mx-auto leading-relaxed px-4">
                Every number represents a life touched, a community strengthened, a future brightened.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { icon: UserRound, val: '500+', label: 'Students Supported' },
              { icon: MapPin, val: '15+', label: 'Communities Transformed' },
              { icon: Users, val: '1,200+', label: 'Lives Impacted' },
              { icon: LayoutGrid, val: '10+', label: 'Programs Implemented' },
            ].map((item, i) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-50px' }}
                className="p-6 sm:p-8 text-center bg-white/[0.03] border border-white/5 rounded-[2.5rem] backdrop-blur-xl hover:bg-white/[0.08] transition-all group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-linear-to-b from-vnf-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <item.icon className="mx-auto text-vnf-green mb-4 relative z-1" size={24} />
                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1 relative z-1 tracking-tight">{item.val}</div>
                <div className="text-[9px] sm:text-[10px] font-bold text-white/30 uppercase tracking-[2px] relative z-1">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-20 lg:py-32 px-5 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-2">
          <div>
            <div className="inline-block px-4 py-1.5 bg-vnf-blue/10 rounded-full text-vnf-blue text-[10px] font-bold tracking-widest uppercase mb-4">
              Latest Updates
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-extrabold text-vnf-navy">News & Stories</h2>
            <p className="text-slate-500 mt-4 leading-relaxed">
              Stories of impact from the communities we serve.
            </p>
          </div>
          <button 
            onClick={() => onNavigate('contact')}
            className="flex items-center gap-2 font-bold text-vnf-blue hover:gap-4 transition-all w-fit"
          >
            See all updates <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.4, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-50px' }}
              className="group bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="h-52 sm:h-56 bg-slate-200 overflow-hidden relative">
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-vnf-navy/80 backdrop-blur-md rounded-full text-[10px] font-bold text-white tracking-widest">
                  {item.date}
                </div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display='none'; (e.currentTarget.parentElement as HTMLElement).classList.add('bg-gradient-to-br','from-vnf-blue','to-vnf-green'); }}
                />
              </div>
              <div className="p-8 sm:p-10">
                <h3 className="text-xl font-bold text-vnf-navy mb-4 group-hover:text-vnf-blue transition-colors line-clamp-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-8 line-clamp-3 font-medium">{item.desc}</p>
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-vnf-blue/10 text-vnf-blue font-bold text-sm tracking-tight w-full hover:bg-vnf-blue hover:text-white transition-all group/cta"
                >
                  {item.cta} <ExternalLink size={14} className="group-hover/cta:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32 px-5 sm:px-6 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-vnf-blue/10 rounded-full text-vnf-blue text-[10px] font-bold tracking-widest uppercase mb-4">
              Testimonials
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-extrabold text-vnf-navy mb-4">Voices of Change</h2>
            <p className="text-slate-500 max-w-xl mx-auto leading-relaxed px-4 text-sm sm:text-base">
              Hear from the people whose lives have been transformed by our work.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { initial: 'SJ', name: 'Sarah Johnson', role: 'Scholarship Recipient', quote: 'The scholarship from Visionary Norman Foundation changed my life. I\'m now the first in my family to attend university, pursuing medicine.' },
              { initial: 'MT', name: 'Michael Thompson', role: 'Volunteer', quote: 'Volunteering with this foundation has been incredibly rewarding. Seeing the direct impact on youth keeps me motivated every day.' },
              { initial: 'LW', name: 'Dr. Lisa Williams', role: 'Community Partner', quote: 'Our partnership with VNF allowed us to extend our community health initiatives to reach twice as many people as before.' },
            ].map((testi, i) => (
              <motion.div
                key={testi.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.08, duration: 0.45, ease: 'easeOut' }}
                className="p-8 sm:p-10 bg-white rounded-[2.5rem] border border-slate-200 hover:border-vnf-blue/30 transition-all shadow-sm"
              >
                <div className="flex gap-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-base text-vnf-navy italic leading-relaxed mb-8 font-medium">
                  "{testi.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-vnf-blue to-vnf-green flex items-center justify-center text-white font-bold text-sm">
                    {testi.initial}
                  </div>
                  <div>
                    <div className="font-bold text-vnf-navy">{testi.name}</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{testi.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Scholarship */}
      <section className="py-20 lg:py-32 px-5 sm:px-6 bg-linear-to-br from-vnf-pink to-purple-800 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto relative z-1 px-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl lg:text-5xl font-extrabold text-white mb-6">Scholarship Opportunities</h2>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-12">
              We believe financial constraints should never hinder education. Our scholarship programs support talented students in pursuing their academic dreams.
            </p>
          </motion.div>
          
          <div className="space-y-3 mb-12 max-w-xl mx-auto text-left">
            {[
              'Admitted to a recognized local tertiary institution',
              'Demonstrated financial need',
              'Application completed accurately and submitted on time',
            ].map((item, i) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-2xl bg-white/10 border border-white/20 flex items-center gap-4 text-white font-bold text-xs sm:text-sm"
              >
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                  <ArrowRight size={10} />
                </div>
                {item}
              </motion.div>
            ))}
          </div>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://tinyurl.com/VNFScholarship" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-white text-vnf-pink rounded-[2.5rem] font-black transition-all hover:shadow-2xl"
          >
            Apply Now <ArrowRight size={20} />
          </motion.a>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-24 lg:py-32 px-5 sm:px-6 bg-vnf-navy text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-vnf-blue/20 rounded-full blur-[120px] -translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto relative z-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl lg:text-6xl font-extrabold text-white mb-6">Ready to Make a Difference?</h2>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-12 max-w-2xl mx-auto px-2">
              Join thousands of supporters helping us transform communities across Ghana.
            </p>
          </motion.div>

          <div className="grid sm:flex sm:flex-wrap justify-center gap-4 px-4 sm:px-0">
            <button 
              onClick={() => onNavigate('involved')}
              className="btn-accent w-full sm:w-auto"
            >
              <Heart size={20} /> Donate Today
            </button>
            <button 
              onClick={() => onNavigate('involved')}
              className="btn-ghost w-full sm:w-auto border-white/20 text-white"
            >
              <Users size={20} /> Volunteer
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="btn-ghost w-full sm:w-auto border-white/20 text-white"
            >
              <Mail size={20} /> Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
