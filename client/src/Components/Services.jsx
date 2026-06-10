import React from "react";
import {
  BookOpen,
  MonitorPlay,
  Users,
  ShieldCheck,
  FileText,
  Layers,
  Search,
  TrendingUp,
  Settings
} from "lucide-react";


const Services = () => {


  const services = [

    {
      icon: BookOpen,
      title: "Corporate Instructional Design",
      description:
        "Design structured learning experiences that transform internal business knowledge into effective employee training programs."
    },


    {
      icon: MonitorPlay,
      title: "Online Course Development",
      description:
        "Create engaging digital courses with clear learning paths, content structure, assessments, and professional design."
    },


    {
      icon: Users,
      title: "Employee Onboarding Systems",
      description:
        "Build onboarding frameworks that help new employees understand processes, roles, and company culture faster."
    },


    {
      icon: ShieldCheck,
      title: "Compliance & Policy Training",
      description:
        "Convert compliance requirements and company policies into clear training systems employees can easily follow."
    },


    {
      icon: FileText,
      title: "SOP To Course Conversion",
      description:
        "Transform complex SOP documents and operational processes into organized learning experiences."
    },


    {
      icon: Layers,
      title: "LMS & Course Structure Consulting",
      description:
        "Plan LMS architecture, course organization, learning journeys, and scalable training systems."
    },


    {
      icon: Search,
      title: "Training Audits & Improvement Plans",
      description:
        "Analyze existing training programs and identify opportunities to improve effectiveness and engagement."
    },


    {
      icon: TrendingUp,
      title: "Leadership & Professional Development",
      description:
        "Develop learning programs that support leadership growth, communication, and professional skills."
    },


    {
      icon: Settings,
      title: "Custom Learning Systems",
      description:
        "Create customized learning solutions designed around your company's goals, teams, and operational needs."
    },


  ];



  return (

    <section
      id="services"
      className="py-24 bg-slate-50"
    >

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <div className="max-w-3xl mb-14">

          <span className="text-sm text-slate-600 font-medium">
            Our Services
          </span>


          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-slate-900">

            Building Learning Systems That Help Businesses Grow

          </h2>


          <p className="mt-5 text-lg text-gray-600">

            From onboarding to compliance, LumenFold helps organizations
            organize knowledge and create professional employee learning
            experiences.

          </p>

        </div>




        {/* Service Cards */}

        <div className="grid md:grid-cols-3 gap-8">


          {services.map((service, index) => {

            const Icon = service.icon;


            return (

              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-lg transition"
              >


                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-6">

                  <Icon
                    size={26}
                    className="text-slate-700"
                  />

                </div>



                <h3 className="text-xl font-semibold text-slate-900">

                  {service.title}

                </h3>



                <p className="mt-3 text-gray-600 leading-relaxed">

                  {service.description}

                </p>


              </div>

            );

          })}


        </div>




        {/* Bottom CTA */}

        <div className="mt-16 bg-slate-900 rounded-3xl p-10 text-center">


          <h3 className="text-3xl font-semibold text-white">

            Need a complete learning system for your organization?

          </h3>


          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">

            Partner with an instructional design team that helps you
            convert knowledge into scalable training solutions.

          </p>


          <button className="mt-7 px-8 py-3 bg-white text-slate-900 rounded-xl font-medium hover:bg-gray-100 transition">

            Start A Conversation

          </button>


        </div>



      </div>


    </section>

  );

};


export default Services;