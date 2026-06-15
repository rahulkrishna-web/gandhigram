import Hero from "@/components/home/Hero";
import MissionStatement from "@/components/home/MissionStatement";
import VideoSection from "@/components/home/VideoSection";
import Intro from "@/components/home/Intro";
import StatsCarousel from "@/components/home/StatsCarousel";
import Programs from "@/components/home/Programs";
import Team from "@/components/home/Team";
import CaseStudies from "@/components/home/CaseStudies";
import NewsMarquee from "@/components/home/NewsMarquee";
import Volunteer from "@/components/home/Volunteer";
import DonorCarousel from "@/components/home/DonorCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <MissionStatement />
      <VideoSection />
      <Intro />
      <StatsCarousel />
      <Programs />
      <Team />
      <DonorCarousel />
      <CaseStudies />
      <NewsMarquee />
      <Volunteer />
    </>
  );
}
