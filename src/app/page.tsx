import Reveal from "@/components/ui/Reveal";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import WhyMe from "@/components/sections/WhyMe";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import ClientJourney from "@/components/sections/ClientJourney";
import Experience from "@/components/sections/Experience";
import Credentials from "@/components/sections/Credentials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Reveal />
      <Navbar />
      <main>
        <Hero />
        <Story />
        <WhyMe />
        <Services />
        <Work />
        <ClientJourney />
        <Experience />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
