import FeturedCourses from "@/components/FeturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchollTestimonials from "@/components/TestimonialCards";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeturedCourses />
      <WhyChooseUsSection />
      <MusicSchollTestimonials />
    </main>
  );
}
