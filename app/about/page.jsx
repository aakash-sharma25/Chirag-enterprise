import About from "../components/About";
import MissionAndVision from "../components/MissionAndVision";
import Strip from "../components/Strip";
export default function page() {
  return (
    <>
    <h1 className=" text-3xl text-blue-700 font-bold mt-[120px] text-center " >About Us</h1>
      <About />
      <Strip/>
      <MissionAndVision />
    </>
  );
}
