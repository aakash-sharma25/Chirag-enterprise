import React from "react";
import antyiscert from "@/public/antiyscert.jpg";
import carparking from "@/public/carparkingflooring.jpg";
import cotajoining from "@/public/cotajoniding.jpg";
import evcharging from "@/public/evcharging.jpg";
import globeSvg from "@/public/globe.svg";
import pucoting from "@/public/pucoting.jpg";
import puflooring from "@/public/puflooring.jpg";
import sdflooring from "@/public/sdflooring.jpg";
import waterproofcoatin from "@/public/waterproffcoatin.jpg";
import yellowmarking from "@/public/yellowmarking.jpg";
import ServiceCard from "./ServiceCard";
import Getquote from "./Getquote";

export default function Services() {
  return (
    <>
      <div className="max-w-screen-lg mx-auto mt-[150px] ">
        <p className=" text-center text-5xl text-blue-600 my-10">
          Services we Offer
        </p>
        <div className="flex justify-evenly flex-wrap gap-10 my-10">
          <ServiceCard img={carparking} name={"Car Parking Flooring"} />
          <ServiceCard img={waterproofcoatin} name={"Waterproff Coating"} />
          <ServiceCard img={evcharging} name={"EV Parking Flooring"} />
          <ServiceCard img={puflooring} name={"PU Flooring"} />
          <ServiceCard img={cotajoining} name={"Cota Joniding Flooring"} />
          <ServiceCard img={antyiscert} name={"Anti Scert Flooring"} />
          <ServiceCard img={pucoting} name={"PU Coting Flooring"} />
          <ServiceCard img={sdflooring} name={"SD Flooring"} />
          <ServiceCard img={yellowmarking} name={"Yellow Marking"} />
        </div>
      </div>
      {/* <Getquote /> */}
    </>
  );
}
