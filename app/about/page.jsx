import Head from "next/head";
import About from "../components/About";
import MissionAndVision from "../components/MissionAndVision";
import Strip from "../components/Strip";
export default function page() {
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
      <h1 className=" text-3xl text-blue-700 font-bold mt-[120px] text-center ">
        About Us
      </h1>
      <About />
      <Strip />
      <MissionAndVision />
    </>
  );
}
