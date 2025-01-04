import Image from "next/image";
import HeroSection from "./components/heroSection/HeroSection";
import FeaturedProductSection from "./components/featuredProductSection/FeaturedProductSection";
import WhyUsSection from "./components/whySection/WhyUsSection";
import OurProductSection from "./components/ourProductsSection/OurProductSection";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <WhyUsSection></WhyUsSection>
      <OurProductSection></OurProductSection>
      <section className="h-full">
        <div className="container max-auto"></div>
      </section>
    </>
  );
}
