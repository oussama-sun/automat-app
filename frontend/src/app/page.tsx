"use client";
import Navbar from "@/components/global/Navbar";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip">
      <Navbar />
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Unleash the power of <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Scroll Animations
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/temp-banner.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </main>
  );
}
