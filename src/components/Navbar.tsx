import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Navbar({ currentPage, onNavigate, isMenuOpen, setIsMenuOpen }: NavbarProps) {
  const links: { id: Page; label: string; isCTA?: boolean }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'contact', label: 'Contact' },
    { id: 'involved', label: 'Get Involved', isCTA: true },
  ];

  const handleNav = (id: Page) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-1000 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center cursor-pointer group"
          onClick={() => handleNav('home')}
        >
          <div className="relative w-14 h-14 flex items-center justify-center overflow-hidden rounded-xl bg-slate-50 border border-slate-100 shadow-sm">
            {/* Logo image */}
            <img 
              src="/visionarynormanf/logo.jpg" 
              alt="Visionary Norman Foundation Logo" 
              className="w-full h-full object-contain p-1 group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                link.isCTA 
                  ? 'bg-linear-to-br from-vnf-navy to-vnf-blue text-white hover:shadow-lg hover:shadow-vnf-blue/20 ml-2'
                  : currentPage === link.id
                    ? 'text-vnf-blue bg-vnf-blue/5'
                    : 'text-vnf-navy/60 hover:text-vnf-navy hover:bg-slate-50'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-vnf-navy p-2 relative z-[1001] bg-slate-50 border border-slate-100 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[1000] bg-white flex flex-col md:hidden"
          >
            <div className="flex flex-col items-center justify-center flex-1 gap-6 px-6">
              {links.map((link, index) => (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`text-center w-full max-w-sm py-5 rounded-2xl text-2xl font-black transition-all ${
                    link.isCTA
                      ? 'bg-linear-to-br from-vnf-blue to-vnf-green text-white shadow-xl shadow-vnf-blue/20'
                      : currentPage === link.id
                        ? 'text-vnf-blue bg-vnf-blue/5'
                        : 'text-vnf-navy hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="p-10 text-center border-t border-white/5"
            >
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Empowering Communities</p>
              <div className="flex justify-center gap-6 text-white/60">
                {/* Social placeholders could go here */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
