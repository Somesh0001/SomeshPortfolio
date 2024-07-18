"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Sidebar from "./Sidebar";
const Header = () => {
  const words = [
    {
      text: "Somesh",
      className: ` text-4xl text-white-500 dark:text-white-500`,
    },
    {
      text: ".",
      className: ` text-4xl text-green-500 dark:text-green-500`,
    },
  ];
  let btnColor = "#1c1c22";
  const pathName = usePathname();
  console.log(pathName);
  return (
    <header className="py-6 xl:py-8 px-6 xl:px-8  flex  items-center justify-between">
      <div className="text-4xl ">
        <TypewriterEffectSmooth words={words} />
      </div>
      <div className="text-2xl  md:flex items-center justify-evenly xs:hidden">
        <div className="mx-4">
          <Link
            href="/"
            className={`text-${pathName === "/" ? "green" : "white"}-500`}
          >
            Home
          </Link>{" "}
        </div>
        <div className="mx-4">
          {" "}
          <Link
            href="/projects"
            className={`text-${
              pathName === "/projects" ? "green" : "white"
            }-500`}
          >
            Projects
          </Link>{" "}
        </div>
        <div className="mx-4">
          {" "}
          <Link
            href="/achievements"
            className={`text-${
              pathName === "/achievements" ? "green" : "white"
            }-500`}
          >
            Achievements
          </Link>{" "}
        </div>
        <div className="mx-4">
          {" "}
          <Link
            href="/about"
            className={`text-${pathName === "/about" ? "green" : "white"}-500`}
          >
            About
          </Link>{" "}
        </div>
      </div>
      <Sidebar />
    </header>
  );
};

export default Header;
