"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";
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
      className="bg-white px-6 py-12 text-center sm:py-16"
    >
      <div className=" max-w-[1440px] px-[clamp(24px,8.333vw,120px)] mx-auto">
        <h2
          id="course-categories-heading"
          className="text-[clamp(28px,3.2vw,38px)] leading-[1.2] font-semibold tracking-[-0.025em] text-[#080b1c]"
        >
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>
        <p className="mx-auto mt-4 max-w-[800px] text-sm leading-[1.75] font-light text-[#858894] sm:text-[15px]">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>

        <div
          role="group"
          aria-label="Course categories"
          className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-9 lg:flex-col lg:gap-[18px]"
        >
          {visibleRows.map((categories, rowIndex) => (
            <div
              key={categories[0]}
              className="contents lg:flex lg:flex-wrap lg:justify-center lg:gap-[14px]"
            >
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  aria-pressed={selectedCategory === category}
                  aria-controls="course-results"
                  onClick={() => setSelectedCategory(category)}
                  className={`inline-flex min-h-10 items-center justify-center rounded-full px-[15px] py-2 text-[13px] leading-5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0a35e8] sm:min-h-9 sm:py-2 ${
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
                  className="inline-flex min-h-10 items-center justify-center rounded-full px-1 py-2 text-[13px] leading-5 text-[#003cff] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0a35e8] sm:min-h-9"
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
          className=" mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8"
        >
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
