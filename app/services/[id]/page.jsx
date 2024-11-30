import { data } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
// import { useParams } from "next/navigation";
// import React, { useEffect, useState } from "react";

export async function generateStaticParams() {
  return data.map((item) => ({
    id: item.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = params;
  const item = data.find((d) => d.id === id);

  if (!item) {
    return {
      title: "Page Not Found",
      description: "The page you are looking for does not exist.",
    };
  }

  return {
    title: `${item.title} | Chirag Enterprises and Epoxy Palghar`,
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
      images: [
        {
          url: item.image,
          alt: item.title,
        },
      ],
    },
  };
}

function page({ params }) {
  const { id } = params;
  console.log(id);
  //   const [value, setValue] = useState({
  //     image: "/logo.png",
  //     title: "",
  //     description: "",
  //   });
  const value = data.find((d) => d.id === id);

  if (!value) {
    return (
      <div className=" flex flex-col gap-8 justify-center items-center h-[100vh]">
        <p>This Page Doesnt exist</p>
        <Link
          href={"/"}
          className=" px-2 rounded-xl py-3 text-white font-semibold text-lg bg-blue-600 "
        >
          Go Back
        </Link>
      </div>
    );
  }

  //   useEffect(() => {
  //     if (id) {
  //       const info = data.find((d) => d.id === id);
  //       setValue(info);
  //     }
  //   }, []);
  return (
    <div className="container mx-auto flex flex-col justify-evenly p-10 md:p-0 items-center text-center md:text-start lg:flex-row gap-8 my-10 mt-[150px]">
      <Image
        data-aos="fade-right"
        data-aos-duration="1200"
        src={value.image}
        alt={value.title}
        height={400}
        width={400}
        className="rounded-md  shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
      />

      <div
        data-aos="fade-left"
        data-aos-duration="1200"
        className="flex flex-col justify-between h-[400px] w-full lg:w-1/2  text-lg"
      >
        <h1 className="text-4xl font-bold text-blue-900">Chirag Enterprise.</h1>
        <h1 className="text-3xl font-semibold text-blue-900">
          {value?.title + " - " + "Chirag Enterprise and Epoxy Palghar"}
        </h1>
        <p className=" text-gray-700 leading-relaxed">{value?.description}</p>
      </div>
    </div>
  );
}

export default page;
