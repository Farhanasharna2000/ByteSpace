import mockCourses from "@/constants/courses.json";
import type { Course, CoursesByCategory } from "@/types/course";

const coursesByCategory: CoursesByCategory = mockCourses;

export function getAllCourses(): Course[] {
  return Array.from(
    new Map(
      Object.values(coursesByCategory)
        .flat()
        .map((course) => [course.id, course]),
    ).values(),
  );
}

export function getCourses(category: string): Course[] {
  return Object.prototype.hasOwnProperty.call(coursesByCategory, category)
    ? coursesByCategory[category]
    : [];
}
