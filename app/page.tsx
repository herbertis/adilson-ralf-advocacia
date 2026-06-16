import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import About from "@/components/About";
import Differentials from "@/components/Differentials";
import Timeline from "@/components/Timeline";
import TeamSlider from "@/components/TeamSlider";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Início",
  alternates: { canonical: "https://adilsonralfadvocacia.com.br" }
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Services />
      <About />
      <TeamSlider />
      <Differentials />
      <Timeline />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
