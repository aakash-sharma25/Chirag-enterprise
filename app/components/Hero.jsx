"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import hero from "@/public/sdflooring.jpg";

import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function Hero() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <>
      {/* <Head>
        <link rel="preload" href={hero} as="image" />
        <title>About - Chirag Enterprise</title>
        <meta name="description" content="Chirag Enterprises offers the best epoxy solution in palghar" />
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
      </Head> */}
      <Head>
        <link rel="preload" href={hero} as="image" />
        <title>Chirag Epoxy | Best Epoxy & Flooring Solutions in Palghar</title>
        <meta
          name="description"
          content="Discover premium epoxy and flooring solutions in Palghar with Chirag Epoxy. We provide top-quality services to enhance your spaces."
        />
        <meta
          name="keywords"
          content="epoxy solutions palghar, flooring services palghar, Chirag Epoxy, epoxy flooring Palghar, industrial flooring Palghar, residential flooring Palghar , chiragenterprises , chiragepxoxy,best epoxy solution near me , best expoxy near me"
        />
      </Head>
      <div className="w-[100%] relative">
        <Image
          src={hero}
          alt="hero image"
          className="min-h-screen w-[100%] blur-[3px] bg-green-600"
          loading="eager"
        />
        <div
          data-aos="fade-up"
          className=" absolute bottom-16 md:bottom-10 left-6 bg-slate-500 bg-opacity-70 p-4 rounded-md w-[90%] md:w-[40%] "
        >
          <p className=" font-extrabold text-3xl text-white my-2 p-2 ">
            Welcome to Chirag Enterprise
          </p>
          <p className=" text-xl my-2 p-2">
            Get The inventive flooring service at affordable rates by our
            experienced professionsals
          </p>
          <Link
            href={"/contact"}
            className=" my-2 text-lg font-normal px-4 py-2 rounded-3xl bg-blue-500 hover:bg-blue-800 text-white transition-all ease-in-out delay-100"
          >
            Request Services
          </Link>
        </div>
      </div>
    </>
  );
}
