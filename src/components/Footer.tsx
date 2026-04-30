import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Heart } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'programs', label: 'Programs' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const programLinks: { label: string }[] = [
    { label: 'Educational Outreach' },
    { label: 'Public Health' },
    { label: 'Menstrual Hygiene' },
    { label: 'Social Support' },
    { label: 'Medical Programs' },
    { label: 'Community Development' },
  ];

  return (
    <footer className="bg-vnf-navy pt-20 pb-8 px-5 sm:px-6 text-white/50 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-vnf-blue/10 blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 mb-16">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-vnf-pink rounded-tr-full rounded-bl-full opacity-80" />
                <div className="absolute inset-0 bg-vnf-green rounded-tl-full rounded-br-full opacity-80 rotate-90" />
                <span className="relative z-1 font-black text-white text-[10px]">VNF</span>
              </div>
              <div className="text-white font-bold leading-none tracking-tight">
                Visionary Norman
                <span className="block text-[10px] font-black text-vnf-blue tracking-widest mt-1 uppercase">Foundation</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed font-medium">
              Empowering youth and transforming communities through education, health, leadership, and philanthropy across Ghana.
            </p>
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
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 59, 149, 0.4)' }}
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all shadow-sm"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[2px] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => onNavigate(link.id)}
                    className="text-sm font-semibold hover:text-vnf-green transition-colors cursor-pointer flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-vnf-green mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a 
                  href="https://tinyurl.com/VNFScholarship" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-sm font-semibold hover:text-vnf-green transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-vnf-green mr-0 group-hover:mr-2 transition-all duration-300" />
                  Scholarship Portal
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[2px] mb-8">Focus Areas</h4>
            <ul className="space-y-4">
              {programLinks.map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={() => onNavigate('programs')}
                    className="text-sm font-semibold hover:text-vnf-green transition-colors text-left cursor-pointer flex items-center group"
                  >
                     <span className="w-0 group-hover:w-2 h-0.5 bg-vnf-green mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 rounded-[2.5rem] p-8 border border-white/10 shadow-inner">
            <h4 className="text-white font-black text-xs uppercase tracking-[2px] mb-8">Connect</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-sm font-semibold group cursor-pointer hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-lg bg-vnf-green/20 flex items-center justify-center text-vnf-green shrink-0 group-hover:bg-vnf-green group-hover:text-white transition-colors">
                  <Phone size={14} />
                </div>
                <span>+233 (0) 24 615 4709</span>
              </li>
              <li className="flex items-start gap-4 text-sm font-semibold group cursor-pointer hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-lg bg-vnf-blue/20 flex items-center justify-center text-vnf-blue shrink-0 group-hover:bg-vnf-blue group-hover:text-white transition-colors">
                  <Mail size={14} />
                </div>
                <span className="break-all">visionarynormanfoundation@gmail.com</span>
              </li>
              <li className="flex items-start gap-4 text-sm font-semibold group cursor-pointer hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-lg bg-amber-600/20 flex items-center justify-center text-amber-600 shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <MapPin size={14} />
                </div>
                <span>Ghana, West Africa</span>
              </li>
            </ul>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('involved')}
              className="mt-10 btn-accent w-full py-4 text-sm rounded-2xl shadow-xl shadow-vnf-pink/10"
            >
              <Heart size={16} /> Donate Now
            </motion.button>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col items-center gap-6 text-[10px] font-black uppercase tracking-[2px]">
          <div className="flex gap-8">
            <a href="#" className="hover:text-vnf-green transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-vnf-green transition-colors">Terms of Service</a>
          </div>
          <div className="text-center text-white/20">
            <p>© {new Date().getFullYear()} Visionary Norman Foundation. Transcending barriers.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
