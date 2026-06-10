import React, { useState } from "react";
import { Lightbulb, Target, Users, CheckCircle2, ArrowUpRight, Sparkles, Zap, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: 0,
      icon: Lightbulb,
      title: "Simplifying Complexity",
      tagline: "Cognitive Architecture",
      desc: "We convert dense manuals, convoluted engineering specs, and legacy PDFs into bite-sized, scaffolded learning modules that decrease time-to-productivity.",
      color: "from-amber-500 to-orange-600",
      bgLight: "bg-amber-500/5",
      textLight: "text-amber-600",
      points: ["Micro-learning chunking strategies", "Interactive task simulators", "Context-aware reference sheets"]
    },
    {
      id: 1,
      icon: Target,
      title: "Business-Focused Learning",
      tagline: "KPI-Driven Results",
      desc: "We don't build vanity metrics training. Our platforms map performance assessment criteria directly to concrete corporate key performance indicators.",
      color: "from-indigo-500 to-blue-600",
      bgLight: "bg-indigo-500/5",
      textLight: "text-indigo-600",
      points: ["Reduction in error-rate loops", "Accelerated onboarding cycles", "Measurable alignment tracking"]
    },
    {
      id: 2,
      icon: Users,
      title: "Complete Design Team",
      tagline: "Fractional L&D Specialists",
      desc: "Instead of relying on a single generalist instructional designer, your team hooks directly into specialized multimedia assets, copywriters, and LMS engineers.",
      color: "from-emerald-500 to-teal-600",
      bgLight: "bg-emerald-500/5",
      textLight: "text-emerald-600",
      points: ["Dedicated UI/UX developers", "SCORM compliance auditors", "Agile sprint feedback workflows"]
    }
  ];

  return (
    <section id="about" className="py-28 pt-14 bg-slate-50 relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-slate-100/60 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-50/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Header */}
        <div className="max-w-3xl mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Zap size={12} className="fill-slate-800" /> About LumenFold
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            We transform locked tribal knowledge into{" "}
            <span className="bg-gradient-to-r from-slate-900 via-slate-600 to-slate-800 bg-clip-text text-transparent">
              high-retention digital systems.
            </span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Every elite enterprise holds incredibly valuable institutional assets inside the minds of its core staff. LumenFold architects the scaffolding, pipeline configurations, and dynamic training platforms needed to scale that engine without systemic breakdown.
          </p>
        </div>

        {/* Core Pillars Interactive Grid Workspace */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Option Controllers */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isSelected = activePillar === idx;
              
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(idx)}
                  className={`text-left p-6 rounded-2xl border transition-all duration-300 relative focus:outline-none ${
                    isSelected 
                      ? "bg-white border-slate-900 shadow-xl shadow-slate-900/5 translate-x-2" 
                      : "bg-slate-50/60 border-slate-100 hover:bg-slate-50 hover:border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isSelected ? `bg-gradient-to-br ${pillar.color} text-white shadow-md` : "bg-white text-slate-700 border border-slate-100"
                      }`}>
                        <Icon size={22} />
                      </div>
                      <div>
                        <span className={`text-[10px] font-bold tracking-widest uppercase ${isSelected ? pillar.textLight : "text-slate-400"}`}>
                          {pillar.tagline}
                        </span>
                        <h3 className="text-lg font-bold text-slate-900 mt-0.5">{pillar.title}</h3>
                      </div>
                    </div>
                    <ArrowUpRight size={18} className={`transition-transform duration-300 text-slate-400 ${isSelected ? "opacity-100 rotate-45 scale-110 text-slate-900" : "opacity-40"}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Showcase Matrix display */}
          <div className="lg:col-span-7 h-full min-h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="h-full bg-slate-950 text-white rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden border border-slate-800"
              >
                {/* Decorative absolute element tracking active module colors */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br ${pillars[activePillar].color} opacity-20 blur-2xl pointer-events-none`} />

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles size={14} className="text-indigo-400 animate-pulse" />
                    <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Operational Blueprints</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{pillars[activePillar].title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-xl">{pillars[activePillar].desc}</p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800/80">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Implementation Criteria</h4>
                  <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-3 text-xs font-medium text-slate-200">
                    {pillars[activePillar].points.map((point, index) => (
                      <li key={index} className="flex items-center gap-2.5 bg-slate-900/60 p-3 rounded-xl border border-slate-800/40">
                        <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Premium Bottom Utility Callout Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent opacity-60" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h3 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
                Build learning frameworks tailored for hyper-scale.
              </h3>
              <p className="mt-4 text-base text-slate-300 max-w-2xl leading-relaxed">
                Whether deploying zero-friction onboarding tracks or robust corporate governance infrastructure, LumenFold designs predictable training loops that guard your operations.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end w-full">
              {[
                "Corporate Training Pipelines",
                "Custom Architecture Maps",
                "Next-Gen LMS Deployments"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-white bg-white/5 backdrop-blur-xs px-5 py-3 rounded-xl border border-white/10 text-sm font-semibold shadow-xs">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;