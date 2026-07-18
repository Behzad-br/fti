import { motion } from 'framer-motion';
import { Award, ShieldCheck, Star, Sparkles, Zap, Building2, Globe2 } from 'lucide-react';

const PartnershipSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { type: "spring", stiffness: 120, damping: 20 }
        }
    };

    return (
        <section className="py-32 relative overflow-hidden bg-white">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-orange-50 rounded-full blur-[100px] opacity-70 animate-[pulse_8s_ease-in-out_infinite]" />
                <div className="absolute top-[20%] -right-[20%] w-[60vw] h-[60vw] bg-orange-100/50 rounded-full blur-[120px] opacity-60" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    className="text-center max-w-4xl mx-auto mb-20 md:mb-24"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tighter">
                        Official IELTS <br/>
                        <span className="relative inline-block px-1">
                             <div className="absolute inset-0 bg-orange-400/20 blur-xl rounded-full" />
                             <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 font-black">Registration Center</span>
                        </span>
                        <br />
                        of <span className="text-slate-900 border-b-4 border-orange-500 pb-1">AEO & British Council</span>
                    </h2>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* British Council Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -10 }}
                        className="bg-white p-6 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(255,165,0,0.08)] border-2 border-orange-50 flex flex-col items-center justify-center group relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-400 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        <div className="absolute -right-20 -top-20 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        
                        <div className="h-20 md:h-24 flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-500">
                            <img 
                                src="/british-council-logo.png" 
                                alt="British Council" 
                                className="h-full w-auto object-contain drop-shadow-sm rounded-lg scale-[1.7]" 
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/British_Council_logo.svg/512px-British_Council_logo.svg.png';
                                }}
                            />
                        </div>
                        
                        <div className="flex flex-col items-center gap-3">
                            <span className="text-xs font-black text-orange-600 uppercase tracking-[0.2em] bg-white px-4 py-2 rounded-full border border-orange-200 shadow-sm">Platinum Partner</span>
                        </div>
                    </motion.div>

                    {/* AEO Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -10 }}
                        className="bg-white p-6 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(255,165,0,0.08)] border-2 border-orange-50 flex flex-col items-center justify-center group relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-400 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="h-20 md:h-24 flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-500">
                            <img 
                                src="/aeo-logo.png" 
                                alt="AEO Pakistan" 
                                className="h-full w-auto object-contain drop-shadow-sm rounded-lg scale-[1.2]" 
                            />
                        </div>

                        <div className="flex flex-col items-center gap-3">
                            <span className="text-xs font-black text-orange-600 uppercase tracking-[0.2em] bg-white px-4 py-2 rounded-full border border-orange-200 shadow-sm">Official Center</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default PartnershipSection;
