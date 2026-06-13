import React from "react";
import { Link, Mail, ArrowRight } from "lucide-react";
import logo from "../assets/logobg.png";


const Footer = () => {

  return (

    <footer className="bg-slate-950 text-white">


      <div className="max-w-7xl mx-auto px-6 py-20">



        {/* Top Section */}

        <div className="grid lg:grid-cols-4 gap-14 pb-16 border-b border-white/10">





          {/* Brand */}

          <div className="lg:col-span-2">


            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="LumenFold logo"
                className="h-30 w-auto object-contain"
              />

              {/* <div>
                <h2 className="text-2xl font-bold">
                  LumenFold
                </h2>

                <p className="text-sm text-slate-400">
                  Learning Systems
                </p>
              </div> */}
            </div>





            <p className="
              mt-7
              text-slate-400
              max-w-lg
              leading-relaxed
            ">

              We transform company knowledge, SOPs,
              and internal expertise into scalable digital
              learning systems built for modern teams.

            </p>




            <button
              className="
              mt-8
              flex
              items-center
              gap-3
              bg-white
              text-slate-900
              px-7
              py-4
              font-semibold
              hover:bg-indigo-600
              hover:text-white
              transition
              "
            >

              Build Your Learning System

              <ArrowRight size={18}/>

            </button>



          </div>








          {/* Company Links */}

          <div>


            <h3 className="
              text-sm
              uppercase
              tracking-[3px]
              font-bold
              text-slate-300
              mb-6
            ">

              Company

            </h3>



            <ul className="space-y-4 text-slate-400">


              <li>
                <a 
                  href="#about"
                  className="hover:text-white transition"
                >
                  About
                </a>
              </li>


              <li>
                <a 
                  href="#services"
                  className="hover:text-white transition"
                >
                  Services
                </a>
              </li>


              <li>
                <a 
                  href="#process"
                  className="hover:text-white transition"
                >
                  Process
                </a>
              </li>


              <li>
                <a 
                  href="#contact"
                  className="hover:text-white transition"
                >
                  Contact
                </a>
              </li>


            </ul>


          </div>










          {/* Services */}

          <div>


            <h3 className="
              text-sm
              uppercase
              tracking-[3px]
              font-bold
              text-slate-300
              mb-6
            ">

              Services

            </h3>



            <ul className="space-y-4 text-slate-400">


              <li>
                Instructional Design
              </li>


              <li>
                Course Development
              </li>


              <li>
                Employee Training
              </li>


              <li>
                LMS Consulting
              </li>


            </ul>


          </div>



        </div>









        {/* Bottom */}

        <div className="
          pt-8
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-6
        ">



          <p className="
            text-sm
            text-slate-500
          ">

            © {new Date().getFullYear()} LumenFold. All rights reserved.

          </p>





          <div className="flex gap-6">


            <a
              href="#"
              className="
              text-slate-400
              hover:text-white
              transition
              "
            >

              <Link size={20}/>

            </a>


            <a
              href="mailto:hello@lumenfold.com"
              className="
              text-slate-400
              hover:text-white
              transition
              "
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