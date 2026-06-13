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
        "We understand your business goals, internal knowledge, SOPs, and current training challenges."
    },

    {
      icon: FileText,
      number: "02",
      title: "Organize Knowledge",
      description:
        "We transform complex information into structured learning paths and clear employee journeys."
    },

    {
      icon: PenTool,
      number: "03",
      title: "Design Learning Systems",
      description:
        "We create instructional frameworks, courses, onboarding programs, and learning experiences."
    },

    {
      icon: MonitorPlay,
      number: "04",
      title: "Develop & Deploy",
      description:
        "We build digital courses, LMS structures, assessments, and scalable training resources."
    },

    {
      icon: Rocket,
      number: "05",
      title: "Optimize & Scale",
      description:
        "We improve performance and evolve your learning system as your organization grows."
    }

  ];



  return (

    <section
      id="process"
      className="py-28 bg-white overflow-hidden"
    >


      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <div className="max-w-3xl mb-20">


          <p className="
          text-sm
          uppercase
          tracking-[4px]
          font-bold
          text-indigo-600
          ">
            Our Process
          </p>



          <h2 className="
          mt-5
          text-3xl
          md:text-5xl
          font-bold
          text-slate-900
          leading-tight
          ">

            Building learning systems through a structured process.

          </h2>



          <p className="
          mt-5
          text-lg
          text-slate-600
          ">

            From understanding your knowledge to deploying complete
            employee learning ecosystems.

          </p>


        </div>






        {/* Process */}

        <div className="relative">


          {/* Center Line */}

          <div className="
          hidden
          lg:block
          absolute
          left-1/2
          top-0
          bottom-0
          w-px
          bg-slate-300
          " />




          <div className="space-y-24">


          {
            steps.map((step,index)=>{


              const Icon = step.icon;

              const left = index % 2 === 0;



              return (


                <div
                  key={index}
                  className="
                  grid
                  lg:grid-cols-2
                  gap-12
                  items-center
                  relative
                  "
                >





                  {/* Content */}


                  <div
                    className={`
                    ${
                    left
                    ? "lg:text-right lg:pr-20"
                    : "lg:order-2 lg:pl-20"
                    }
                    `}
                  >



                    <div className="
                    flex
                    items-center
                    gap-5
                    mb-5
                    ">


                      <div className="
                      w-14
                      h-14
                      bg-indigo-600
                      text-white
                      flex
                      items-center
                      justify-center
                      ">


                        <Icon size={25}/>


                      </div>



                      <h3 className="
                      text-3xl
                      font-bold
                      text-slate-900
                      ">

                        {step.title}

                      </h3>


                    </div>




                    <p className="
                    text-slate-600
                    text-lg
                    leading-relaxed
                    ">

                      {step.description}

                    </p>


                  </div>








                  {/* Number Center */}


                  <div className="
                  absolute
                  left-1/2
                  -translate-x-1/2
                  hidden
                  lg:flex
                  w-20
                  h-20
                  bg-slate-900
                  text-white
                  items-center
                  justify-center
                  text-2xl
                  font-bold
                  ">


                    {step.number}


                  </div>








                  {/* Side Graphic */}

                  <div
                    className={`
                    ${
                    left
                    ? "lg:order-2"
                    : "lg:order-1"
                    }
                    `}
                  >


                    <div className="
                    border
                    border-slate-200
                    bg-white
                    p-8
                    ">


                      <span className="
                      text-xs
                      uppercase
                      tracking-widest
                      text-slate-400
                      font-bold
                      ">

                        Step {step.number}

                      </span>



                      <h4 className="
                      mt-4
                      text-xl
                      font-bold
                      text-slate-900
                      ">

                        {step.title}

                      </h4>


                      <div className="
                      mt-5
                      h-1
                      w-20
                      bg-indigo-600
                      " />


                    </div>


                  </div>



                </div>


              )


            })
          }


          </div>


        </div>


      </div>


    </section>


  );

};


export default Process;