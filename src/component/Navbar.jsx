import { useState } from "react";

function Navbar() {
    const [expanded, setExpanded] = useState(false)
  return (
    <div className="fixed top-4 left-0 right-0 flex justify-center z-50">
      <div
      onMouseEnter={()=> setExpanded(true)}
      onMouseLeave={()=>setExpanded(false)} 
      className={`bg-[#111111] text-white flex justify-around rounded-full items-center shadow-lg transition-all duration-500 ease-in-out px-5 py-3 w-auto ${expanded ? 'md:px-10 gap-8' : 'md:px-5 gap-6'}`}>
          <div className={`flex gap-4 items-center transition-all duration-500 ease-in-out  ${expanded ? 'gap-8': 'gap-4'}`}>
          <span className="font-semibold text-lg">OW</span>
        
               <a href="#about" className=" hidden md:block text-xs text-white/80 hover:text-white">
            About
          </a>
          <a
            href="#projects"
            className=" hidden md:block text-xs text-white/80 hover:text-white"
          >
            Projects
          </a>
          <a href="#contact" className=" hidden md:block text-xs text-white/80 hover:text-white">
            Contact
          </a>
          <a
            href="https://github.com/omkarwarik02"
            target="_blank"
            className="hidden md:inline text-xs text-white/80 hover:text-white"
          >
            &lt;/&gt;
          </a>
          </div>
       
        
      </div>
    </div>
  );
}
export default Navbar;
