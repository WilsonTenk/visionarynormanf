import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Images } from 'lucide-react';

const galleryImages = [
  { src: '/visionarynormanf/images/VNF 7.jpg', alt: 'VNF Community Event', category: 'Community' },
  { src: '/visionarynormanf/images/VNF 8.jpg', alt: 'VNF Outreach', category: 'Outreach' },
  { src: '/visionarynormanf/images/VNF 9.jpg', alt: 'VNF Program', category: 'Community' },
  { src: '/visionarynormanf/images/Lambussie 1.jpg', alt: 'Lambussie Outreach', category: 'Outreach' },
  { src: '/visionarynormanf/images/WhatsApp-Image-at-AM-1-2.jpg', alt: 'VNF Activity', category: 'Community' },
  { src: '/visionarynormanf/images/about 4.jpg', alt: 'About VNF', category: 'About' },
  { src: '/visionarynormanf/images/fts 1.jpg', alt: 'Feed the Street Cape Coast', category: 'Outreach' },
  { src: '/visionarynormanf/images/sch flyer 1.jpg', alt: 'Scholarship Flyer 2025', category: 'Scholarship' },
  { src: '/visionarynormanf/images/sch flyer.jpg', alt: 'Scholarship Flyer', category: 'Scholarship' },
  { src: '/visionarynormanf/images/school 1.jpg', alt: 'School Outreach', category: 'Education' },
  { src: '/visionarynormanf/images/vnf 4.jpg', alt: 'VNF Team', category: 'Community' },
  { src: '/visionarynormanf/images/vnf 5.jpeg', alt: 'VNF Activity', category: 'Outreach' },
  { src: '/visionarynormanf/images/women.jpg', alt: 'Women Empowerment Program', category: 'Community' },
  { src: '/visionarynormanf/images/scholarship pc.png', alt: 'Scholarship Program', category: 'Scholarship' },
];

const categories = ['All', ...Array.from(new Set(galleryImages.map((g) => g.category)))];

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All' ? galleryImages : galleryImages.filter((g) => g.category === activeCategory);

  return (
    <div className="pb-24 text-vnf-navy overflow-hidden">
      {/* Hero */}
      <section className="bg-vnf-navy py-20 sm:py-32 px-5 text-center relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-vnf-blue/20 rounded-full blur-[120px] -translate-y-1/2" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-1 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-vnf-green/10 rounded-full text-vnf-green text-[10px] font-bold tracking-widest uppercase mb-8">
            <Images size={14} /> Our Gallery
          </div>
          <h1 className="font-serif text-[2.75rem] sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Moments of Impact
          </h1>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A visual journey through the communities we serve, the lives we've touched, and the change we're creating together.
          </p>
        </motion.div>
      </section>

      {/* Filter Bar */}
      <section className="py-10 px-5 sm:px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${
                activeCategory === cat
                  ? 'bg-vnf-navy text-white shadow-lg shadow-vnf-navy/20'
                  : 'bg-white text-vnf-navy/60 border border-slate-200 hover:border-vnf-blue/30 hover:text-vnf-blue'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  onClick={() => setSelected(img.src)}
                  className="group relative aspect-square overflow-hidden rounded-2xl border border-slate-200/60 cursor-pointer hover:shadow-xl hover:shadow-vnf-navy/10 transition-all"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-vnf-navy/0 group-hover:bg-vnf-navy/50 transition-colors flex items-end p-4 opacity-0 group-hover:opacity-100">
                    <div>
                      <div className="text-[9px] font-black text-vnf-green uppercase tracking-widest mb-1">
                        {img.category}
                      </div>
                      <p className="text-white font-bold text-sm leading-tight line-clamp-2">{img.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-slate-400 font-semibold">No images in this category.</div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[2000] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
            >
              <img
                src={selected}
                alt="Gallery"
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white text-vnf-navy flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
