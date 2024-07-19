"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

export default function Sidebar() {
  const [goal, setGoal] = React.useState(350);
  const pathName = usePathname();
  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Drawer>
      <DrawerTrigger asChild className="md:hidden">
        <Button variant="outline">
          {" "}
          <GiHamburgerMenu className=" text-4xl" />{" "}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-full">
        <div className="mx-auto w-full h-full flex flex-col items-center justify-evenly text-4xl bg-black">
          <div className="mx-4 my-4 text-white-500">
            <Link
              href="/"
              className={`text-${pathName === "/" ? "green" : "white"}-500`}
            >
              Home
            </Link>{" "}
          </div>
          <div className="mx-4 text-white-500">
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
          <div className="mx-4 text-white-500">
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
          <div className="mx-4 text-white-500">
            {" "}
            <Link
              href="/about"
              className={`text-${
                pathName === "/about" ? "green" : "white"
              }-500`}
            >
              About
            </Link>{" "}
          </div>
          <div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
