import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Process from "@/components/Process";
import IdealFit from "@/components/IdealFit";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Nav />
      <Hero />
      <About />
      <Work />
      <Testimonials />
      <Services />
      <Process />
      <IdealFit />
      <Contact />
      <Footer />
    </main>
  );
}
