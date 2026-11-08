import Reveal from "@/components/ui/Reveal";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhyMe from "@/components/sections/WhyMe";
import Services from "@/components/sections/Services";
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
        <Experience />
        <WhyMe />
        <Services />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
