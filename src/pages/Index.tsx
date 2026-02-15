import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ValueProps />
      <Products />
      <Gallery />
      <Process />
      <Benefits />
      <Testimonials />
      <About />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
