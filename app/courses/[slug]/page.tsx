import { notFound } from "next/navigation";
import { getAllCourses } from "@/services/courses";
import CourseDetails from "@/components/courses/CourseDetails";
import Footer from "@/components/shared/Footer";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getAllCourses().find((item) => item.id === slug);
  if (!course) notFound();
  return (
    <>
      <CourseDetails course={course} />
      <Footer />
    </>
  );
}
