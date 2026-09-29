import mockCourses from "@/constants/courses.json";
import type { Course, CoursesByCategory } from "@/types/course";

// Replace this mock data source with the course API when it is available.
const coursesByCategory: CoursesByCategory = mockCourses;

export function getCourses(category: string): Course[] {
  return Object.prototype.hasOwnProperty.call(coursesByCategory, category)
    ? coursesByCategory[category]
    : [];
}
