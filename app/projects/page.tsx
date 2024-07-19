import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import Card from "@/components/Card";
import Saajha from "@/public/images/Saajha.jpg";
import Culfest from "@/public/images/Culfest 2k24.png";
import Ojass from "@/public/images/Ojass24.png";
import NITJSRWebTeam from "@/public/images/NITJSR WebTeam.png";
import Urja from "@/public/images/Urja2k23.png";
const Projects = () => {
  return (
    <main className="py-6 xl:py-8 px-6 xl:px-8 flex flex-col items-center xs:min-w-full">
      <div className="h-fir-content w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className=" xs:text-4xl md:text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
          Projects
        </h1>
        <div className="xs:w-[20rem] md:w-[40rem] xs:h-20 md:h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      <div className="w-full bg-black flex flex-wrap items-center justify-center overflow-hidden rounded-md ">
        <div className="w-full sm:w-full md:w-1/2 md:p-2 ">
          <Card
            title="Official Website of NIT JSR   "
            description="As a part of the official webteam of NIT Jamshedpur , I contribute towards website maintainance by adding regular updates and adding new functionalities "
            imgLink={NITJSRWebTeam.src}
            visit={"https://nitjsr.ac.in/"}
          />
        </div>
        <div className="w-full sm:w-full md:w-1/2 p-2">
          <Card
            title="Saajha "
            description="A crime record maintainance website made for Jharkhand State Police by me and my team under the guidance of Web Team PI Dr. KK Singh "
            imgLink={Saajha.src}
            visit={"https://saajha.vercel.app/"}
          />
        </div>

        <div className="w-full sm:w-full md:w-1/2 p-2">
          <Card
            title="Urja - 2023"
            description="We made the website for the Urja , the annual sports fest of our college "
            imgLink={Urja.src}
            visit={"https://urja-2023.netlify.app/"}
          />
        </div>
      </div>
      <div className="text-4xl text-green-500 flex items-center justify-center text-center">
        Some minor projects and more contributions
      </div>
      <div className="w-full bg-black flex flex-wrap items-center justify-center overflow-hidden rounded-md ">
        <div className="w-full sm:w-full md:w-1/2 p-2">
          <Card
            title=" Culfest - 2k24  "
            description="Being a part of the Culfest web team since my first year, I took the responsibility of making a website for Culfest-2024 for this year as well and significantly contribued to the development of this website "
            imgLink={Culfest.src}
            visit={"https://cultural-fest-24.vercel.app/"}
          />
        </div>
        <div className="w-full sm:w-full md:w-1/2 p-2">
          <Card
            title="Ojass- 2k24 "
            description="As an active participant in various fests in our college, I also contributed towards the development of the official website of Urja-2k24 , the annual technical fest of our college  "
            imgLink={Ojass.src}
            visit={"https://ojass-alpha.vercel.app/"}
          />
        </div>
      </div>
    </main>
  );
};

export default Projects;
