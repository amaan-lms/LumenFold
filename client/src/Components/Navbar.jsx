import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  BookOpen,
  Layers,
  Users,
  Shield,
  GraduationCap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logorbg.png";
import logotxt from "../assets/logotext.png";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);



  const services = [
    {
      title:"Corporate Instructional Design",
      desc:"Custom learning frameworks",
      icon:Layers
    },
    {
      title:"Online Course Development",
      desc:"Digital learning experiences",
      icon:BookOpen
    },
    {
      title:"Employee Onboarding",
      desc:"Structured onboarding systems",
      icon:Users
    },
    {
      title:"Compliance Training",
      desc:"Policy based learning",
      icon:Shield
    },
    {
      title:"LMS Consulting",
      desc:"Learning architecture",
      icon:GraduationCap
    }
  ];



  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };



return (

<nav
className={`
fixed top-0 left-0 w-full z-50 transition-all duration-300
${scrolled 
? "bg-white shadow-sm border-b border-slate-100 py-3"
: "bg-white/90 backdrop-blur-md py-5"
}
`}
>


<div className="
max-w-7xl
mx-auto
px-5
md:px-6
flex
items-center
justify-between
">


{/* LOGO */}

<a href="#home" className="flex items-center gap-3">

  <img src={logo} alt="LumenFold logo" className="h-10 w-auto object-contain" />
  <img src={logotxt} alt="LumenFold logo" className="h-7 w-auto object-contain" />

  {/* <div>

    <h1 className="
    text-xl
    font-bold
    text-slate-900
    ">
    LumenFold
    </h1>

    <p className="
    text-xs
    text-slate-500
    ">
    Learning Systems
    </p>

  </div> */}

</a>






{/* DESKTOP */}

<div className="
hidden
md:flex
items-center
gap-8
text-sm
font-medium
text-slate-600
">


<a href="#home" className="hover:text-slate-900">
Home
</a>


<a href="#about" className="hover:text-slate-900">
About
</a>





{/* SERVICES */}

<div
className="relative"
onMouseEnter={()=>setServicesOpen(true)}
onMouseLeave={()=>setServicesOpen(false)}
>


<button
className="
flex
items-center
gap-1
hover:text-slate-900
"
>

Services

<ChevronDown
size={15}
/>

</button>



<AnimatePresence>

{
servicesOpen && (

<motion.div

initial={{
opacity:0,
y:10
}}

animate={{
opacity:1,
y:0
}}

exit={{
opacity:0,
y:10
}}

className="
absolute
top-8
left-1/2
-translate-x-1/2
w-[380px]
bg-white
border
border-slate-200
shadow-xl
p-3
"

>


{
services.map((item,index)=>{

const Icon=item.icon;


return (

<a
key={index}
href="#services"
className="
flex
gap-4
p-3
hover:bg-slate-50
transition
"
>


<div
className="
w-9
h-9
bg-slate-100
flex
items-center
justify-center
"
>

<Icon size={17}/>

</div>



<div>

<h4 className="
text-sm
font-semibold
text-slate-900
">

{item.title}

</h4>

<p className="
text-xs
text-slate-500
">

{item.desc}

</p>


</div>


</a>

)

})

}



</motion.div>

)

}

</AnimatePresence>


</div>





<a href="#process" className="hover:text-slate-900">
Process
</a>


<a href="#contact" className="hover:text-slate-900">
Contact
</a>



<button

className="
bg-slate-900
text-white
px-5
py-3
font-semibold
hover:bg-indigo-600
transition
"

>

Book Consultation

</button>


</div>








{/* MOBILE BUTTON */}

<button

onClick={()=>setIsOpen(!isOpen)}

className="
md:hidden
text-slate-900
"

>

{
isOpen
?
<X size={26}/>
:
<Menu size={26}/>
}

</button>



</div>







{/* MOBILE MENU */}


<AnimatePresence>

{

isOpen && (


<motion.div

initial={{
height:0,
opacity:0
}}

animate={{
height:"auto",
opacity:1
}}

exit={{
height:0,
opacity:0
}}

className="
md:hidden
overflow-hidden
bg-white
border-t
border-slate-100
"

>


<div
className="
px-6
py-6
flex
flex-col
gap-5
"
>


<a onClick={closeMenu} href="#home">
Home
</a>


<a onClick={closeMenu} href="#about">
About
</a>




<button

onClick={()=>setServicesOpen(!servicesOpen)}

className="
flex
justify-between
items-center
"

>

Services

<ChevronDown
className={servicesOpen?"rotate-180":""}
/>

</button>





<AnimatePresence>

{

servicesOpen && (

<motion.div

initial={{
height:0
}}

animate={{
height:"auto"
}}

exit={{
height:0
}}

className="
overflow-hidden
pl-4
border-l
border-slate-200
"

>

{
services.map((item,index)=>(

<a

key={index}

href="#services"

onClick={closeMenu}

className="
block
py-2
text-sm
text-slate-600
"

>

{item.title}

</a>

))

}

</motion.div>

)

}

</AnimatePresence>





<a onClick={closeMenu} href="#process">
Process
</a>


<a onClick={closeMenu} href="#contact">
Contact
</a>




<button

className="
bg-slate-900
text-white
py-3
font-semibold
"

>

Book Consultation

</button>



</div>


</motion.div>


)

}

</AnimatePresence>



</nav>

);

};


export default Navbar;