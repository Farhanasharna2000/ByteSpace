import Brand from "@/components/home/Brand";
import CourseCategories from "@/components/home/CourseCategories";
import Hero from "@/components/home/Hero";
import Growth from "@/components/home/Growth";
import LearningPaths from "@/components/home/LearningPaths";
import Navbar from "@/components/shared/Navbar";


export default function Home() {
  return (
    <main className="relative">
      <Navbar overlay />
      <Hero />
      <Brand />
      <CourseCategories />
      <LearningPaths />
      <Growth />
    </main>
  );
}
