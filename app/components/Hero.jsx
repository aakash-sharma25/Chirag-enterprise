import Image from "next/image";
import React from "react";
import hero from "@/public/sdflooring.jpg";

export default function Hero() {
  return (
    <>
      <div className="w-[100%] relative">
        <Image src={hero} alt="hero image" className=" w-[100%] blur-sm" />
        <div className=" absolute bottom-10 left-2 bg-slate-500 bg-opacity-70 p-2 rounded-md w-[40%]">
          <p className=" font-extrabold text-3xl text-white my-2 p-2 ">
            Welcome to Chirag Enterprise
          </p>
          <p className=" text-xl my-2 p-2">
            Get The inventive flooring service at affordable rates by our
            experienced professionsals
          </p>
          <button className=" my-2 text-lg font-normal px-4 py-2 rounded-3xl bg-blue-500 hover:bg-blue-800 text-white transition-all ease-in-out delay-100">
            Request Services
          </button>
        </div>
      </div>
    </>
  );
}
