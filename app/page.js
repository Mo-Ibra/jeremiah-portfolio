"use client";

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
import { useEffect, useState } from "react";

export default function Home() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const openQuiz = () => {
    setIsQuizOpen(true);
  };

  const closeQuiz = () => {
    setIsQuizOpen(false);
  };

  // Handle body overflow when modal opens/closes
  useEffect(() => {
    if (isQuizOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isQuizOpen]);

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
      <Contact onOpenQuiz={openQuiz} />
      <QuizModal isOpen={isQuizOpen} onClose={closeQuiz} />
      <Footer />
    </>
  );
}
