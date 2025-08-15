import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero";
import NoiseOverlay from "@/components/NoiseOverlay";
import Preload from "@/components/Preload";
import VideoReels from "@/components/VideoReels";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Principles from "@/components/Principles";
import Faqs from "@/components/Faqs";
import Contact from "@/components/Contact";
import QuizModal from "@/components/QuizModal";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <NoiseOverlay />
      <Preload />
      <Navigation />
      <Hero />
      <VideoReels />
      <Services />
      <Portfolio />
      <About />
      <Principles />
      <Faqs />
      <Contact />
      <QuizModal />
      <Footer />
    </>
  );
}
