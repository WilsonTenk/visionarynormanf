import { motion } from 'motion/react';
import { GraduationCap, Activity, Venus, Handshake, Stethoscope, Building2, CheckCircle, ExternalLink } from 'lucide-react';

export default function Programs() {
  const allPrograms = [
    {
      id: 'edu',
      icon: GraduationCap,
      title: 'Educational Outreach',
      color: 'bg-vnf-navy',
      desc: 'Scholarships, tutoring, and school supply drives to promote access to quality education for all children across Ghana.',
      features: [
        'University and tertiary scholarships',
        'Back-to-school essential kits',
        'Academic mentoring & tutoring',
        'School infrastructure support',
      ],
    },
    {
      id: 'health',
      icon: Activity,
      title: 'Public Health Initiatives',
      color: 'bg-vnf-green',
      desc: 'Community health screenings, vaccination campaigns, and health education to improve well-being for communities of all ages.',
      features: [
        'Community health fairs',
        'Vision & dental screenings',
        'Vaccination awareness drives',
        'Wellness workshops',
      ],
    },
    {
      id: 'menstrual',
      icon: Venus,
      title: 'Menstrual Hygiene Programs',
      color: 'bg-vnf-pink',
      desc: 'Distributing sanitary products and providing menstrual health education to empower girls and reduce stigma.',
      features: [
        'Free sanitary product distribution',
        'Reproductive health workshops',
        'School hygiene infrastructure',
        'Stigma reduction campaigns',
      ],
    },
    {
      id: 'social',
      icon: Handshake,
      title: 'Social Support Initiatives',
      color: 'bg-amber-600',
      desc: 'Providing food, clothing, and essential items to orphans, widows, and vulnerable groups in underserved areas.',
      features: [
        'Feed the Street campaigns',
        'Widow support networks',
        'Orphanage donation drives',
        'Elderly care programs',
      ],
    },
    {
      id: 'medical',
      icon: Stethoscope,
      title: 'Medical Programs',
      color: 'bg-vnf-blue',
      desc: 'Mobile clinics, specialist outreach, and emergency medical support for underserved populations.',
      features: [
        'Mobile clinic deployments',
        'Specialist medical outreach',
        'Emergency surgery grants',
        'Hospital volunteer services',
      ],
    },
    {
      id: 'comm',
      icon: Building2,
      title: 'Community Development',
      color: 'bg-slate-700',
      desc: 'Skills training, leadership workshops, and infrastructure projects for sustainable, community-led growth.',
      features: [
        'Vocational skills training',
        'Leadership bootcamps',
        'Clean water initiatives',
        'Solar energy projects',
      ],
    },
  ];

  return (
    <div className="pb-24 overflow-hidden text-vnf-navy">
      <div className="bg-vnf-navy py-20 sm:py-32 px-5 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full hero-grid opacity-10" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-1 max-w-4xl mx-auto"
        >
          <div className="inline-block px-4 py-1.5 bg-vnf-green/10 rounded-full text-vnf-green text-[10px] font-bold tracking-widest uppercase mb-8">
            What We Do
          </div>
          <h1 className="font-serif text-[2.75rem] sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">Programs & Initiatives</h1>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Our comprehensive approach addresses the root causes of poverty and inequality through six specialized, interconnected programs.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-20 lg:py-32">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {allPrograms.map((prog, i) => (
            <motion.div 
              key={prog.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.1 }}
              className="group bg-white/70 backdrop-blur-md rounded-[2.5rem] border border-slate-200/50 overflow-hidden hover:shadow-[0_32px_64px_-16px_rgba(0,59,149,0.1)] hover:border-vnf-blue/20 transition-all cursor-pointer hover:-translate-y-2"
            >
              <div className={`p-8 sm:p-10 ${prog.color} text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-500" />
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 relative z-1 ring-1 ring-white/30 group-hover:bg-white/30 transition-all">
                  <prog.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3 relative z-1 leading-tight">{prog.title}</h3>
                <p className="text-sm text-white/80 leading-relaxed font-medium relative z-1">{prog.desc}</p>
              </div>
              <div className="p-8 sm:p-10">
                <div className="grid sm:grid-cols-2 gap-4">
                  {prog.features.map((f, fi) => (
                    <motion.div 
                      key={f} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + fi * 0.05 }}
                      className="flex items-center gap-3 text-sm text-slate-600 font-bold group/feat"
                    >
                      <CheckCircle size={16} className="text-vnf-green shrink-0 group-hover/feat:scale-125 transition-transform" />
                      {f}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <section className="bg-slate-50 py-20 lg:py-32 px-5 sm:px-6 mx-5 sm:mx-6 rounded-[2.5rem] border border-slate-200 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-vnf-navy mb-6 leading-tight">Scholarship Opportunities</h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-10 font-medium px-4">
            Empowering students to pursue their academic dreams. The 2025 scholarship portal is now open.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://tinyurl.com/VNFScholarship" 
              target="_blank" 
              rel="noreferrer"
              className="btn-accent w-full sm:w-auto inline-flex items-center justify-center gap-2"
            >
              Apply for Scholarship <ExternalLink size={18} />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
