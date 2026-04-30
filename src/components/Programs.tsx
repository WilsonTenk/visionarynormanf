import { motion } from 'motion/react';
import { GraduationCap, Activity, Venus, Handshake, Stethoscope, Building2, CheckCircle, ExternalLink } from 'lucide-react';
import { Page } from '../types';

interface ProgramsProps {
  onNavigate?: (page: Page) => void;
}

export default function Programs({ onNavigate: _onNavigate }: ProgramsProps) {
  const allPrograms = [
    {
      id: 'edu',
      icon: GraduationCap,
      color: 'bg-vnf-navy',
      bg: '/visionarynormanf/images/school 1.jpg',
      title: 'Educational Outreach',
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
      color: 'bg-vnf-green',
      bg: '/visionarynormanf/images/VNF 8.jpg',
      title: 'Public Health Initiatives',
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
      color: 'bg-vnf-pink',
      bg: '/visionarynormanf/images/women.jpg',
      title: 'Menstrual Hygiene Programs',
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
      color: 'bg-amber-600',
      bg: '/visionarynormanf/images/Lambussie 1.jpg',
      title: 'Social Support Initiatives',
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
      color: 'bg-vnf-blue',
      bg: '/visionarynormanf/images/VNF 9.jpg',
      title: 'Medical Programs',
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
      color: 'bg-slate-700',
      bg: '/visionarynormanf/images/vnf 4.jpg',
      title: 'Community Development',
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
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative z-1 max-w-4xl mx-auto"
        >
          <div className="inline-block px-4 py-1.5 bg-vnf-green/10 rounded-full text-vnf-green text-[10px] font-bold tracking-widest uppercase mb-8">
            What We Do
          </div>
          <h1 className="font-serif text-[2.75rem] sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">Programs &amp; Initiatives</h1>
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
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.07, ease: 'easeOut' }}
              className="group bg-white/70 backdrop-blur-md rounded-[2.5rem] border border-slate-200/50 overflow-hidden hover:shadow-[0_32px_64px_-16px_rgba(0,59,149,0.1)] hover:border-vnf-blue/20 transition-all cursor-pointer hover:-translate-y-1"
            >
              {/* Card header with faint bg photo */}
              <div className={`p-8 sm:p-10 ${prog.color} text-white relative overflow-hidden`}>
                {/* Faint background photo */}
                <img
                  src={prog.bg}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity group-hover:opacity-30 transition-opacity duration-500"
                />
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 relative z-10 ring-1 ring-white/30 group-hover:bg-white/30 transition-all">
                  <prog.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3 relative z-10 leading-tight">{prog.title}</h3>
                <p className="text-sm text-white/80 leading-relaxed font-medium relative z-10">{prog.desc}</p>
              </div>

              <div className="p-8 sm:p-10">
                <div className="grid sm:grid-cols-2 gap-4">
                  {prog.features.map((f) => (
                    <div key={f} className="flex items-center gap-3 text-sm text-slate-600 font-bold group/feat">
                      <CheckCircle size={16} className="text-vnf-green shrink-0 group-hover/feat:scale-125 transition-transform" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <section className="bg-slate-50 py-20 lg:py-32 px-5 sm:px-6 mx-5 sm:mx-6 rounded-[2.5rem] border border-slate-200 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
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
