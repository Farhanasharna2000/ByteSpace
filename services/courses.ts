import mockCourses from "@/constants/courses.json";
import type { Course, CoursesByCategory } from "@/types/course";

// Replace this mock data source with the course API when it is available.
const coursesByCategory: CoursesByCategory = mockCourses;

export function getAllCourses(): Course[] {
  return Array.from(new Map(Object.values(coursesByCategory).flat().map((course) => [course.id, course])).values());
}

export function getCourses(category: string): Course[] {
  return Object.prototype.hasOwnProperty.call(coursesByCategory, category)
    ? coursesByCategory[category]
    : [];
}
