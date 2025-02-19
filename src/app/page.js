// import Image from "next/image";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Support from "./components/Support";
import SectionThree from "./components/SectionThree";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Support />
    <SectionThree />
    <Footer />
    </>
  );
}
