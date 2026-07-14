import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import useScrollReveal from '@/hooks/useScrollReveal';
import { Plane, GraduationCap, Award, BookOpen, FileCheck, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { useCMS } from '@/store/CMSContext';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'counselling',
    icon: GraduationCap,
    title: 'Career Counselling',
    description: 'Personalized guidance to help you choose the right country, university, and program based on your academic background, career goals, and budget.',
    features: [
      'One-on-one counselling sessions',
      'Profile evaluation and gap analysis',
      'Country and university shortlisting',
      'Career path guidance',
      'Budget planning assistance',
    ],
    color: 'from-blue-500 to-indigo-600',
    lightBg: 'bg-blue-50',
    borderColor: 'border-blue-100',
  },
  {
    id: 'admissions',
    icon: FileCheck,
    title: 'Admission Processing',
    description: 'Complete application management from document preparation to offer letter, ensuring you present the strongest possible application.',
    features: [
      'Document checklist and review',
      'Statement of Purpose guidance',
      'Application form assistance',
      'University communication handling',
      'Offer letter acceptance support',
    ],
    color: 'from-orange-500 to-amber-500',
    lightBg: 'bg-orange-50',
    borderColor: 'border-orange-100',
  },
  {
    id: 'visa',
    icon: Plane,
    title: 'Visa Guidance & Documentation',
    description: 'Expert visa application support with high success rate. We prepare you thoroughly for interviews and documentation.',
    features: [
      'Visa document preparation',
      'Financial documentation guidance',
      'Mock visa interviews',
      'Visa application submission support',
      'Post-visa assistance',
    ],
    color: 'from-green-500 to-emerald-600',
    lightBg: 'bg-green-50',
    borderColor: 'border-green-100',
  },
  {
    id: 'ielts',
    icon: BookOpen,
    title: 'IELTS Preparation',
    description: 'Professional IELTS training with experienced faculty in state-of-the-art classrooms. Small batches ensure personalized attention.',
    features: [
      'All four modules covered',
      'Regular mock tests',
      'One-on-one speaking practice',
      'Band score prediction',
      'Flexible batch timings',
    ],
    color: 'from-purple-500 to-violet-600',
    lightBg: 'bg-purple-50',
    borderColor: 'border-purple-100',
  },
  {
    id: 'pte',
    icon: BookOpen,
    title: 'PTE Preparation',
    description: 'Technology-based PTE training with AI-powered practice systems and individual online portals for comprehensive preparation.',
    features: [
      'Computer-based training',
      'AI scoring practice',
      'Individual portal access',
      'Pearson-aligned curriculum',
      'Unlimited practice tests',
    ],
    color: 'from-cyan-500 to-sky-600',
    lightBg: 'bg-cyan-50',
    borderColor: 'border-cyan-100',
  },
  {
    id: 'scholarship',
    icon: Award,
    title: 'Scholarship Guidance',
    description: 'Maximize your chances of securing scholarships with our expert guidance on applications, essays, and documentation.',
    features: [
      'Scholarship opportunity research',
      'Eligibility assessment',
      'Application essay guidance',
      'Document preparation',
      'Interview coaching',
    ],
    color: 'from-rose-500 to-pink-600',
    lightBg: 'bg-rose-50',
    borderColor: 'border-rose-100',
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
  hover: {
    y: -10,
    scale: 1.02,
    transition: { type: 'spring', stiffness: 400, damping: 25 }
  }
};

const Services = () => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [callbackPhone, setCallbackPhone] = useState('');
  const { cmsData } = useCMS();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleCallback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackPhone.trim()) {
      toast({ title: 'Please enter your phone number', variant: 'destructive' });
      return;
    }
    toast({ title: 'Callback requested!', description: 'Our counsellor will call you soon.' });
    setCallbackPhone('');
  };

  return (
    <Layout>
      <div className="page-transition bg-white overflow-hidden">

        {/* ── HERO WITH UNIQUE ANIMATED BLOBS ── */}
        <section className="relative py-24 md:py-40 bg-gradient-to-r from-orange-500 to-amber-500 overflow-hidden isolate">
          {/* Animated Background Elements */}
            <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[100px] -z-10 mix-blend-screen" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              x: [0, 100, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] -z-10 mix-blend-screen" 
          />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto"
            >


              <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
                {cmsData.servicesHeroTitle.includes('.') ? (
                  <>
                    {cmsData.servicesHeroTitle.split('.')[0]}.{' '}
                    <span className="relative inline-block">
                      <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                        {cmsData.servicesHeroTitle.split('.').slice(1).join('.').trim()}
                      </span>
                      <motion.span 
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="absolute bottom-2 left-0 h-4 bg-orange-200/50 -z-0 rounded-full"
                      />
                    </span>
                  </>
                ) : (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                    {cmsData.servicesHeroTitle}
                  </span>
                )}
              </motion.h1>

              <motion.p variants={itemVariants} className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium">
                {cmsData.servicesHeroDescription}
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mt-12">
                <Link
                  to="/free-consultation"
                  className="inline-flex items-center justify-center border border-white/50 hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300"
                >
                  Start Your Journey
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── REDESIGNED INTERACTIVE SERVICES GRID ── */}
        <section id="services" className="py-24 relative" ref={ref}>
          <div className="absolute inset-0 bg-white" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                Crafting Your <span className="text-orange-500">Global Future</span>
              </h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                Discover our comprehensive suite of services designed to make your study abroad aspirations a seamless reality.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const isHovered = hoveredCard === service.id;
                return (
                  <motion.div
                    key={service.id}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true }}
                    onHoverStart={() => setHoveredCard(service.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                    custom={index}
                    className="relative group cursor-pointer h-full"
                  >
                    {/* Glowing background effect on hover */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-br ${service.color} rounded-[2rem] blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
                    
                    <div className="relative h-full bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col">
                      
                      {/* Top Color Bar */}
                      <div className={`h-2 w-full bg-gradient-to-r ${service.color}`} />

                      <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center justify-between mb-8">
                          <motion.div 
                            animate={{ rotate: isHovered ? [0, -10, 10, 0] : 0 }}
                            transition={{ duration: 0.5 }}
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg relative`}
                          >
                            <service.icon className="h-8 w-8 text-white relative z-10" />
                            {/* Inner glow */}
                            <div className="absolute inset-0 bg-white/20 rounded-2xl blur-md"></div>
                          </motion.div>
                          
                          <motion.div 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                            className={`w-10 h-10 rounded-full ${service.lightBg} flex items-center justify-center`}
                          >
                            <ArrowRight className={`w-5 h-5 text-slate-700`} />
                          </motion.div>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                          {service.title}
                        </h3>

                        <p className="text-slate-500 text-base leading-relaxed mb-8 flex-grow">
                          {service.description}
                        </p>

                        <div className="mt-auto relative">
                          {/* Animated line separator */}
                          <motion.div 
                            className="h-[1px] bg-slate-100 mb-6 w-full origin-left"
                            animate={{ scaleX: isHovered ? 1 : 0.3 }}
                            transition={{ duration: 0.4 }}
                          />

                          <ul className="space-y-3">
                            <AnimatePresence>
                              {service.features.slice(0, 3).map((feature, i) => (
                                <motion.li 
                                  key={i}
                                  initial={{ opacity: 0.7, x: 0 }}
                                  animate={{ 
                                    opacity: isHovered ? 1 : 0.7,
                                    x: isHovered ? 4 : 0
                                  }}
                                  transition={{ delay: i * 0.05 }}
                                  className="flex items-start gap-3 text-sm font-medium text-slate-600"
                                >
                                  <motion.div
                                    animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
                                    transition={{ delay: i * 0.1, duration: 0.3 }}
                                  >
                                    <CheckCircle2 className={`w-5 h-5 text-orange-500 shrink-0`} />
                                  </motion.div>
                                  {feature}
                                </motion.li>
                              ))}
                            </AnimatePresence>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── DYNAMIC CTA SECTION ── */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
            >
              {/* Dynamic CTA Background */}
              <motion.div 
                animate={{ 
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_50%,_rgba(249,115,22,0.4),_transparent_60%)]" 
              />
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/20 rounded-full blur-[80px]" />

              <div className="relative z-10">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
                >
                  Ready to Take the <span className="text-orange-400">First Step?</span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-slate-300 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light"
                >
                  Request a callback today and let our experts map out your success story.
                </motion.p>

                <motion.form 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  onSubmit={handleCallback} 
                  className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto bg-white/10 p-2 rounded-full backdrop-blur-md border border-white/20"
                >
                  <Input
                    type="tel"
                    placeholder="Enter your phone number..."
                    value={callbackPhone}
                    onChange={(e) => setCallbackPhone(e.target.value)}
                    className="flex-grow h-14 bg-transparent border-none text-white placeholder:text-slate-400 focus-visible:ring-0 text-lg px-6 rounded-full"
                  />
                  <Button
                    type="submit"
                    className="h-14 px-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                  >
                    Get a Call
                  </Button>
                </motion.form>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Services;
