import Image from "next/image";
import React from "react";

export default function ServiceCard({ img, name }) {
  return (
    <>
      <div className="rounded-lg p-3 w-[90%] h-[400px]  md:w-[300px] md:h-[400px] hover:scale-105 transition ease-in-out delay-100 flex flex-col gap-3 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
        <Image src={img} alt="services image" className="hover:cursor-pointer  w-full h-[90%] rounded-xl" />
        <div>
          <p className="text-center text-blue-600 font-semibold text-xl"> {name} </p>
        </div>
      </div>
    </>
  );
}
