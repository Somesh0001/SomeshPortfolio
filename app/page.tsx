import Image from "next/image";
import Dp from "@/public/images/SomeshProfile.jpg";
import { MovingDiv } from "@/components/ui/moving-border";
import { Spotlight } from "@/components/ui/Spotlight";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { MdFileDownload } from "react-icons/md";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
export default function Home() {
  return (
    <main className="py-6 xl:py-8 px-6 xl:px-8 flex flex-col items-center xs:min-w-full">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="text-6xl md:text-8xl w-full lg:w-1/2 text-center lg:text-left">
          <div className="text-2xl mb-4">
            Web Developer & Competitive Programmer
          </div>
          Hello, I am <span className="text-green-500">SOMESH DWIVEDI</span>
        </div>
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
      <div className="flex flex-col lg:flex-row items-center justify-center w-full">
        <div className="text-6xl md:text-8xl w-full lg:w-1/2 text-center lg:text-left">
          <div className="text-2xl mb-4">
            I am a passionate coding enthusiast from National Institute of
            Technology , Jamshedpur
          </div>
        </div>
        <div className="relative w-full lg:w-1/3 flex justify-center mt-8 lg:mt-0"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center w-full">
        <div className="text-6xl md:text-8xl w-full lg:w-1/3 text-center lg:text-left flex md:flex-row items-center justify-evenly sm:flex-col">
          {" "}
          <Button variant={"outline"} className="">
            Resume
            <a href="Files/Somesh_Dwivedi_Resume.pdf" download={true}>
              <MdFileDownload className="mx-2 text-green text-2xl" />
            </a>
          </Button>
          <Link
            href="https://www.linkedin.com/in/somesh-dwivedi-602645248/"
            target="_blank"
          >
            <CiLinkedin className="text-4xl text-green-500 " />
          </Link>
          <Link href="https://github.com/Somesh0001" target="_blank">
            <FaGithub className="text-4xl text-green-500" />
          </Link>
        </div>
        <div className="relative w-full lg:w-1/3 flex justify-center mt-8 lg:mt-0"></div>
      </div>

      <div className=" flex-row items-center justify-center w-full my-4 lg:my-14 flex ">
        <div className=" w-full  text-center lg:text-left flex md:flex-row items-center justify-evenly xs:flex-col">
          <div className="flex  ">
            <div className="text-6xl mx-1">6+</div>
            <div className="flex flex-col items-center justify-center">
              <span>Projects</span>
              <span> Completed </span>
            </div>
          </div>
          <div className="flex  ">
            <div className="text-6xl mx-1">8+</div>
            <div className="flex flex-col items-center justify-center">
              <span>Technologies</span>
              Mastered{" "}
            </div>
          </div>
          <div className="flex  ">
            <div className="text-6xl mx-1">1000+</div>
            <div className="flex flex-col items-center justify-center text-1xl">
              <span>Commits</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
