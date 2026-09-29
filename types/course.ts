export type Course = {
  id: string;
  title: string;
  image: string;
  instructor: string;
  lessons: number;
  duration: string;
  comments: number;
  rating: string;
  level: string;
  students: number;
  price: number;
};

export type CoursesByCategory = Record<string, Course[]>;
