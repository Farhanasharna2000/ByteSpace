"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/shared/Navbar";
import CourseCard from "@/components/shared/CourseCard";
import { creatorProfile } from "@/constants/creator";
import { getCourses } from "@/services/courses";

export default function CreatorProfile() {
  const [following, setFollowing] = useState(false);
  const [level, setLevel] = useState("All levels");
  const [category, setCategory] = useState("All courses");
  const [sort, setSort] = useState("Most relevant");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const allCourses = getCourses("Featured");
  const courses = allCourses.filter(
    (course) =>
      (level === "All levels" || course.level === level) &&
      (category === "All courses" || course.id === category),
  );
  if (sort === "Price: low to high") courses.sort((a, b) => a.price - b.price);
  if (sort === "Top rated")
    courses.sort((a, b) => Number(b.rating) - Number(a.rating));
  const control =
    "min-h-10 rounded-full border border-[#d7d8dd] bg-white px-4 py-2 text-xs text-[#45464f] focus-visible:outline-2 focus-visible:outline-[#003be2]";

  return (
    <main className="bg-white text-[#242528]">
      <header
        className="relative bg-[#003be2] text-white"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff18 1px, transparent 1px), linear-gradient(to bottom, #ffffff18 1px, transparent 1px)",
          backgroundSize: "104px 104px",
        }}
      >
        <Navbar overlay />
        <div className="mx-auto max-w-275 px-6 pt-32 pb-14 sm:pt-36">
          <div className="flex items-center gap-5">
            <Image
              src={creatorProfile.avatar}
              alt=""
              width={80}
              height={80}
              className="size-20 rounded-2xl bg-[#efb5cd]"
            />
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl font-semibold sm:text-3xl">
                  {creatorProfile.name}
                </h1>
                <span className="rounded-full bg-[#d4fb20] px-4 py-1 text-xs text-[#242528]">
                  Creator
                </span>
              </div>
              <p className="mt-2 text-sm text-white/85">
                {creatorProfile.tagline}
              </p>
            </div>
          </div>
          <div className="mt-8 text-sm leading-6 font-light text-white/85">
            <p>{creatorProfile.introduction}</p>
            <p>{creatorProfile.description}</p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-white px-5 py-2 text-xs text-[#242528]">
              <span className="text-[#003be2]">{allCourses.length}</span>{" "}
              Products
            </span>
            <span className="rounded-full bg-white px-5 py-2 text-xs text-[#242528]">
              <span className="text-[#003be2]">
                {creatorProfile.followers + Number(following)}
              </span>{" "}
              Followers
            </span>
            <button
              aria-pressed={following}
              onClick={() => setFollowing(!following)}
              className="ml-auto min-h-10 rounded-full bg-[#d4fb20] px-6 py-2 text-sm text-[#242528] hover:bg-[#e1ff57]"
            >
              {following ? "Following" : "Follow"}
            </button>
          </div>
        </div>
      </header>
      <section
        aria-label="Creator courses"
        className="mx-auto max-w-275 px-6 py-12"
      >
        <div className="flex flex-wrap items-center gap-3">
          <button
            className={control}
            aria-expanded={filtersOpen}
            aria-controls="creator-filters"
            onClick={() => setFiltersOpen(!filtersOpen)}
          >
            ☷ Filter
          </button>
          <label className="sr-only" htmlFor="creator-level">
            Level
          </label>
          <select
            id="creator-level"
            value={level}
            onChange={(event) => setLevel(event.target.value)}
            className={control}
          >
            <option value="All levels">▥ Level</option>
            <option>Beginner</option>
            <option>Intermediate</option>
          </select>
          <label className="sr-only" htmlFor="creator-category">
            Course
          </label>
          <select
            id="creator-category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className={`${control} max-w-50`}
          >
            <option value="All courses">Category</option>
            {allCourses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.title}
              </option>
            ))}
          </select>
          <label className="sr-only" htmlFor="creator-sort">
            Sort courses
          </label>
          <select
            id="creator-sort"
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className={`${control} sm:ml-auto`}
          >
            <option>Most relevant</option>
            <option>Price: low to high</option>
            <option>Top rated</option>
          </select>
        </div>
        {filtersOpen && (
          <div
            id="creator-filters"
            className="mt-4 rounded-xl bg-[#f5f5f7] p-4 text-sm"
          >
            Use the level and category controls to refine this creator’s
            courses.{" "}
            <button
              onClick={() => {
                setLevel("All levels");
                setCategory("All courses");
                setSort("Most relevant");
              }}
              className="ml-2 text-[#003be2] cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}
        <p role="status" className="sr-only">
          {courses.length} courses shown
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        {!courses.length && (
          <p className="py-16 text-center text-[#73747a]">
            No courses match these filters.
          </p>
        )}
      </section>
    </main>
  );
}
