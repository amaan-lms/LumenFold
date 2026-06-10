import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, BookOpen, Layers, Users, Shield, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { title: "Corporate Instructional Design", desc: "Custom framework strategies.", icon: Layers },
    { title: "Online Course Development", desc: "Interactive digital experiences.", icon: BookOpen },
    { title: "Employee Onboarding Systems", desc: "Seamless team integration.", icon: Users },
    { title: "Compliance Training", desc: "Risk management & regulations.", icon: Shield },
    { title: "LMS Consulting", desc: "Architecture & integration solutions.", icon: GraduationCap },
  ];

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white font-bold transition-transform group-hover:scale-105">
            L
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">
              LumenFold
            </h1>
            <p className="text-xs font-medium text-slate-500 transition-colors group-hover:text-slate-700">
              Learning Systems
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
          <a href="#home" className="relative py-2 hover:text-slate-900 transition-colors group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all group-hover:w-full" />
          </a>
          
          <a href="#about" className="relative py-2 hover:text-slate-900 transition-colors group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all group-hover:w-full" />
          </a>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 py-2 hover:text-slate-900 transition-colors focus:outline-none">
              Services
              <motion.div
                animate={{ rotate: servicesOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={14} />
              </motion.div>
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[400px] bg-white shadow-xl rounded-2xl border border-gray-100 p-3 grid gap-1 grid-cols-1"
                >
                  {services.map((service, idx) => {
                    const Icon = service.icon;
                    return (
                      <a
                        key={idx}
                        href={`#service-${idx}`}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                      >
                        <div className="p-2 rounded-lg bg-slate-50 text-slate-600 group-hover/item:bg-slate-900 group-hover/item:text-white transition-colors">
                          <Icon size={16} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 text-sm">{service.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{service.desc}</p>
                        </div>
                      </a>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#process" className="relative py-2 hover:text-slate-900 transition-colors group">
            Process
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all group-hover:w-full" />
          </a>

          <a href="#contact" className="relative py-2 hover:text-slate-900 transition-colors group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all group-hover:w-full" />
          </a>

          {/* CTA */}
          <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-slate-800 shadow-md shadow-slate-900/10 active:scale-95 transition-all">
            Book Consultation
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-700 hover:bg-slate-50 rounded-lg focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-[65px] bg-slate-900/20 backdrop-blur-xs md:hidden"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full bg-white border-b border-gray-100 px-6 py-6 flex flex-col gap-4 md:hidden font-medium text-slate-700 shadow-xl"
            >
              <a href="#home" onClick={() => setIsOpen(false)} className="py-2 text-lg border-b border-gray-50">Home</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="py-2 text-lg border-b border-gray-50">About</a>
              
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full flex items-center justify-between py-2 text-lg border-b border-gray-50 focus:outline-none"
                >
                  <span>Services</span>
                  <motion.div animate={{ rotate: servicesOpen ? 180 : 0 }}>
                    <ChevronDown size={18} />
                  </motion.div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ height: servicesOpen ? "auto" : 0 }}
                  className="overflow-hidden pl-4 flex flex-col bg-slate-50/50 rounded-xl mt-2"
                >
                  {services.map((service, idx) => (
                    <a
                      key={idx}
                      href={`#service-${idx}`}
                      onClick={() => setIsOpen(false)}
                      className="py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      {service.title}
                    </a>
                  ))}
                </motion.div>
              </div>

              <a href="#process" onClick={() => setIsOpen(false)} className="py-2 text-lg border-b border-gray-50">Process</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="py-2 text-lg border-b border-gray-50">Contact</a>

              <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold mt-2 shadow-lg shadow-slate-900/10 active:scale-[0.98] transition-all">
                Book Consultation
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;