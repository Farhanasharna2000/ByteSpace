import Brand from "@/components/home/Brand";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/shared/Navbar";


export default function Home() {
  return (
    <main className="relative">
      <Navbar overlay />
      <Hero />
      <Brand />
    </main>
  );
}
