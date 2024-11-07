import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Getquote from "./components/Getquote";
import Strip from "./components/Strip";

export default function Home() {
  return (
    <>
      <div className=" mt-[50px]"/>
      <Hero />
      <About />
      <Strip/>
      <Services/>
      <Getquote/>
    </>
  );
}
