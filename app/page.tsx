import Brand from "@/components/home/Brand";
import CourseCategories from "@/components/home/CourseCategories";
import CreatorCTA from "@/components/home/cta/CreatorCTA";
import Hero from "@/components/home/hero/Hero";
import Growth from "@/components/home/growth/Growth";
import LearningPaths from "@/components/home/LearningPaths";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <main className="relative">

        <Hero />
        <Brand />
        <CourseCategories />
        <LearningPaths />
        <Growth />
        <CreatorCTA />
        <Testimonials />
      </main>

    </>
  );
}
