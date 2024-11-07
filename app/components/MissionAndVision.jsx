import React from "react";
import mission from "@/public/image.png";
import Image from "next/image";

export default function MissionAndVision() {
  return (
    <>
      <p className=" text-center text-5xl font-semibold text-blue-500 my-[50px]">
        Mission And vision
      </p>
      <div className="container mx-auto flex flex-col  justify-evenly p-10 md:p-0 items-center text-center md:text-start lg:flex-row gap-8 my-10 text-lg">
        <div className="flex flex-col gap-6 w-full lg:w-1/2 pr-10">
          <h2 className="text-xl font-semibold text-blue-900">Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To become India's most trusted provider of high-quality flooring
            solutions, recognized for our commitment to excellence, durability,
            and innovation. We aim to transform spaces by delivering
            sustainable, aesthetically pleasing, and long-lasting epoxy and PU
            flooring solutions for all industries.
          </p>

          <div className=" flex flex-col gap-6">
            <h2 className="text-xl font-semibold text-blue-900">Misssion</h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to deliver exceptional epoxy and PU flooring
              services tailored to our clients' needs. We focus on quality,
              affordability, and timely delivery, ensuring customer satisfaction
              and building lasting relationships through innovative solutions
              and superior craftsmanship in every project we undertake.
            </p>
          </div>
        </div>
        <Image
          src={mission}
          alt="Coating Image 1"
          height={400}
          width={400}
          className="rounded-md  shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
        />
      </div>
    </>
  );
}
