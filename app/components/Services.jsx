import React from "react";
import carparking from "@/public/carparkingflooring.jpg";
import cotajoining from "@/public/cotajoniding.jpg";
import evcharging from "@/public/evcharging.jpg";
import puflooring from "@/public/puflooring.jpg";
import waterproofcoatin from "@/public/waterproffcoatin.jpg";
import ServiceCard from "./ServiceCard";
import Link from "next/link";

export default function Services({ showButton = false }) {
  return (
    <>
      <div className="max-w-screen-lg mx-auto  flex flex-col items-center justify-center ">
        {/* <p className=" text-center font-bold text-3xl text-blue-600  px-4">
          Services We Offer
        </p> */}
        <div className="flex justify-evenly flex-wrap gap-10 my-10">
          <ServiceCard img={carparking} name={"Car Parking Flooring"} id="car-parking-flooring"/>
          <ServiceCard img={waterproofcoatin} name={"Waterproff Coating"} id="waterproof-coating"/>
          <ServiceCard img={evcharging} name={"EV Parking Flooring"} id="ev-parking-flooring"/>
          <ServiceCard img={puflooring} name={"PU Flooring"} id="pu-flooring"/>
          <ServiceCard img={cotajoining} name={"Cota Joniding Flooring"} id="cota-joining-flooring"/>
          {/* <ServiceCard img={antyiscert} name={"Anti Scert Flooring"} />
          <ServiceCard img={pucoting} name={"PU Coting Flooring"} />
          <ServiceCard img={sdflooring} name={"SD Flooring"} />
          <ServiceCard img={yellowmarking} name={"Yellow Marking"} /> */}
        </div>
        {showButton && (
          <Link
            href={"/services"}
            className=" mx-auto   text-lg font-normal px-4 py-2 rounded-3xl bg-blue-500 hover:bg-blue-800 text-white transition-all ease-in-out delay-100"
          >
            View all services ➡️
          </Link>
        )}
      </div>
      {/* <Getquote /> */}
    </>
  );
}
