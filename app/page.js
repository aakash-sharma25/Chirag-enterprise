import Image from "next/image";
import Navbar from "./components/Navbar";
import Head from "next/head";
import logo from "@/public/logo.jpg";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={logo} />
      </Head>
      <Navbar />
      <Hero />
    </>
  );
}
