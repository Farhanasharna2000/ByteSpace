import type { Metadata } from "next";
import CourseSearch from "@/components/courses/CourseSearch";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Find Your Next Course | ByteSpace",
};

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string }>;
}) {
  const { q, category } = await searchParams;
  return (
    <>
      <CourseSearch
        key={`${q ?? ""}-${category ?? ""}`}
        initialQuery={q}
        initialCategory={category}
      />
      <Footer />
    </>
  );
}
