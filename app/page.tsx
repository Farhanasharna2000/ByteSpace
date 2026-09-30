import Brand from "@/components/home/Brand";
import CourseCategories from "@/components/home/CourseCategories";
import CreatorCTA from "@/components/home/CreatorCTA";
import Hero from "@/components/home/Hero";
import Growth from "@/components/home/Growth";
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
