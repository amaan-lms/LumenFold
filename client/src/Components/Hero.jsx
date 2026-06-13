import React from "react";
import { ArrowRight, BookOpen, Users, Layers, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {

  const highlights = [
    {
      icon: Users,
      title: "Enterprise Teams",
      text: "Built for HR & operations"
    },
    {
      icon: Layers,
      title: "Learning Systems",
      text: "Structured digital training"
    },
    {
      icon: BookOpen,
      title: "Knowledge Design",
      text: "High retention learning"
    }
  ];


  return (

    <section
      id="home"
      className="min-h-screen flex items-center bg-white py-24 overflow-hidden"
    >

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">


        {/* LEFT CONTENT */}

        <motion.div
          initial={{opacity:0,x:-40}}
          animate={{opacity:1,x:0}}
          transition={{duration:.6}}
          className="lg:col-span-7"
        >


          {/* <p className="text-sm font-bold uppercase tracking-[3px] text-indigo-600">
            LumenFold Learning Architecture
          </p> */}



          <h1 className="mt-6 text-3xl md:text-5xl font-bold capitalize leading-[1.08] text-slate-900">

            Transform company knowledge into

            <span className="block text-indigo-600">
              scalable learning systems.
            </span>

          </h1>



          <p className="mt-7 text-md md:text-lg leading-relaxed text-slate-600 max-w-xl">

            We convert SOPs, internal expertise, and operational knowledge
            into structured digital learning experiences designed for growth.

          </p>



          <div className="mt-9 flex gap-4 flex-wrap">


            <button
              className="
              flex items-center gap-3
              bg-slate-900 
              text-white
              px-7 py-4
              font-semibold
              hover:bg-indigo-600
              transition
              "
            >

              Build Your Training System

              <ArrowRight size={18}/>

            </button>



            <button
              className="
              border border-slate-300
              px-7 py-4
              font-semibold
              text-slate-700
              hover:border-slate-900
              transition
              "
            >

              Explore Services

            </button>


          </div>




          {/* Highlights */}

          <div className="mt-14 grid grid-cols-3 border-t border-slate-200 pt-8 gap-8">


            {highlights.map((item,index)=>{

              const Icon=item.icon;


              return (

                <div key={index}>


                  <Icon
                    size={22}
                    className="text-indigo-600 mb-4"
                  />


                  <h3 className="font-bold text-slate-900 text-sm">

                    {item.title}

                  </h3>


                  <p className="text-xs text-slate-500 mt-2">

                    {item.text}

                  </p>


                </div>

              )

            })}


          </div>



        </motion.div>





        {/* RIGHT VISUAL */}
{/* RIGHT VISUAL */}

<motion.div
  initial={{opacity:0,x:40}}
  animate={{opacity:1,x:0}}
  transition={{duration:.6}}
  className="lg:col-span-5 relative"
>

  <div className="
    relative
    bg-slate-950
    p-8
    shadow-2xl
    overflow-hidden
  ">


    {/* Background effect */}
    <div className="
      absolute
      top-0
      right-0
      w-72
      h-72
      bg-indigo-500/20
      blur-3xl
    "/>



    <div className="relative z-10">


      {/* Header */}

      <div className="
        flex
        justify-between
        items-center
        border-b
        border-white/10
        pb-6
      ">


        <div>

          <p className="
            text-xs
            uppercase
            tracking-[3px]
            text-slate-400
          ">
            Learning Infrastructure
          </p>


          <h3 className="
            text-xl
            font-bold
            text-white
            mt-2
          ">
            Knowledge Engine
          </h3>


        </div>



        <div className="
          flex
          items-center
          gap-2
          text-emerald-400
          text-xs
          font-bold
        ">

          <span className="
            w-2
            h-2
            bg-emerald-400
            animate-pulse
          "/>

          ACTIVE

        </div>


      </div>




      {/* Process */}

      <div className="mt-8 space-y-6">


        {[
          {
            title:"Raw Knowledge",
            desc:"SOPs, documents & expertise"
          },
          {
            title:"Learning Architecture",
            desc:"Structured training framework"
          },
          {
            title:"Digital Deployment",
            desc:"LMS ready experiences"
          }

        ].map((item,index)=>(


          <div
            key={index}
            className="
              relative
              flex
              gap-5
              items-start
            "
          >


            {/* line */}

            {index !== 2 && (

              <div className="
                absolute
                left-5
                top-10
                h-12
                w-px
                bg-white/10
              "/>

            )}



            <div className="
              w-10
              h-10
              bg-white
              text-slate-900
              flex
              items-center
              justify-center
              text-sm
              font-bold
              shrink-0
            ">

              0{index+1}

            </div>



            <div>

              <h4 className="
                text-white
                font-semibold
              ">

                {item.title}

              </h4>


              <p className="
                text-sm
                text-slate-400
                mt-1
              ">

                {item.desc}

              </p>


            </div>


          </div>


        ))}


      </div>




      {/* Footer */}

      <div className="
        mt-10
        border-t
        border-white/10
        pt-6
        flex
        items-center
        gap-3
      ">


        <CheckCircle2
          size={22}
          className="text-emerald-400"
        />


        <p className="
          text-sm
          text-slate-200
          font-semibold
        ">

          Enterprise LMS Deployment Ready

        </p>


      </div>


    </div>


  </div>


</motion.div>



      </div>


    </section>

  );
};


export default Hero;