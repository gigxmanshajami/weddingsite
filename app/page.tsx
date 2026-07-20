import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Gallery } from "@/components/sections/Gallery";
import { Destinations } from "@/components/sections/Destinations";
import { WeddingStyles } from "@/components/sections/WeddingStyles";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Instagram } from "@/components/sections/Instagram";
import { FAQ } from "@/components/sections/FAQ";
import { Blog } from "@/components/sections/Blog";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { CostCalculator } from "@/components/features/CostCalculator";
import { ScrollProgress } from "@/components/features/ScrollProgress";
import { WhatsAppButton } from "@/components/features/WhatsAppButton";
import { BackToTop } from "@/components/features/BackToTop";
import { LoadingScreen } from "@/components/features/LoadingScreen";
import { CursorGlow } from "@/components/features/CursorGlow";

import { Showcase } from "@/components/sections/Showcase";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Showcase />
        <Services />
        {/* <WhyChooseUs /> */}
        <Gallery />
        <Destinations />
        <WeddingStyles />
        {/* <Process /> */}
        <Testimonials />
        <FAQ />
        {/* <Blog /> */}
        <ContactCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
