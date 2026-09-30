"use client";

import Image from "next/image";
import { useState } from "react";
import { courseReviews, ratingSummary } from "@/constants/course-reviews";

export default function CourseReviews({ title }: { title: string }) {
  const [rating, setRating] = useState(0);
  const reviews = courseReviews.filter(
    (review) => !rating || review.rating === rating,
  );
  const total = ratingSummary.distribution.reduce(
    (sum, row) => sum + row.count,
    0,
  );

  return (
    <section className="mt-8">
      <h2 className="lg:text-[20px] font-semibold">What Learners Are Saying</h2>
      <p className="mt-4 text-sm lg:text-base leading-6 text-[#73747a]">
        Discover what our learners have to say about their experience with{" "}
        {title}: A Comprehensive Guide. Read reviews and ratings from
        individuals who have embarked on a journey of learning and creativity.
      </p>
      <div className="mt-6 flex flex-col gap-5 rounded-2xl border border-[#d7d8dd] p-5 sm:flex-row sm:items-center sm:p-7">
        <div className="flex min-h-28 shrink-0 flex-col items-center justify-center rounded-lg bg-[#D4FB20] px-7">
          <span className="text-xs lg:text-sm">Ratings</span>
          <strong className="mt-1 text-3xl lg:text-[36px]">{ratingSummary.average}</strong>
        </div>
        <div className="flex-1 space-y-2">
          {ratingSummary.distribution.map((row) => (
            <div
              key={row.stars}
              aria-label={`${row.stars} stars: ${row.count} ratings`}
              className="flex items-center gap-3"
            >
              <div
                className="h-1.5 min-w-10 flex-1 overflow-hidden rounded-full bg-[#e5e6e8]"
                aria-hidden="true"
              >
                <div
                  className="h-full rounded-full bg-[#D4FB20]"
                  style={{ width: `${(row.count / total) * 100}%` }}
                />
              </div>
              <span
                aria-hidden="true"
                className="whitespace-nowrap lg:text-2xl tracking-[2px] text-[#55565e]"
              >
                {"★".repeat(row.stars)}
                <span className="text-[#dedfe4]">
                  {"★".repeat(5 - row.stars)}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="w-7 text-right text-xs lg:text-base text-[#73747a]"
              >
                {row.count}
              </span>
            </div>
          ))}
        </div>
      </div>
      <h3 className="mt-6 font-semibold lg:text-[20px]">Individual Reviews:</h3>
      <div
        role="group"
        aria-label="Filter reviews by rating"
        className="mt-4 flex flex-wrap gap-3"
      >
        {[0, 5, 4, 3, 2, 1].map((value) => (
          <button
            key={value}
            aria-pressed={rating === value}
            onClick={() => setRating(value)}
            className={`min-h-9 rounded-full px-4 py-2 text-xs lg:text-base ${rating === value ? "bg-[#D4FB20]" : "bg-[#f5f5f7] text-[#55565e] hover:bg-[#e8e8ed]"}`}
          >
            {value ? `★ ${value}` : "All rating"}
          </button>
        ))}
      </div>
      <p role="status" className="sr-only">
        {reviews.length} sample reviews shown
      </p>
      <div className="mt-5 space-y-5">
        {reviews.map((review) => (
          <article
            key={review.id}
            className="rounded-[20px] border border-[#d7d8dd] p-6 lg:p-10"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <Image
                  src={review.avatar}
                  alt=""
                  width={40}
                  height={40}
                  className="size-10 rounded-full"
                />
                <div>
                  <h4 className="text-sm lg:text-lg font-medium">{review.name}</h4>
                  <p className="mt-0.5 text-xs lg:text-base text-[#73747a]">{review.role}</p>
                </div>
              </div>
              <span className="shrink-0 text-sm lg:text-base text-[#73747a]">
                {review.date}
              </span>
            </div>
            <p
              aria-label={`${review.rating} out of 5 stars`}
              className="mt-5 text-lg lg:text-2xl tracking-[3px] text-[#55565e]"
            >
              {"★".repeat(review.rating)}
              <span className="text-[#dedfe4]">
                {"★".repeat(5 - review.rating)}
              </span>
            </p>
            <p className="mt-3 text-sm lg:text-base leading-6 text-[#73747a]">
             "{review.text}"
            </p>
          </article>
        ))}
        {!reviews.length && (
          <p className="rounded-2xl border border-[#d7d8dd] p-7 text-sm text-[#73747a]">
            No sample reviews with this rating yet.
          </p>
        )}
      </div>
    </section>
  );
}
