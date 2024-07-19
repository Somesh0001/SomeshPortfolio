"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import Image from "next/image";
import Dp from "@/public/images/SomeshProfile.jpg";
import { MovingDiv } from "@/components/ui/moving-border";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
const About = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };

  const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div
        className={cn("flex flex-col text-white space-y-2 w-full", className)}
      >
        {children}
      </div>
    );
  };
  return (
    <main className="py-6 xl:py-8 px-6 xl:px-8 flex flex-col items-center xs:min-w-full">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full">
        <div className="relative w-full lg:w-1/3 flex justify-center mt-8 lg:mt-0">
          <MovingDiv>
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden">
              <Image
                src={Dp}
                alt="Somesh Dwivedi Profile"
                layout="fill"
                style={{ objectFit: "cover" }}
              />
            </div>
          </MovingDiv>
        </div>
      </div>

      <div className=" flex-row items-center justify-center w-full my-4 lg:my-14 flex ">
        <div className="sm:w-full md:w-3/4  text-center  flex flex-col items-center justify-evenly ">
          <div className="text-4xl text-green-500">Hello !! Somesh here</div>
          <TextGenerateEffect
            words={
              "As a passionate coding enthusiast from NIT Jamshedpur, I have actively contributed to various projects and organizations, showcasing my skills and dedication. My journey began with the Web Team of NIT Jamshedpur, where I played significant roles in developing and maintaining numerous websites. One of my notable contributions includes the Saajha project for the Jharkhand State Police, where I was instrumental in both frontend and backend development. Additionally, I have been a key player in creating and managing websites for major events such as IEEE conferences, Urja (NIT JSR sports fest), Culfest 2k24, and Ojass 2k24. My commitment to excellence is reflected in my academic performance, with a current CG of 9.63. Beyond my technical expertise, I thrive as an extrovert, enjoying meaningful conversations and building connections with others. This blend of technical proficiency and interpersonal skills defines my approach to every project and collaboration. "
            }
          />
          <div className="text-4xl text-green-500 my-4">Contact : </div>
          <div className="text-3xl ">Phno: +91 9044283186</div>
          <div className="text-3xl">Email : sd10072004@gmail.com</div>
        </div>
      </div>

      {/* <div className="h-[50rem] w-full bg-black  bg-grid-white/[0.2]  relative flex items-center justify-center flex-col">
        <div className="absolute pointer-events-none inset-0 flex items-center flex-col justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="text-4xl text-green-500 my-10 mx-2 flex text-center justify-center">
          Connect with me{" "}
        </div>
        <div className="sm:w-full md:w-2/3 mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
          <h2 className="font-bold text-xl text-neutral-200">Send an email</h2>
          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input id="firstname" placeholder="Tyler" type="text" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input id="lastname" placeholder="Durden" type="text" />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="projectmayhem@fc.com"
                type="email"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="Enter email subject here "
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="Mailtext">Message </Label>
              <textarea
                id="message"
                placeholder="Enter your message here"
                style={{
                  height: "200px",
                  width: "100%",
                  maxHeight: "200px",
                  overflowY: "scroll",
                }}
              />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Send
              <BottomGradient />
            </button>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          </form>
        </div>
      </div> */}
    </main>
  );
};

export default About;
