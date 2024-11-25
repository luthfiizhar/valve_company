import Image from "next/image";
import HeroSection from "./components/heroSection/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <section className="h-full">
        <div className="container max-auto"></div>
      </section>
    </>
  );
}
