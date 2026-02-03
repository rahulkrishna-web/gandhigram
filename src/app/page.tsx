import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import Programs from "@/components/home/Programs";
import CaseStudies from "@/components/home/CaseStudies";
import Volunteer from "@/components/home/Volunteer";
import DonorCarousel from "@/components/home/DonorCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <DonorCarousel />
      <Intro />
      <Programs />
      <CaseStudies />
      <Volunteer />
    </>
  );
}
