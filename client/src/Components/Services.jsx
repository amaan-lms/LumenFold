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
        "Transform business knowledge into structured employee learning systems."
    },

    {
      icon: MonitorPlay,
      title: "Digital Course Development",
      description:
        "Create professional online courses with clear learning journeys."
    },

    {
      icon: Users,
      title: "Employee Onboarding",
      description:
        "Build onboarding systems that accelerate employee productivity."
    },

    {
      icon: ShieldCheck,
      title: "Compliance Training",
      description:
        "Convert policies and requirements into simple training experiences."
    },

    {
      icon: FileText,
      title: "SOP Conversion",
      description:
        "Turn complex documents into scalable learning content."
    },

    {
      icon: Layers,
      title: "LMS Architecture",
      description:
        "Design organized learning platforms built for growth."
    },

    {
      icon: Search,
      title: "Training Analysis",
      description:
        "Identify gaps and improve existing learning programs."
    },

    {
      icon: TrendingUp,
      title: "Leadership Development",
      description:
        "Create programs that develop stronger teams and leaders."
    },

    {
      icon: Settings,
      title: "Custom Learning Systems",
      description:
        "Build solutions aligned with your business operations."
    }

  ];



  return (

    <section
      id="services"
      className="py-24 bg-slate-100"
    >

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <div className="max-w-3xl mb-16">


          <p className="
          text-sm
          uppercase
          tracking-[3px]
          font-bold
          text-indigo-600
          ">
            Our Services
          </p>



          <h2 className="
          mt-5
          text-4xl
          md:text-5xl
          font-bold
          text-slate-900
          leading-tight
          ">

            Learning systems designed for modern organizations.

          </h2>



          <p className="
          mt-5
          text-lg
          text-slate-600
          leading-relaxed
          ">

            We help companies organize knowledge, improve onboarding,
            and build scalable employee training experiences.

          </p>


        </div>





        {/* Services */}

        <div className="
        grid
        md:grid-cols-3
        gap-x-10
        gap-y-12
        ">


          {
            services.map((service,index)=>{


              const Icon = service.icon;


              return (

                <div
                  key={index}
                  className="
                  group
                  border-t
                  border-slate-200
                  pt-8
                  hover:border-indigo-600
                  transition
                  "
                >


                  <div className="
                  flex
                  items-center
                  justify-between
                  mb-6
                  ">


                    <Icon
                      size={28}
                      className="
                      text-indigo-600
                      "
                    />


                    <span className="
                    text-xs
                    text-slate-400
                    font-bold
                    ">
                      0{index+1}
                    </span>


                  </div>



                  <h3 className="
                  text-xl
                  font-bold
                  text-slate-900
                  ">

                    {service.title}

                  </h3>



                  <p className="
                  mt-3
                  text-slate-600
                  leading-relaxed
                  text-sm
                  ">

                    {service.description}

                  </p>


                </div>

              )


            })
          }


        </div>






        {/* CTA */}

        <div className="
        mt-20
        bg-slate-950
        p-12
        flex
        flex-col
        md:flex-row
        justify-between
        items-center
        gap-8
        ">


          <div>


            <h3 className="
            text-3xl
            font-bold
            text-white
            ">

              Build your learning infrastructure.

            </h3>


            <p className="
            mt-3
            text-slate-400
            max-w-xl
            ">

              Partner with a team that transforms knowledge into
              scalable digital learning systems.

            </p>


          </div>



          <button
            className="
            bg-white
            text-slate-900
            px-8
            py-4
            font-semibold
            hover:bg-indigo-600
            hover:text-white
            transition
            "
          >

            Start A Conversation

          </button>



        </div>


      </div>


    </section>

  );

};


export default Services;