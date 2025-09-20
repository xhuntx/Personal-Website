import React, { memo } from "react";
import { ScrollReveal } from "../App";



const ProjectsPage = memo(() =>{
  return (
  <div className="flex flex-row gap-6 justify-start items-start w-full p-2">
  <section className="max-w-md w-full">
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white rounded-md">
      <ScrollReveal className="text-center">
        <div className="grid grid-col gap-3">
          <div className="bg-zinc-700 shadow-lg rounded-lg p-7 max-w-md text-center flex flex-col text-wrap object-contain">
            <img className=" h-32 object-contain invert" src="/gmail-logo.png" alt="gmail logo"/> 
            <p className=" pb-4">
              This is a email filter for gmail
            </p>
          <a href="https://github.com/xhuntx/Email-Filter-For-Gmail" target="_blank" className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50 shadow-lg hover:shadow-xl">
            Email Filer for Gmail
          </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
  
  <section className="max-w-md w-full">
    <div className=" min-h-screen flex flex-col items-center justify-center bg-sky-300 text-white rounded-md">
      <ScrollReveal className="text-center">
        <div className="grid grid-cols-1 gap-3">
          <div className="bg-zinc-700 shadow-lg rounded-lg p-7 text-center flex flex-col text-wrap object-contain items-center">
            <img src="/Splatoonfi-logos_black.png" className="h-32 object-contain invert" alt="Splatoonfi Logo"/>
            <p className="pb-4">
              The music platfrom for Splatoon fans
            </p>
            <a href="https://splatoonfi.vercel.app/" target="_blank" className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50 shadow-lg hover:shadow-xl">
              Splatoonfi
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
  </div>


  );
});

export default ProjectsPage;