import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    subject: '',
    msg: ''
  });

  const sendContact = () => {
    const num = '233246154709';
    const { fname, lname, email, phone, subject, msg } = formData;
    const text = `Hello Visionary Norman Foundation Team,%0A%0AMy name is ${encodeURIComponent(fname + ' ' + lname)}.%0ASubject: ${encodeURIComponent(subject || 'General Inquiry')}%0A%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(phone)}%0A%0AMessage:%0A${encodeURIComponent(msg)}%0A%0AThank you!`;
    window.open(`https://wa.me/${num}?text=${text}`, '_blank');
  };

  const contactMethods = [
    { icon: Phone, title: 'Phone', detail: '+233 (0) 24 615 4709', sub: 'Mon – Fri, 9am – 5pm GMT' },
    { icon: Mail, title: 'Email', detail: 'visionarynormanfoundation@gmail.com', sub: 'We respond within 24–48 hours' },
    { icon: MapPin, title: 'Location', detail: 'Ghana, West Africa', sub: 'Serving communities nationwide' },
    { icon: MessageCircle, title: 'WhatsApp', detail: '+233 053 044 1589', sub: 'Quick responses on business hours' },
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
            Say Hello
          </div>
          <h1 className="font-serif text-[2.75rem] sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">Get In Touch</h1>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Whether you want to volunteer, partner, ask a question, or simply learn more — we'd love to hear from you.
          </p>
        </motion.div>
      </section>

      <section className="py-20 lg:py-32 px-5 sm:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-vnf-navy mb-4 leading-tight">We're here to help</h2>
            <p className="text-slate-500 leading-relaxed mb-10 text-sm sm:text-base font-medium">
              Reach out through any of the channels below and we'll get back to you as soon as possible.
            </p>

            <div className="space-y-4">
              {contactMethods.map((method, i) => (
                <motion.div 
                  key={method.title} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-[2rem] bg-white border border-slate-100 flex gap-5 sm:gap-6 hover:border-vnf-blue/30 transition-all group shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-vnf-navy to-vnf-blue flex items-center justify-center text-white shrink-0 shadow-lg shadow-vnf-blue/20">
                    <method.icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-vnf-navy font-bold mb-1">{method.title}</h4>
                    <p className="text-sm text-vnf-navy/80 font-semibold break-all leading-relaxed">{method.detail}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{method.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 px-2">
              <p className="text-xs font-bold text-vnf-navy uppercase tracking-widest mb-4">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "https://www.facebook.com/search/top?q=visionary%20norman%20foundation" },
                  { icon: Instagram, href: "#" },
                  { icon: Linkedin, href: "#" }
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    href={social.href} 
                    target="_blank" 
                    rel="noreferrer" 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-vnf-navy hover:bg-vnf-blue hover:text-white hover:border-vnf-blue transition-all"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] border border-slate-200 p-8 md:p-12 shadow-2xl shadow-vnf-navy/5 relative overflow-hidden"
          >
            <div className="relative z-1">
              <h3 className="text-2xl font-bold text-vnf-navy mb-2 leading-tight">Send us a message</h3>
              <p className="text-sm text-slate-500 mb-8 font-medium">Fill out the form below to message us directly on WhatsApp.</p>
              
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-vnf-navy uppercase tracking-widest ml-1">First Name *</label>
                  <input 
                    type="text" 
                    placeholder="Abraham"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-[1.25rem] focus:outline-none focus:border-vnf-blue/50 focus:ring-4 ring-vnf-blue/5 transition-all outline-none font-medium placeholder:text-slate-300"
                    onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-vnf-navy uppercase tracking-widest ml-1">Last Name *</label>
                  <input 
                    type="text" 
                    placeholder="Norman"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-[1.25rem] focus:outline-none focus:border-vnf-blue/50 focus:ring-4 ring-vnf-blue/5 transition-all outline-none font-medium placeholder:text-slate-300"
                    onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-5 mb-10">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-vnf-navy uppercase tracking-widest ml-1">Email Address *</label>
                  <input 
                    type="email" 
                    placeholder="you@example.com"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-[1.25rem] focus:outline-none focus:border-vnf-blue/50 focus:ring-4 ring-vnf-blue/5 transition-all outline-none font-medium placeholder:text-slate-300"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-vnf-navy uppercase tracking-widest ml-1">Subject</label>
                  <div className="relative">
                    <select 
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-[1.25rem] focus:outline-none focus:border-vnf-blue/50 focus:ring-4 ring-vnf-blue/5 transition-all outline-none appearance-none font-medium"
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="">Select a topic...</option>
                      <option>General Inquiry</option>
                      <option>Scholarship Information</option>
                      <option>Volunteer Opportunities</option>
                      <option>Partnership Proposal</option>
                      <option>Donation</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                      <Send size={14} className="rotate-90" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-vnf-navy uppercase tracking-widest ml-1">Message *</label>
                  <textarea 
                    placeholder="How can we help you?"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-[1.25rem] focus:outline-none focus:border-vnf-blue/50 focus:ring-4 ring-vnf-blue/5 transition-all outline-none min-h-[150px] resize-none font-medium placeholder:text-slate-300"
                    onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                  />
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={sendContact}
                className="w-full btn-accent justify-center py-5 shadow-2xl rounded-2xl"
              >
                <Send size={18} /> Send via WhatsApp
              </motion.button>
              <p className="text-[10px] text-slate-400 text-center mt-6 font-bold uppercase tracking-widest">
                We'll respond within 24–48 hours on business days.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
