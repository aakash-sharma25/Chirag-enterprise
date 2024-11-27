import Head from "next/head";
import React from "react";
export default function About() {
  return (
    <>
      <Head>
        <title>
          About Chirag Epoxy | Trusted Epoxy & Flooring Experts in Palghar
        </title>
        <meta
          name="description"
          content="Learn about Chirag Epoxy, your trusted partner for epoxy and flooring solutions in Palghar. Excellence in service and customer satisfaction."
        />
        <meta
          name="keywords"
          content="Chirag Epoxy Palghar, epoxy services, flooring experts, about epoxy solutions Palghar, flooring professionals Palghar , chiragenterprises , chiragepxoy, epxoy in palghar , best epoxy near me , best epoxy in palghar"
        />
      </Head>
      <div className="container mx-auto flex flex-col justify-evenly p-10 md:p-0 items-center text-center md:text-start lg:flex-row gap-8 my-10">
        <video
          data-aos="fade-right"
          data-aos-duration="1200"
          poster="/antiyscert.jpg"
          autoPlay
          muted
          loop
          playsInline
          width="400"
          height="400"
          className="rounded-md  shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
        >
          <source src="/slideshow.mp4" type="video/mp4" />
          Your browser doesn't support the video tag.
        </video>

        {/* <Image
          data-aos="fade-right"
          data-aos-duration="1200"
          src={antiyscert}
          alt="Coating Image 1"
          height={400}
          width={400}
          className="rounded-md  shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
        /> */}

        <div
          data-aos="fade-left"
          data-aos-duration="1200"
          className="flex flex-col gap-6 w-full lg:w-1/2  text-lg"
        >
          <h1 className="text-4xl font-bold text-blue-900">
            Chirag Enterprise.
          </h1>
          <h2 className="text-xl font-semibold text-blue-900">Who We Are ?</h2>
          <p className=" text-gray-700 leading-relaxed">
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
  );
}
