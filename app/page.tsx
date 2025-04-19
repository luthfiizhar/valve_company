import HeroSection from "./components/heroSection/HeroSection";
import WhyUsSection from "./components/whySection/WhyUsSection";
import OurProductSection from "./components/ourProductsSection/OurProductSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-18 lg:gap-24">
      <HeroSection></HeroSection>

      <WhyUsSection></WhyUsSection>

      <OurProductSection></OurProductSection>
      {/* <section className="h-full">
        <div className="container max-auto"></div>
      </section> */}
    </div>
  );
}
