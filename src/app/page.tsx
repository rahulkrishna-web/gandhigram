import Hero from "@/components/home/Hero";
import MissionStatement from "@/components/home/MissionStatement";
import Intro from "@/components/home/Intro";
import Programs from "@/components/home/Programs";
import CaseStudies from "@/components/home/CaseStudies";
import Volunteer from "@/components/home/Volunteer";
import DonorCarousel from "@/components/home/DonorCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <MissionStatement />
      <Intro />
      <Programs />
      <DonorCarousel />
      <CaseStudies />
      <Volunteer />
    </>
  );
}
