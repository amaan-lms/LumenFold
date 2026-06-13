import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react";


const Contact = () => {


  return (

    <section
      id="contact"
      className="py-20 md:py-28 bg-slate-50"
    >

      <div className="max-w-7xl mx-auto px-5 sm:px-6">


        {/* Heading */}

        <div className="max-w-3xl mb-12 md:mb-16">


          <p
            className="
            text-xs
            sm:text-sm
            uppercase
            tracking-[3px]
            font-bold
            text-indigo-600
            "
          >
            Contact Us
          </p>



          <h2
            className="
            mt-4
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-bold
            text-slate-900
            leading-tight
            "
          >

            Let's build better

            <span className="text-indigo-600">
              {" "}learning systems.
            </span>

          </h2>



          <p
            className="
            mt-5
            text-base
            md:text-lg
            text-slate-600
            leading-relaxed
            "
          >

            Tell us about your training goals, internal knowledge,
            or employee challenges. We will help design the right solution.

          </p>


        </div>






        <div
          className="
          grid
          lg:grid-cols-2
          gap-10
          md:gap-16
          items-start
          " 
        >







          {/* LEFT INFO */}


          <div
            className="
            bg-slate-950
            p-7
            sm:p-10
            md:p-12
            text-white
            "
          >


            <h3
              className="
              text-2xl
              md:text-3xl
              font-bold
              "
            >

              Start A Conversation

            </h3>



            <p
              className="
              mt-4
              text-sm
              md:text-base
              text-slate-400
              leading-relaxed
              "
            >

              From onboarding systems to complete learning
              architectures, our team helps organizations scale knowledge.

            </p>






            <div
              className="
              mt-10
              md:mt-12
              space-y-7
              "
            >




              {[
                {
                  icon: Mail,
                  title:"Email",
                  value:"hello@lumenfold.com"
                },
                {
                  icon: Phone,
                  title:"Phone",
                  value:"+1 (000) 000-0000"
                },
                {
                  icon: MapPin,
                  title:"Location",
                  value:"Serving Businesses Worldwide"
                }

              ].map((item,index)=>{


                const Icon=item.icon;


                return (

                  <div
                    key={index}
                    className="flex gap-4 items-start"
                  >

                    <Icon
                      size={22}
                      className="text-indigo-400 mt-1 shrink-0"
                    />


                    <div>

                      <p className="text-sm text-slate-400">
                        {item.title}
                      </p>


                      <p className="mt-1 text-sm sm:text-base font-medium">
                        {item.value}
                      </p>

                    </div>


                  </div>

                )


              })}



            </div>


          </div>









          {/* FORM */}


          <form
            className="
            space-y-6
            "
          >




            {[
              {
                label:"Full Name",
                placeholder:"Your name",
                type:"text"
              },
              {
                label:"Work Email",
                placeholder:"company@email.com",
                type:"email"
              },
              {
                label:"Company",
                placeholder:"Company name",
                type:"text"
              }

            ].map((field,index)=>(


              <div key={index}>


                <label className="text-sm text-slate-600">

                  {field.label}

                </label>


                <input

                  type={field.type}

                  placeholder={field.placeholder}

                  className="
                  mt-3
                  w-full
                  bg-transparent
                  border-b
                  border-slate-300
                  py-3
                  sm:py-4
                  text-sm
                  sm:text-base
                  outline-none
                  focus:border-indigo-600
                  "

                />


              </div>


            ))}






            <div>


              <label className="text-sm text-slate-600">
                Message
              </label>


              <textarea

                rows="4"

                placeholder="Tell us about your learning requirements"

                className="
                mt-3
                w-full
                bg-transparent
                border-b
                border-slate-300
                py-3
                sm:py-4
                text-sm
                sm:text-base
                outline-none
                focus:border-indigo-600
                "

              />


            </div>







            <button

              className="
              w-full
              sm:w-auto
              flex
              items-center
              justify-center
              gap-3
              bg-slate-900
              text-white
              px-8
              py-4
              font-semibold
              hover:bg-indigo-600
              transition
              "

            >

              Send Message

              <ArrowRight size={18}/>


            </button>





          </form>





        </div>




      </div>


    </section>

  );

};


export default Contact;