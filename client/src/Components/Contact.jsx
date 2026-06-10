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
      className="py-24 bg-white"
    >

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <div className="max-w-3xl mb-14">

          <span className="text-sm font-medium text-slate-600">
            Contact Us
          </span>


          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-slate-900">

            Let's Build Better Learning Systems Together

          </h2>


          <p className="mt-5 text-lg text-gray-600">

            Tell us about your training goals, employee challenges,
            or internal knowledge systems. Our team will help you
            design a solution that fits your organization.

          </p>


        </div>





        <div className="grid md:grid-cols-2 gap-12">



          {/* Contact Info */}

          <div className="bg-slate-900 rounded-3xl p-10 text-white">


            <h3 className="text-3xl font-semibold">

              Start A Conversation

            </h3>


            <p className="mt-4 text-gray-300">

              Whether you need onboarding, compliance training,
              or a complete learning strategy, we can help.

            </p>




            <div className="mt-10 space-y-6">



              <div className="flex gap-4 items-center">

                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">

                  <Mail size={22}/>

                </div>


                <div>

                  <p className="text-sm text-gray-400">
                    Email
                  </p>

                  <p>
                    hello@lumenfold.com
                  </p>

                </div>


              </div>





              <div className="flex gap-4 items-center">


                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">

                  <Phone size={22}/>

                </div>


                <div>

                  <p className="text-sm text-gray-400">
                    Phone
                  </p>

                  <p>
                    +1 (000) 000-0000
                  </p>

                </div>


              </div>





              <div className="flex gap-4 items-center">


                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">

                  <MapPin size={22}/>

                </div>


                <div>

                  <p className="text-sm text-gray-400">
                    Location
                  </p>

                  <p>
                    Serving Businesses Worldwide
                  </p>

                </div>


              </div>



            </div>


          </div>






          {/* Form */}

          <form className="border border-gray-200 rounded-3xl p-8 space-y-5">


            <div>

              <label className="text-sm text-gray-600">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-slate-500"
              />

            </div>




            <div>

              <label className="text-sm text-gray-600">
                Work Email
              </label>

              <input
                type="email"
                placeholder="company@email.com"
                className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-slate-500"
              />

            </div>




            <div>

              <label className="text-sm text-gray-600">
                Company
              </label>

              <input
                type="text"
                placeholder="Company name"
                className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-slate-500"
              />

            </div>





            <div>

              <label className="text-sm text-gray-600">
                Message
              </label>

              <textarea

                rows="4"

                placeholder="Tell us about your training needs..."

                className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-slate-500"

              />

            </div>




            <button

              className="w-full flex justify-center items-center gap-2 bg-slate-800 text-white py-4 rounded-xl hover:bg-slate-700 transition"

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