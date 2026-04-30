import { Menu, X, Heart } from 'lucide-react';
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
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
    { id: 'involved', label: 'Get Involved', isCTA: true },
  ];

  const handleNav = (id: Page) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[1000] bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNav('home')}
          >
            <div className="relative w-12 h-12 flex items-center justify-center overflow-hidden rounded-xl bg-slate-50 border border-slate-100 shadow-sm shrink-0">
              <img
                src="/visionarynormanf/logo.jpg"
                alt="Visionary Norman Foundation Logo"
                className="w-full h-full object-contain p-1 group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="font-black text-vnf-navy text-sm tracking-tight">Visionary Norman</div>
              <div className="text-[9px] font-black text-vnf-blue uppercase tracking-[2px]">Foundation</div>
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
                      ? 'text-vnf-blue bg-vnf-blue/8'
                      : 'text-vnf-navy/60 hover:text-vnf-navy hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-vnf-navy text-white z-[1001] relative shadow-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer — rendered outside <nav> so it overlays everything cleanly */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[1001] bg-vnf-navy/60 backdrop-blur-sm md:hidden"
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 h-full w-[80vw] max-w-xs z-[1002] bg-white shadow-2xl flex flex-col md:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
                <div
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => handleNav('home')}
                >
                  <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm shrink-0">
                    <img
                      src="/visionarynormanf/logo.jpg"
                      alt="VNF Logo"
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                  <div className="leading-tight">
                    <div className="font-black text-vnf-navy text-sm">Visionary Norman</div>
                    <div className="text-[9px] font-black text-vnf-blue uppercase tracking-[2px]">Foundation</div>
                  </div>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-vnf-navy hover:bg-slate-200 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
                {links.filter((l) => !l.isCTA).map((link, index) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + index * 0.05, duration: 0.3, ease: 'easeOut' }}
                    onClick={() => handleNav(link.id)}
                    className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-left font-bold text-base transition-all ${
                      currentPage === link.id
                        ? 'bg-vnf-blue/8 text-vnf-blue'
                        : 'text-vnf-navy hover:bg-slate-50'
                    }`}
                  >
                    {/* Active indicator dot */}
                    <span
                      className={`w-2 h-2 rounded-full shrink-0 transition-all ${
                        currentPage === link.id ? 'bg-vnf-blue scale-125' : 'bg-slate-200'
                      }`}
                    />
                    {link.label}
                    {currentPage === link.id && (
                      <span className="ml-auto text-[9px] font-black text-vnf-blue uppercase tracking-widest">Active</span>
                    )}
                  </motion.button>
                ))}
              </nav>

              {/* CTA Button */}
              <div className="px-4 pb-4">
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  onClick={() => handleNav('involved')}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-linear-to-br from-vnf-navy to-vnf-blue text-white font-black text-sm shadow-lg shadow-vnf-blue/20 hover:shadow-xl transition-all"
                >
                  <Heart size={16} /> Get Involved
                </motion.button>
              </div>

              {/* Drawer Footer */}
              <div className="px-6 py-5 border-t border-slate-100 bg-slate-50">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">
                  Empowering Communities · Ghana
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
