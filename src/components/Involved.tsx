import { motion, AnimatePresence } from 'motion/react';
import { Heart, Handshake, Mail, MessageSquare, Clipboard, Send, Lock, Landmark, CreditCard, ChevronRight, Activity, Star, Users, Building2, UserRound, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Involved() {
  const [activeTab, setActiveTab] = useState<'donate' | 'volunteer' | 'partner'>('donate');
  const [donateForm, setDonateForm] = useState({ fname: '', lname: '', email: '', phone: '', org: '', msg: '' });
  const [copied, setCopied] = useState(false);

  const copyAcc = () => {
    navigator.clipboard.writeText('1050463092413');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sendWhatsApp = (type: string) => {
    const num = '233530441589';
    let text = '';
    
    if (type === 'donate') {
      const { fname, lname, email, phone, org, msg } = donateForm;
      text = `Hello Visionary Norman Foundation Team,%0A%0AMy name is ${encodeURIComponent((fname + ' ' + lname).trim())} and I would like to confirm a donation.%0A%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(phone)}%0AOrganization: ${encodeURIComponent(org)}%0AMessage: ${encodeURIComponent(msg)}%0A%0AThank you!`;
    } else if (type === 'volunteer') {
      text = `Hello Visionary Norman Foundation Team,%0A%0AI would like to volunteer for your programs.%0A%0AThank you!`;
    } else if (type === 'partner') {
      text = `Hello Visionary Norman Foundation Team,%0A%0AI am interested in exploring a partnership with your foundation.%0A%0AThank you!`;
    }
    
    window.open(`https://wa.me/${num}?text=${text}`, '_blank');
  };

  return (
    <div className="pb-24 overflow-hidden text-vnf-navy">
      {/* Hero */}
      <section className="bg-vnf-navy py-20 sm:py-32 px-5 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-from-center from-vnf-blue/20 to-transparent blur-3xl opacity-50" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-1 max-w-4xl mx-auto"
        >
          <div className="inline-block px-4 py-1.5 bg-vnf-green/10 rounded-full text-vnf-green text-[10px] font-bold tracking-widest uppercase mb-8">
            Take Action
          </div>
          <h1 className="font-serif text-[2.75rem] sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">Get Involved</h1>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            There are many ways to support our mission — donate, volunteer your time, or partner with us to multiply your impact.
          </p>
        </motion.div>
      </section>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 -mt-10 mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[2.5rem] shadow-2xl p-3 sm:p-4 flex flex-col sm:flex-row justify-center gap-2 border border-slate-100"
        >
          {[
            { id: 'donate', label: 'Donate', icon: CreditCard },
            { id: 'volunteer', label: 'Volunteer', icon: Heart },
            { id: 'partner', label: 'Partner', icon: Handshake },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center justify-center gap-3 px-8 py-4 rounded-full font-black text-sm tracking-wide transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-linear-to-br from-vnf-blue to-vnf-green text-white shadow-xl shadow-vnf-blue/20'
                  : 'text-slate-400 hover:text-vnf-navy hover:bg-slate-50'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <AnimatePresence mode="wait">
          {activeTab === 'donate' ? (
            <motion.div 
              key="donate"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="space-y-12 sm:space-y-20"
            >
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-vnf-navy mb-4 leading-tight">Your Gift Creates Change</h2>
                <p className="text-slate-500 leading-relaxed font-medium">Every donation goes directly toward programs that transform lives. Choose a giving method below.</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-10 rounded-[2.5rem] bg-linear-to-br from-vnf-blue/5 to-vnf-green/5 border-2 border-vnf-blue/10 text-center flex flex-col items-center group shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-vnf-blue to-vnf-green flex items-center justify-center text-white mb-6 shadow-lg shadow-vnf-blue/20 group-hover:scale-110 transition-transform">
                    <CreditCard size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-vnf-navy mb-4">Pay Online</h3>
                  <p className="text-sm text-slate-500 mb-10 leading-relaxed font-medium">Donate securely via card, mobile money, or bank transfer through Paystack.</p>
                  <a 
                    href="https://paystack.shop/pay/calxutqm30" 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn-accent w-full justify-center group/btn shadow-lg"
                  >
                    <Lock size={18} /> Donate via Paystack
                  </a>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-10 rounded-[2.5rem] bg-white border-2 border-slate-100 text-center flex flex-col items-center group shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-vnf-blue mb-6 border border-slate-100 group-hover:scale-110 transition-transform">
                    <Landmark size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-vnf-navy mb-4">Bank Transfer</h3>
                  <p className="text-sm text-slate-500 mb-8 leading-relaxed font-medium">Send funds directly to our bank account using the details below.</p>
                  <div className="w-full bg-slate-50 rounded-2xl p-6 text-left border border-slate-100">
                    <div className="text-[10px] font-black text-vnf-blue uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Landmark size={14} /> Fidelity Bank (Ghana)
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Account Name</span>
                        <span className="text-[11px] font-black text-vnf-navy text-right">VN FOUNDATION</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Account Number</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-black text-vnf-navy tracking-tight">1050463092413</span>
                          <button 
                            onClick={copyAcc}
                            className="p-2 rounded-lg bg-vnf-blue border border-vnf-blue text-[10px] font-bold text-white hover:bg-vnf-navy transition-all cursor-pointer"
                          >
                            {copied ? 'Copied' : <Clipboard size={12} />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-xl mx-auto p-8 sm:p-10 rounded-[2.5rem] bg-white border border-slate-200 shadow-2xl shadow-vnf-navy/5"
              >
                <h3 className="text-2xl font-bold text-vnf-navy mb-2 flex items-center gap-3 leading-tight">
                  <MessageSquare className="text-vnf-green" /> Confirm Donation
                </h3>
                <p className="text-sm text-slate-500 mb-8 leading-relaxed font-medium">After donating, please let us know so we can acknowledge your gift.</p>
                
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-vnf-navy uppercase tracking-widest ml-1">First Name</label>
                    <input 
                      type="text" 
                      placeholder="Abraham"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-[1.25rem] focus:outline-none focus:border-vnf-blue/50 focus:ring-4 ring-vnf-blue/5 transition-all outline-none font-medium placeholder:text-slate-300"
                      onChange={(e) => setDonateForm({ ...donateForm, fname: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-vnf-navy uppercase tracking-widest ml-1">Last Name</label>
                    <input 
                      type="text" 
                      placeholder="Norman"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-[1.25rem] focus:outline-none focus:border-vnf-blue/50 focus:ring-4 ring-vnf-blue/5 transition-all outline-none font-medium placeholder:text-slate-300"
                      onChange={(e) => setDonateForm({ ...donateForm, lname: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-5 mb-10">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-vnf-navy uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="you@example.com"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-[1.25rem] focus:outline-none focus:border-vnf-blue/50 focus:ring-4 ring-vnf-blue/5 transition-all outline-none font-medium placeholder:text-slate-300"
                      onChange={(e) => setDonateForm({ ...donateForm, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-vnf-navy uppercase tracking-widest ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+233 ..."
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-[1.25rem] focus:outline-none focus:border-vnf-blue/50 focus:ring-4 ring-vnf-blue/5 transition-all outline-none font-medium placeholder:text-slate-300"
                      onChange={(e) => setDonateForm({ ...donateForm, phone: e.target.value })}
                    />
                  </div>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => sendWhatsApp('donate')}
                  className="w-full btn-accent justify-center py-5 shadow-xl shadow-vnf-pink/20 rounded-2xl"
                >
                  <Send size={18} /> Confirm via WhatsApp
                </motion.button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center py-20 bg-slate-50 rounded-[2.5rem] border border-slate-200 px-5"
            >
              <div className="w-20 h-20 rounded-full bg-linear-to-br from-vnf-blue to-vnf-green mx-auto flex items-center justify-center text-white mb-8 shadow-xl shadow-vnf-blue/20">
                {activeTab === 'volunteer' ? <Heart size={40} /> : <Handshake size={40} />}
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif font-extrabold text-vnf-navy mb-4 leading-tight">Interested in joining our {activeTab} program?</h3>
              <p className="text-slate-500 mb-10 max-w-xl mx-auto font-medium leading-relaxed">
                {activeTab === 'volunteer' 
                  ? "We're always looking for passionate individuals to join our field teams and help us reach more communities."
                  : "Collaborate with us to scale our programs and create a lasting social impact across Ghana."}
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => sendWhatsApp(activeTab)}
                className="btn-accent w-full sm:w-auto shadow-2xl"
              >
                Start a Conversation <MessageSquare size={20} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
