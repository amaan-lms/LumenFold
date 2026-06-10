import React, { useState, useEffect } from "react";
import { ArrowRight, BookOpen, Users, Layers, CheckCircle2, Shield, TrendingUp, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  // Local state to power the right-side interactive preview widget
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState([35, 60, 92]);

  // Simulate subtle system activity on the dashboard graphic
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => prev.map(p => Math.min(100, Math.max(10, p + Math.floor(Math.random() * 7) - 3))));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const flowSteps = [
    { label: "Raw Assets", detail: "SOPs, Policies & PDFs", color: "bg-amber-500" },
    { label: "LumenFold Engine", detail: "Instructional Blueprinting", color: "bg-indigo-600" },
    { label: "Production", detail: "Interactive Interactive Modules", color: "bg-emerald-500" }
  ];

  return (
    <section
      id="home"
      className="min-h-screen pt-26 pb-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-50 via-white to-slate-100/50 flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center w-full">

        {/* Left Content Column */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7"
        >
         

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] text-slate-900 tracking-tight">
            Turning raw company data into{" "}
            <span className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-700 bg-clip-text text-transparent">
              clear learning systems.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
            LumenFold helps businesses transform loose SOPs, critical compliance criteria, and tribal knowledge into high-retention digital training ecosystems built for operational scale.
          </p>

          {/* Interactive Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="group flex items-center gap-2 bg-slate-900 text-white px-7 py-4 rounded-xl font-semibold shadow-lg shadow-slate-900/10 hover:bg-slate-800 active:scale-[0.98] transition-all">
              Build Your Training System
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="px-7 py-4 rounded-xl border border-slate-200 text-slate-700 font-semibold bg-white hover:bg-slate-50 hover:border-slate-300 active:scale-[0.98] transition-all">
              Explore Services
            </button>
          </div>

          {/* Value Highlights */}
          <div className="mt-14 pt-8 border-t border-slate-200/60 grid grid-cols-3 gap-6">
            <div className="group cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Users size={16} />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Corporate Teams</h3>
              <p className="text-xs text-slate-500 mt-1">Built for HR & Ops scale</p>
            </div>

            <div className="group cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Layers size={16} />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Modular Systems</h3>
              <p className="text-xs text-slate-500 mt-1">Plug-and-play course architecture</p>
            </div>

            <div className="group cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-3 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <BookOpen size={16} />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">High Retention</h3>
              <p className="text-xs text-slate-500 mt-1">Backed by cognitive design</p>
            </div>
          </div>
        </motion.div>

        {/* Right Visual Dashboard Simulation */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          {/* Subtle background glow decorative elements */}
          <div className="absolute -inset-4 bg-indigo-500/5 rounded-[40px] blur-2xl" />

          {/* Main Simulated Panel Frame */}
          <div className="relative bg-white rounded-3xl shadow-xl border border-slate-100 p-6 overflow-hidden">
            
            {/* Simulation Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-100" />
                <span className="text-xs font-semibold text-slate-400 ml-2 tracking-wider uppercase">LumenFold Dashboard UI</span>
              </div>
              <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" /> ENGINE ACTIVE
              </span>
            </div>

            {/* Pipeline Tabs Selector */}
            <div className="grid grid-cols-3 gap-1 bg-slate-100/70 p-1 rounded-xl mb-5 text-center">
              {flowSteps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`py-2 text-xs font-bold rounded-lg transition-all ${
                    activeTab === index 
                      ? "bg-white text-slate-900 shadow-xs" 
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {step.label}
                </button>
              ))}
            </div>

            {/* Dynamic Card Display based on active sequence state */}
            <div className="min-h-[140px] bg-slate-50/50 rounded-2xl p-4 border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-2 h-2 rounded-full ${flowSteps[activeTab].color}`} />
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Stream</span>
                </div>
                <h4 className="font-bold text-slate-900 text-base">{flowSteps[activeTab].detail}</h4>
              </div>

              {/* Fake progress tracking visualization */}
              <div className="space-y-2 mt-4">
                <div className="flex justify-between text-[11px] font-semibold text-slate-500">
                  <span>Compilation Density</span>
                  <span>{progress[activeTab]}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: `${progress[activeTab]}%` }}
                    transition={{ type: "spring", stiffness: 60 }}
                    className={`h-full ${flowSteps[activeTab].color}`} 
                  />
                </div>
              </div>
            </div>

            {/* Live Infrastructure Checklist Tracking Mock */}
            <div className="mt-5 space-y-3">
              <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wide">Deployment Pipeline</h5>
              
              <div className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-xl">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span className="text-xs font-semibold text-slate-700">SOP Material Parsed</span>
                </div>
                <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500 font-medium">Complete</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-xl">
                <div className="flex items-center gap-3">
                  <Shield size={16} className="text-indigo-500 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-700">SCORM & LMS Matrix Validation</span>
                </div>
                <span className="text-[10px] bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded font-bold">Processing</span>
              </div>
            </div>

            {/* Mini Analytic Footer Graphic */}
            {/* <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-500">
                <TrendingUp size={14} className="text-emerald-500" />
                <span>Ops Team Onboarding Delta</span>
              </div>
              <span className="font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">+42% efficiency</span>
            </div> */}

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;