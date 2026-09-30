"use client";

import { useState } from "react";
import CourseCard from "../shared/CourseCard";
import { getCourses } from "@/services/courses";
import {
  categoryRows,
  additionalCategories,
} from "@/constants/course-categories";

export default function CourseCategories() {
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const [showMore, setShowMore] = useState(false);
  const courses = getCourses(selectedCategory);
  const visibleRows = showMore
    ? [...categoryRows, additionalCategories]
    : categoryRows;
  return (
    <section
      aria-labelledby="course-categories-heading"
      className="bg-white px-6 text-center py-10 lg:py-20"
    >
      <div className="max-w-360 px-[clamp(24px,8.333vw,120px)] mx-auto">
        <h2
          id="course-categories-heading"
          className="text-2xl md:text-3xl lg:text-[44px] leading-[1.2] font-semibold tracking-tight text-[#040819]"
        >
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>
        <p className="mx-auto mt-4 max-w-200 leading-[1.75] font-light text-[#82868E] text-sm lg:text-lg">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
        </p>

        <div
          role="group"
          aria-label="Course categories"
          className="mt-6 flex flex-wrap justify-center gap-3 lg:mt-9 lg:flex-col lg:gap-4.5"
        >
          {visibleRows.map((categories, rowIndex) => (
            <div
              key={categories[0]}
              className="contents lg:flex lg:flex-wrap lg:justify-center lg:gap-3.5"
            >
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  aria-pressed={selectedCategory === category}
                  aria-controls="course-results"
                  onClick={() => setSelectedCategory(category)}
                  className={`inline-flex  items-center justify-center rounded-full px-4 py-1 md:py-2 text-xs lg:text-base leading-5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0a35e8]   ${
                    selectedCategory === category
                      ? "bg-[#ceff1a] text-[#11131a] hover:bg-[#bfee00]"
                      : "bg-[#f5f5f7] text-[#45464f] hover:bg-[#e8e8ed]"
                  }`}
                >
                  {category}
                </button>
              ))}
              {rowIndex === visibleRows.length - 1 && (
                <button
                  type="button"
                  aria-expanded={showMore}
                  onClick={() => {
                    setShowMore((expanded) => !expanded);
                    if (
                      showMore &&
                      !categoryRows.flat().includes(selectedCategory)
                    ) {
                      setSelectedCategory("Featured");
                    }
                  }}
                  className="inline-flex min-h-10 items-center justify-center rounded-full px-1 py-2 text-[13px] leading-5 text-[#003cff] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0a35e8] sm:min-h-9"
                >
                  {showMore ? "− Less" : "+ More"}
                </button>
              )}
            </div>
          ))}
        </div>
        <p role="status" className="sr-only">
          Showing {courses.length} {selectedCategory} courses
        </p>
        <div
          id="course-results"
          aria-label={`${selectedCategory} courses`}
          className=" mt-10 lg:mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2  lg:grid-cols-3 lg:gap-10"
        >
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
