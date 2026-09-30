import type { Metadata } from "next";
import CourseSearch from "@/components/courses/CourseSearch";

export const metadata: Metadata = {
  title: "Search Courses | ByteSpace",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string }>;
}) {
  const { q, category } = await searchParams;

  return (
    <CourseSearch
      key={`${q ?? ""}-${category ?? ""}`}
      initialQuery={q}
      initialCategory={category}
    />
  );
}
