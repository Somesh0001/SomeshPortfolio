import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import Card from "@/components/Card";
import CodeforcesProfile from "@/public/CodeforcesProfile.png";
import WebTeamCertificate from "@/public/WebTeamCertificate.jpeg";
import LeetCodeProfile from "@/public/LeetcodeProfile.png";
import CodechefProfile from "@/public/CodechefProfile.png";
import CodeForGood from "@/public/CodeForCood.jpg";
import PconHackathon from "@/public/PCONHackathon.jpeg";
const Resume = () => {
  return (
    <main className="py-6 xl:py-8 px-6 xl:px-8 flex flex-col items-center xs:min-w-full">
      <div className="h-[10rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className=" text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
          Achievements
        </h1>
        <div className="w-[40rem] h-40 relative">
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
        <div className="w-full sm:w-full md:w-1/3 p-2">
          <Card
            title="NIT Jamshedpur Web Team"
            description="I have been a member of web team of my college, since the first year of my college and have actively participated in adding new functionalities"
            imgLink={WebTeamCertificate.src}
            visit={
              "https://www.linkedin.com/posts/somesh-dwivedi-602645248_im-happy-to-share-that-im-starting-a-new-activity-7187330275113107457-VdR3?utm_source=share&utm_medium=member_desktop"
            }
          />
        </div>
        <div className="w-full sm:w-full md:w-1/3 p-2">
          <Card
            title="Code for Good"
            description="We participated in the Code for Good hackathon 2024 by JP Morgan and Chase and we won !!"
            imgLink={CodeForGood.src}
            visit={
              "https://www.linkedin.com/posts/somesh-dwivedi-602645248_jpmorgan-hackathon-codeforgood-activity-7208529083863826434-jlj2?utm_source=share&utm_medium=member_desktop"
            }
          />
        </div>
        <div className="w-full sm:w-full md:w-1/3 p-2">
          <Card
            title="PCON Hackathon 2024"
            description="I participated in the first hackathon organised by PCON and I won third prize in that hackathon !!"
            imgLink={PconHackathon.src}
            visit={
              "https://www.linkedin.com/posts/programming-club-of-nit-jamshedpur_pcon-nitjamshedpur-hackathon-activity-7125578157071441921-uutK?utm_source=share&utm_medium=member_desktop"
            }
          />
        </div>
        <div className="w-full sm:w-full md:w-1/3 p-2">
          <Card
            title="Codeforces"
            description="I solved more than 300 q on CF and highest as Specialist on Codeforces with max rating of 1418"
            imgLink={CodeforcesProfile.src}
            visit={"https://codeforces.com/profile/JaiRaghav"}
          />
        </div>
        <div className="w-full sm:w-full md:w-1/3 p-2">
          <Card
            title="Leetcode"
            description="I solved more than 400+ q on Leetcode and also started with contests with a highest rating of 1531 "
            imgLink={LeetCodeProfile.src}
            visit={"https://leetcode.com/u/JaiRaghunandan/"}
          />
        </div>
        <div className="w-full sm:w-full md:w-1/3 p-2">
          <Card
            title="Codechef"
            description="I have also started giving contests on Codechef and currently my rating is 1679"
            imgLink={CodechefProfile.src}
            visit={"https://www.codechef.com/users/dsomesh001"}
          />
        </div>
      </div>
    </main>
  );
};

export default Resume;
