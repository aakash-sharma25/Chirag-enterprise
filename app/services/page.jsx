import React from "react";
import Services from "../components/Services";
import ServiceCard from "../components/ServiceCard";
import antyiscert from "@/public/antiyscert.jpg";
import cotajoining from "@/public/cotajoniding.jpg";
import pucoting from "@/public/pucoting.jpg";
import sdflooring from "@/public/sdflooring.jpg";
import yellowmarking from "@/public/yellowmarking.jpg";
import onemm from "@/public/1mm.jpg";
import twomm from "@/public/2mm.jpg";
import threemm from "@/public/3mm.jpg";
import fourmm from "@/public/4mm.jpg";
import { data } from "../data";
import Head from "next/head";

export default function page() {
  return (
    <>
     <Head>
        <title>Epoxy & Flooring Services in Palghar | Chirag Epoxy</title>
        <meta
          name="description"
          content="Explore Chirag Epoxy's specialized services in epoxy and flooring solutions. Serving industrial, commercial, and residential clients in Palghar."
        />
        <meta
          name="keywords"
          content="chiragenterprises , chiragepoxy , carparking, waterproff coating , ev charging, pu flooring palghar, cota joining palghar, epoxy flooring Palghar, epoxy solutions, industrial flooring Palghar, residential flooring, commercial epoxy Palghar, Chirag Epoxy services"
        />
      </Head>
      <p className=" text-center font-bold text-3xl text-blue-600 px-4 mt-[150px]">
        Services We Offer
      </p>
      <div className="flex justify-evenly flex-wrap gap-10 max-w-screen-lg mx-auto my-10">
        <ServiceCard img={fourmm} name={"1 MM"} />
        <ServiceCard img={twomm} name={"2 MM"} />
        <ServiceCard img={threemm} name={"3 MM"} />
        <ServiceCard img={onemm} name={"4 MM"} />
      </div>
      <Services />
      <div className="flex justify-evenly flex-wrap gap-10 max-w-screen-lg mx-auto mb-10">
        <ServiceCard img={antyiscert} name={"Anti Scert Flooring"} />
        <ServiceCard img={pucoting} name={"PU Coting Flooring"} />
        <ServiceCard img={sdflooring} name={"SD Flooring"} />
        <ServiceCard img={yellowmarking} name={"Yellow Marking"} />
      </div>
    </>
  );
}
