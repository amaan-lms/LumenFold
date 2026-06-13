import React from "react";
import {
  Lightbulb,
  Target,
  Users,
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";


const About = () => {


  const features = [

    {
      icon: Lightbulb,
      title: "Simplify Complexity",
      text: "Transform complex knowledge into structured learning systems."
    },

    {
      icon: Target,
      title: "Business Driven",
      text: "Create training experiences aligned with measurable outcomes."
    },

    {
      icon: Users,
      title: "Expert Team",
      text: "Instructional designers, developers, and learning specialists."
    }

  ];



  return (

    <section
      className="
      py-28
      bg-slate-50
      overflow-hidden
      "
    >


      <div className="max-w-7xl mx-auto px-6">


        <div
          className="
          grid
          lg:grid-cols-2
          gap-20
          items-center
          "
        >






          {/* IMAGE LEFT */}


          <motion.div

            initial={{
              opacity: 0,
              x: -40
            }}

            whileInView={{
              opacity: 1,
              x: 0
            }}

            viewport={{
              once: true
            }}

            className="relative"

          >



            <div
              className="
              border
              border-slate-200
              bg-white
              p-5
              "
            >


              <img

                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"

                alt="Learning team"

                className="
                w-full
                h-[520px]
                object-cover
                "

              />


            </div>





            {/* Status Block */}


            <div

              className="
              absolute
              bottom-0
              right-0
              bg-slate-900
              text-white
              p-6
              "

            >


              <div className="flex gap-3 items-center">


                <CheckCircle2
                  size={26}
                  className="text-emerald-400"
                />



                <div>


                  <p className="
                  font-bold
                  ">
                    Enterprise Ready
                  </p>


                  <p className="
                  text-sm
                  text-slate-400
                  ">
                    Built for scalable teams
                  </p>


                </div>


              </div>


            </div>




          </motion.div>









          {/* CONTENT RIGHT */}



          <motion.div

            initial={{
              opacity: 0,
              x: 40
            }}

            whileInView={{
              opacity: 1,
              x: 0
            }}

            viewport={{
              once: true
            }}

          >



            <p

              className="
              text-sm
              uppercase
              tracking-[4px]
              font-bold
              text-indigo-600
              "

            >

              About LumenFold

            </p>





            <h2

              className="
              mt-6
              text-3xl
              md:text-5xl
              font-bold
              text-slate-900
              leading-tight
              "

            >

              Turning internal knowledge into

              <span className="block text-indigo-600">

                scalable learning systems.

              </span>


            </h2>






            <p

              className="
              mt-6
              text-lg
              text-slate-600
              leading-relaxed
              "

            >

              We help organizations convert expertise,
              processes, and operational knowledge into
              professional digital learning experiences.

            </p>








            {/* Features */}


            <div className="
            mt-10
            space-y-7
            ">


              {
                features.map((item, index) => {


                  const Icon = item.icon;


                  return (


                    <div

                      key={index}

                      className="
                    flex
                    gap-5
                    border-b
                    border-slate-200
                    pb-6
                    "

                    >



                      <div

                        className="
                      w-12
                      h-12
                      bg-slate-900
                      text-white
                      flex
                      items-center
                      justify-center
                      shrink-0
                      "

                      >


                        <Icon size={22} />


                      </div>





                      <div>


                        <h3

                          className="
                        text-lg
                        font-bold
                        text-slate-900
                        "

                        >

                          {item.title}


                        </h3>



                        <p

                          className="
                        mt-1
                        text-sm
                        text-slate-500
                        "

                        >

                          {item.text}


                        </p>



                      </div>



                    </div>


                  )


                })
              }


            </div>




          </motion.div>





        </div>



      </div>


    </section>

  );

};


export default About;