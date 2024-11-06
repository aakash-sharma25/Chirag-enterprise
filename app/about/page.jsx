import React from "react";
import ev from "@/public/evcharging.jpg";
import antiyscert from "@/public/antiyscert.jpg";
import Image from "next/image";
export default function page() {
  return (
    <>
      <p className=" text-center text-3xl text-blue-600 font-semibold my-5">
        About Us
      </p>
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 my-10">
        <div className="flex flex-col gap-4 w-full lg:w-1/2 ">
          <div className="relative left-[20%]">
            <Image
              src={ev}
              alt="Coating Image 1"
              height={350}
              //   layout="fill"
              //   objectFit="cover"
              className="rounded-md shadow-md"
            />
          </div>
          <div className="relative  left-[30%] -top-[10%]">
            <Image
              src={antiyscert}
              height={350}
              alt="Coating Image 2"
              //   layout="fill"
              //   objectFit="cover"
              className="rounded-md shadow-md"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full lg:w-1/2 pr-10">
          <h1 className="text-4xl font-bold text-blue-900">
            Chirag Enterprise.
          </h1>
          <h2 className="text-xl font-semibold text-blue-900">Who We Are ?</h2>
          <p className="text-gray-700 leading-relaxed">
            Specializes in the installation of high-quality flooring solutions.
            Committed to excellence and attention to detail, we offer durable
            and visually stunning concrete coatings for residential and
            commercial spaces, delivering long-lasting results that enhance the
            beauty and functionality of any environment.
          </p>

          <div className=" flex flex-col gap-6">
            <h2 className="text-xl font-semibold text-blue-900">
              Professional Equipment
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our team of skilled experts ensures a seamless installation
              process, delivering long-lasting results that enhance the beauty
              and functionality of any environment.
            </p>
          </div>

          <div className=" flex flex-col gap-6">
            <h2 className="text-xl font-semibold text-blue-900">
              Top quality material
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At our company, we take pride in offering the highest quality
              materials to ensure that our coatings are durable, visually
              appealing, and built to withstand the test of time.
            </p>
          </div>
        </div>
      </div>
    </>

    // <div className=" max-w-screen-lg mx-auto">
    //   <p className=" text-center text-3xl text-blue-600 font-semibold my-5">
    //     About Us
    //   </p>
    //   <div className="flex justify-between">
    //     <div className="my-2 flex-1">
    //       <Image
    //         src={ev}
    //         alt="ev charging"
    //         width={250}
    //         height={200}
    //         className=" absolute top-[30%]"
    //       />
    //       <Image
    //         src={antiyscert}
    //         alt="antiyscert"
    //         width={250}
    //         height={200}
    //         className=" absolute left-[25%] top-[60%]"
    //       />
    //     </div>
    //     <div>
    //       <h2>Welcome To Chirag Enterprise</h2>
    //       <p>
    //         Specializes in the installation of high-quality flooring solutions.
    //         Committed to excellence and attention to detail, we offer durable
    //         and visually stunning concrete coatings for residential and
    //         commercial spaces, delivering long-lasting results that enhance the
    //         beauty and functionality of any environment Professional Equipment
    //         Our team of skilled experts ensures a seamless installation process,
    //         delivering long-lasting results that enhance the beauty and
    //         functionality of any environment.
    //       </p>
    //       <p>

    //         Top quality material At our company, we take pride in offering the
    //         highest quality material for your projects. Our selection of premium
    //         materials ensures superior and long-lasting results in every
    //         application.
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
}
