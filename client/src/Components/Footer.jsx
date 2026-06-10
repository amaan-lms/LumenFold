import React from "react";
import {
  LinkedIn,
  Mail,
  ArrowRight
} from "lucide-react";


const Footer = () => {

  return (

    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">


        <div className="grid md:grid-cols-4 gap-10">



          {/* Brand */}

          <div className="md:col-span-2">


            <div className="flex items-center gap-3">


              <div className="w-11 h-11 rounded-full bg-white text-slate-900 flex items-center justify-center font-bold text-xl">

                L

              </div>


              <div>

                <h2 className="text-2xl font-semibold">

                  LumenFold

                </h2>


                <p className="text-sm text-gray-400">

                  Learning Systems

                </p>

              </div>


            </div>




            <p className="mt-6 text-gray-300 max-w-md leading-relaxed">

              We help companies transform internal knowledge,
              SOPs, policies, and processes into clear learning
              systems that improve employee performance and
              operational consistency.

            </p>




            <button className="mt-6 flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl hover:bg-gray-100 transition">

              Build Your Learning System

              <ArrowRight size={17}/>

            </button>


          </div>






          {/* Navigation */}

          <div>


            <h3 className="font-semibold text-lg mb-5">

              Company

            </h3>


            <ul className="space-y-3 text-gray-300">


              <li>
                <a href="#about">
                  About
                </a>
              </li>


              <li>
                <a href="#services">
                  Services
                </a>
              </li>


              <li>
                <a href="#process">
                  Process
                </a>
              </li>


              <li>
                <a href="#contact">
                  Contact
                </a>
              </li>


            </ul>


          </div>






          {/* Services */}

          <div>


            <h3 className="font-semibold text-lg mb-5">

              Services

            </h3>


            <ul className="space-y-3 text-gray-300">


              <li>
                Instructional Design
              </li>


              <li>
                Course Development
              </li>


              <li>
                Compliance Training
              </li>


              <li>
                LMS Consulting
              </li>


            </ul>


          </div>



        </div>







        {/* Bottom */}

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">


          <p className="text-gray-400 text-sm">

            © {new Date().getFullYear()} LumenFold. All rights reserved.

          </p>





          <div className="flex items-center gap-5">


            <a
              href="#"
              className="text-gray-300 hover:text-white transition"
            >

              <LinkedIn size={20}/>

            </a>


            <a
              href="mailto:hello@lumenfold.com"
              className="text-gray-300 hover:text-white transition"
            >

              <Mail size={20}/>

            </a>


          </div>



        </div>



      </div>


    </footer>

  );

};


export default Footer;