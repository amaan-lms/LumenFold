import React from "react";
import {
  Search,
  FileText,
  PenTool,
  MonitorPlay,
  Rocket
} from "lucide-react";


const Process = () => {


  const steps = [

    {
      icon: Search,
      number: "01",
      title: "Discover & Analyze",
      description:
        "We understand your business goals, employee needs, existing documentation, SOPs, policies, and current training challenges."
    },


    {
      icon: FileText,
      number: "02",
      title: "Organize Knowledge",
      description:
        "We review internal information and transform complex processes into structured learning content and clear training pathways."
    },


    {
      icon: PenTool,
      number: "03",
      title: "Design Learning Systems",
      description:
        "Our instructional design team creates courses, onboarding programs, compliance training, and learning experiences."
    },


    {
      icon: MonitorPlay,
      number: "04",
      title: "Develop & Implement",
      description:
        "We build digital courses, LMS structures, assessments, and training resources ready for your employees."
    },


    {
      icon: Rocket,
      number: "05",
      title: "Improve & Scale",
      description:
        "We measure effectiveness, identify improvements, and help your learning systems grow with your organization."
    }

  ];



  return (

    <section
      id="process"
      className="py-24 bg-slate-50"
    >

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <div className="max-w-3xl mb-14">


          <span className="text-sm font-medium text-slate-600">
            Our Process
          </span>


          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-slate-900">

            From Business Knowledge To
            <span className="text-slate-600">
              {" "}Complete Learning Systems
            </span>

          </h2>


          <p className="mt-5 text-lg text-gray-600">

            We follow a structured instructional design approach
            to transform your company's knowledge into practical,
            scalable employee training solutions.

          </p>


        </div>






        {/* Steps */}

        <div className="space-y-8">


          {steps.map((step, index) => {


            const Icon = step.icon;


            return (

              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start hover:shadow-lg transition"
              >


                {/* Number */}

                <div className="text-4xl font-bold text-gray-200">

                  {step.number}

                </div>




                {/* Icon */}

                <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center">

                  <Icon
                    size={28}
                    className="text-slate-700"
                  />

                </div>




                {/* Content */}

                <div>

                  <h3 className="text-2xl font-semibold text-slate-900">

                    {step.title}

                  </h3>


                  <p className="mt-3 text-gray-600 max-w-3xl leading-relaxed">

                    {step.description}

                  </p>


                </div>


              </div>

            );

          })}


        </div>





        {/* CTA */}

        <div className="mt-16 bg-slate-900 rounded-3xl p-10 text-center">


          <h3 className="text-3xl font-semibold text-white">

            Ready to build a stronger learning system?

          </h3>


          <p className="mt-4 text-gray-300">

            Partner with a complete instructional design team
            that turns your knowledge into employee growth.

          </p>


          <button className="mt-7 px-8 py-3 rounded-xl bg-white text-slate-900 font-medium">

            Start Your Project

          </button>


        </div>



      </div>


    </section>

  );

};


export default Process;