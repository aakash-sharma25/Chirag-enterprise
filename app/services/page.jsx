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

export default function page() {
  return (
    <>
      <Services />
      <div className="flex justify-evenly flex-wrap gap-10 max-w-screen-lg mx-auto">
        <ServiceCard img={cotajoining} name={"Cota Joniding Flooring"} />
        <ServiceCard img={antyiscert} name={"Anti Scert Flooring"} />
        <ServiceCard img={pucoting} name={"PU Coting Flooring"} />
        <ServiceCard img={sdflooring} name={"SD Flooring"} />
        <ServiceCard img={yellowmarking} name={"Yellow Marking"} />
      </div>
      <div className="flex justify-evenly flex-wrap gap-10 max-w-screen-lg mx-auto my-10">
        <ServiceCard img={onemm} name={"1 MM"} />
        <ServiceCard img={twomm} name={"2 MM"} />
        <ServiceCard img={threemm} name={"3 MM"} />
        <ServiceCard img={fourmm} name={"4 MM"} />
        {data["antiSkidFlooring"]}
      </div>
    </>
  );
}
