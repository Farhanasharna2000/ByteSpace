"use client";

import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import CourseCard from "@/components/shared/CourseCard";
import { getAllCourses, getCourses } from "@/services/courses";
import {
  categoryRows,
  additionalCategories,
} from "@/constants/course-categories";

const pageSize = 18;

export default function CourseSearch({
  initialQuery = "",
  initialCategory = "Featured",
}: {
  initialQuery?: string;
  initialCategory?: string;
}) {
  const [input, setInput] = useState(initialQuery);
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [level, setLevel] = useState("All levels");
  const [sort, setSort] = useState("Featured");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [page, setPage] = useState(1);
  const categories = [...categoryRows.flat(), ...additionalCategories];
  const courses = (
    category === "Featured" ? getAllCourses() : getCourses(category)
  )
    .filter((course) =>
      `${course.title} ${course.instructor}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
    )
    .filter((course) => level === "All levels" || course.level === level);
  if (sort === "Price: low to high") courses.sort((a, b) => a.price - b.price);
  if (sort === "Top rated")
    courses.sort((a, b) => Number(b.rating) - Number(a.rating));
  const totalPages = Math.max(1, Math.ceil(courses.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const visibleCourses = courses.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );
  const control =
    "min-h-10 rounded-full border border-[#dedfe4] bg-white px-4 py-2 text-[13px] text-[#45464f] focus-visible:outline-2 focus-visible:outline-[#003be2]";

  return (
    <main className="bg-white text-[#242528]">
      <div
        className="relative bg-[#003be2] text-white"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(255 255 255 / 12%) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 12%) 1px, transparent 1px)",
          backgroundSize: "104px 104px",
        }}
      >
        <Navbar overlay />
        <div className="max-w-360 px-[clamp(24px,8.333vw,120px)] mx-auto pt-32 pb-14 text-center sm:pt-36">
          <h1 className="text-2xl lg:text-[36px]  font-semibold tracking-tight">
            Find Your Next Course
          </h1>
          <form
            role="search"
            className="mx-auto mt-7 flex max-w-130 gap-3"
            onSubmit={(event) => {
              event.preventDefault();
              setQuery(input);
              setPage(1);
            }}
          >
            <label htmlFor="course-search" className="sr-only">
              Search courses
            </label>
            <input
              id="course-search"
              type="search"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Search"
              className="min-w-0 flex-1 rounded-full bg-white px-5 py-3 text-sm text-[#242528] outline-offset-4"
            />
            <button className="rounded-full bg-[#d4fb20] px-6 text-sm font-medium text-[#242528] hover:bg-[#e1ff57]">
              Search
            </button>
          </form>
        </div>
      </div>

      <section
        aria-label="Course search results"
        className="max-w-360 px-[clamp(24px,8.333vw,120px)] mx-auto py-10 lg:py-20"
      >
        <div className="flex flex-wrap items-center gap-3">
          <button
            className={`${control} inline-flex items-center gap-1.5`}
            aria-expanded={filtersOpen}
            aria-controls="course-filters"
            onClick={() => setFiltersOpen(!filtersOpen)}
          >
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16l-6 8v8l-4-2v-6L4 4Z" />
            </svg>
            Filter
          </button>
          <label
            className={`${control} relative inline-flex items-center gap-1.5 focus-within:ring-2 focus-within:ring-[#003be2]`}
          >
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M1 10h3v5H1zm5-4h3v9H6zm5-5h3v14h-3z" />
            </svg>
            <span>{level === "All levels" ? "Level" : level}</span>
            <select
              aria-label="Course level"
              className="absolute inset-0 w-full cursor-pointer opacity-0"
              value={level}
              onChange={(event) => {
                setLevel(event.target.value);
                setPage(1);
              }}
            >
              <option>All levels</option>
              <option>Beginner</option>
              <option>Intermediate</option>
            </select>
          </label>
          <label
            className={`${control} relative inline-flex items-center gap-1.5 focus-within:ring-2 focus-within:ring-[#003be2]`}
          >
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="m10 2 4 6H6l4-6ZM2 12h5v6H2z" />
              <circle cx="14.5" cy="15" r="3" />
            </svg>
            <span>Category</span>
            <select
              aria-label="Course category"
              className="absolute inset-0 w-full cursor-pointer opacity-0"
              value={category}
              onChange={(event) => {
                setCategory(event.target.value);
                setPage(1);
              }}
            >
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label
            className={`${control} relative inline-flex items-center gap-1.5 focus-within:ring-2 focus-within:ring-[#003be2] sm:ml-auto`}
          >
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M1 5h18M1 10h12M1 15h5" />
            </svg>
            <span>{sort === "Featured" ? "Most relevant" : sort}</span>
            <select
              aria-label="Sort courses"
              className="absolute inset-0 w-full cursor-pointer opacity-0"
              value={sort}
              onChange={(event) => {
                setSort(event.target.value);
                setPage(1);
              }}
            >
              <option value="Featured">Most relevant</option>
              <option>Price: low to high</option>
              <option>Top rated</option>
            </select>
          </label>
        </div>
        {filtersOpen && (
          <div
            id="course-filters"
            className="mt-4 flex flex-wrap items-center gap-3 rounded-xl bg-[#f5f5f7] p-4"
          >
            <label htmlFor="category-filter" className="text-sm">
              Category
            </label>
            <select
              id="category-filter"
              value={category}
              className={`${control} max-w-full`}
              onChange={(event) => {
                setCategory(event.target.value);
                setPage(1);
              }}
            >
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
            <button
              className="text-sm text-[#003be2] cursor-pointer"
              onClick={() => {
                setCategory("Featured");
                setLevel("All levels");
                setSort("Featured");
                setQuery("");
                setInput("");
                setPage(1);
              }}
            >
              Reset filters
            </button>
          </div>
        )}
        <div
          role="group"
          aria-label="Course categories"
          className="mt-6 flex flex-wrap gap-3 pb-3"
        >
          {[
            ...categoryRows[0],
            "Cooking",
            ...(![...categoryRows[0], "Cooking"].includes(category)
              ? [category]
              : []),
          ].map((item) => (
            <button
              key={item}
              aria-pressed={category === item}
              onClick={() => {
                setCategory(item);
                setPage(1);
              }}
              className={`shrink-0 rounded-full px-3.75 py-2.5 text-[13px] leading-4 ${category === item ? "bg-[#d4fb20] text-black" : "bg-[#f5f5f7] text-[#606168] hover:bg-[#e8e8ed]"}`}
            >
              {item}
            </button>
          ))}
        </div>
        <p role="status" className="sr-only">
          {courses.length} courses found. Page {currentPage} of {totalPages}.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {visibleCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        {!courses.length && (
          <p className="py-20 text-center text-[#606168]">
            No courses found. Try another search or reset your filters.
          </p>
        )}
        {totalPages > 1 && (
          <nav
            aria-label="Results pages"
            className="mt-12 flex flex-wrap justify-center gap-2"
          >
            <button
              aria-label="Previous page"
              disabled={currentPage === 1}
              onClick={() => setPage(currentPage - 1)}
              className={`${control} disabled:opacity-40`}
            >
              ‹
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (number) => (
                <button
                  key={number}
                  aria-current={currentPage === number ? "page" : undefined}
                  onClick={() => setPage(number)}
                  className={`size-10 rounded-full text-sm ${currentPage === number ? "bg-[#d4fb20]" : "hover:bg-[#f5f5f7]"}`}
                >
                  {number}
                </button>
              ),
            )}
            <button
              aria-label="Next page"
              disabled={currentPage === totalPages}
              onClick={() => setPage(currentPage + 1)}
              className={`${control} disabled:opacity-40`}
            >
              ›
            </button>
          </nav>
        )}
      </section>
    </main>
  );
}
