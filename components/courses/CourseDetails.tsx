"use client";

import CourseReviews from "./CourseReviews";
import CourseLessons from "./CourseLessons";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/types/course";
import {
  sidebarLessons,
  sidebarBenefits,
  courseKeyPoints,
  courseSneakPeeks,
} from "@/constants/course-details";

export default function CourseDetails({ course }: { course: Course }) {
  const [tab, setTab] = useState("About");
  const [message, setMessage] = useState("");

  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    },
    [],
  );

  function showToast(text: string) {
    setMessage(text);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setMessage(""), 6000);
  }

  return (
    <main className="bg-white text-[#242528]">
      <div
        className="relative bg-[#003be2] text-white"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff18 1px, transparent 1px), linear-gradient(to bottom, #ffffff18 1px, transparent 1px)",
          backgroundSize: "104px 104px",
        }}
      >

        <div className="max-w-360 px-[clamp(24px,8.333vw,120px)] mx-auto pt-32 pb-10 lg:pb-16 lg:pt-36">
          <div className="flex items-start justify-between gap-5">
            <div>
              <h1 className="leading-tight font-semibold text-2xl lg:text-[36px]">
                {course.title}: A Comprehensive Guide
              </h1>
              <p className="mt-2 text-base lg:text-[20px] text-white/85">
                Unlock your potential with expert guidance
              </p>
              <p className="mt-4 text-sm lg:text-lg">by {course.instructor}</p>
            </div>
            <button
              className="shrink-0 rounded-full bg-[#d4fb20] px-5 py-2 flex gap-2 items-center text-xs md:text-base text-[#242528]"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(window.location.href);
                  showToast("Course link copied.");
                } catch {
                  showToast(
                    "Copy the page URL from your address bar to share this course.",
                  );
                }
              }}
            >
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 14.08C14.24 14.08 13.56 14.38 13.04 14.85L5.91 10.7C5.96 10.47 6 10.24 6 10C6 9.76 5.96 9.53 5.91 9.3L12.96 5.19C13.5 5.69 14.21 6 15 6C16.66 6 18 4.66 18 3C18 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 3.24 12.04 3.47 12.09 3.7L5.04 7.81C4.5 7.31 3.79 7 3 7C1.34 7 0 8.34 0 10C0 11.66 1.34 13 3 13C3.79 13 4.5 12.69 5.04 12.19L12.16 16.35C12.11 16.56 12.08 16.78 12.08 17C12.08 18.61 13.39 19.92 15 19.92C16.61 19.92 17.92 18.61 17.92 17C17.92 15.39 16.61 14.08 15 14.08ZM15 2C15.55 2 16 2.45 16 3C16 3.55 15.55 4 15 4C14.45 4 14 3.55 14 3C14 2.45 14.45 2 15 2ZM3 11C2.45 11 2 10.55 2 10C2 9.45 2.45 9 3 9C3.55 9 4 9.45 4 10C4 10.55 3.55 11 3 11ZM15 18.02C14.45 18.02 14 17.57 14 17.02C14 16.47 14.45 16.02 15 16.02C15.55 16.02 16 16.47 16 17.02C16 17.57 15.55 18.02 15 18.02Z"
                  fill="#242528"
                />
              </svg>
              Share
            </button>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 text-xs text-[#242528]">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2">
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="#003bff"
              >
                <path d="M2 10h2v5H2zm4-4h2v9H6zm4-4h2v13h-2z" />
              </svg>
              {course.level}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2">
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#003bff"
              >
                <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
              </svg>
              {course.rating} rating
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2">
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#003bff"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="7" r="3" />
                <path d="M3 19v-2a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v2H3Zm13-15a3 3 0 0 1 0 6m2 3a4 4 0 0 1 3 4v2h-3M7 16h4" />
              </svg>
              {course.students}+ Students
            </span>
          </div>
          <div className="mt-9 grid gap-8 lg:grid-cols-[minmax(0,720px)_minmax(260px,1fr)] lg:gap-12">
            <div className="relative aspect-720/479 w-full max-w-180 overflow-hidden rounded-3xl bg-[#e6e6e6]">
              <Image
                src={course.image}
                alt={`Preview of ${course.title}`}
                fill
                sizes="(max-width: 767px) 100vw, 720px"
                className="object-cover"
              />
              <button
                aria-label="Play course preview"
                onClick={() =>
                  showToast(
                    "A video preview is not available for this demo course yet.",
                  )
                }
                className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20"
              >
                <span className="flex size-16 items-center justify-center rounded-full bg-white/90 text-2xl text-[#003be2] shadow-lg">
                  ▶
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-360 px-[clamp(24px,8.333vw,120px)] mx-auto grid gap-10  py-10 lg:py-20 lg:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)] lg:gap-12">
        <div>
          <div
            role="group"
            aria-label="Course information"
            className="flex gap-3"
          >
            {["About", "Lessons", "Reviews"].map((item) => (
              <button
                key={item}
                aria-pressed={tab === item}
                onClick={() => setTab(item)}
                className={`rounded-full px-5 py-2 text-sm lg:text-base ${tab === item ? "bg-[#D4FB20]" : "bg-[#f5f5f7]"}`}
              >
                {item}
              </button>
            ))}
          </div>
          {tab === "About" && (
            <div className="mt-8 space-y-7">
              <section>
                <h2 className="font-semibold lg:text-[20px]">Description</h2>
                <div className="mt-4 space-y-4 text-sm lg:text-base leading-7 text-[#73747a]">
                  <p>
                    Embark on an enlightening exploration into the world of
                    digital creation with our comprehensive course, &quot;Build
                    Digital Assets: A Comprehensive Guide.&quot; This transformative
                    learning experience invites you to delve deep into the
                    intricacies of crafting impactful digital content. From
                    laying the groundwork with foundational concepts to
                    mastering advanced techniques, this guide is meticulously
                    curated to empower you with the skills essential for
                    navigating the dynamic landscape of digital asset creation.
                  </p>
                  <p>
                    In the initial modules, you&apos;ll establish a solid foundation
                    by immersing yourself in the foundational concepts that form
                    the backbone of digital asset creation. Understand the
                    fundamental elements that constitute compelling digital
                    content and gain proficiency in leveraging these elements to
                    communicate effectively in the digital realm.
                  </p>
                  <p>
                    As you progress through the course, you&apos;ll ascend to higher
                    levels of expertise, delving into the nuances of design
                    principles that drive impactful creations. Uncover the
                    secrets behind effective visual communication, exploring
                    color theory, typography, and layout strategies that elevate
                    your digital assets to new heights. Engage in hands-on
                    exercises that reinforce your understanding, allowing you to
                    apply these principles in practical scenarios.
                  </p>
                </div>
              </section>
              <section>
                <h2 className="font-semibold lg:text-[20px]">Sneak Peek</h2>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {courseSneakPeeks.map((src) => (
                    <div
                      key={src}
                      className="relative aspect-4/3 overflow-hidden rounded-2xl"
                    >
                      <Image
                        src={src}
                        alt="Sample course project"
                        fill
                        sizes="160px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </section>
              <section>
                <h2 className="font-semibold lg:text-[20px]">Key Points</h2>
                <ul className="mt-4 space-y-3 text-sm lg:text-base text-[#73747a]">
                  {courseKeyPoints.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-[#003be2]" aria-hidden="true">
                        <svg
                          aria-hidden="true"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          className="shrink-0"
                        >
                          <circle cx="9" cy="9" r="9" fill="#003cff" />
                          <path
                            d="m5 9 2.5 2.5L13 6"
                            stroke="white"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          )}
          {tab === "Lessons" && <CourseLessons />}
          {tab === "Reviews" && <CourseReviews title={course.title} />}
        </div>

        <aside className="relative self-start rounded-3xl border border-[#d7d8dd] bg-white px-7 py-7 lg:-mt-157">
          <h2 className="lg:text-[20px] font-semibold tracking-tight">
            112 Lessons (24 hours)
          </h2>
          <ol className="mt-5 space-y-3">
            {sidebarLessons.map((lesson) => (
              <li
                key={lesson.number}
                className="flex items-start gap-2 font-medium leading-[1.2]"
              >
                <span>{lesson.number}</span>
                <span className="flex-1">{lesson.title}</span>
                <span className="ml-3 shrink-0 text-[#003be2]">
                  {lesson.duration}
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-3 text-[#73747a]">99 more videos</p>
          <p className="mt-6  text-[#73747a]">
            Ready to Dive In? Enroll Now and Start Building Your Digital Future!
          </p>
          <p className="mt-4 text-xl lg:text-[36px] font-semibold tracking-tight text-[#003be2]">
            ${course.price}
            <span className="text-xs font-normal tracking-normal text-[#73747a]">
              /lifetime
            </span>
          </p>
          <Link
            href="/join"
            className="mt-3 block rounded-full bg-[#ceff1a] px-5 py-2 text-center text-sm hover:bg-[#bfee00]"
          >
            Enroll Now
          </Link>
          <h3 className="mt-4 text-base lg:text-[20px] font-semibold tracking-tight">
            This course include
          </h3>
          <ul className="mt-5 space-y-4 text-xs text-[#73747a]">
            {sidebarBenefits.map((benefit) => (
              <li key={benefit.label} className="flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#003bff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0"
                >
                  <path d={benefit.path} />
                </svg>
                {benefit.label}
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-[#dedfe4] pt-4">
            <div className="flex items-center gap-3">
              <Image
                src="/home/testimonials/james-l.svg"
                alt=""
                width={38}
                height={38}
                className="size-9.5 rounded-full"
              />
              <div>
                <p className="text-sm">PurePearl Studio</p>
                <p className="mt-0.5 text-xs text-[#73747a]">
                  Professional Creator
                </p>
              </div>
            </div>
            <p className="mt-5 text-xs leading-5 text-[#73747a]">
              Ready to Dive In? Enroll Now and Start Building Your Digital
              Future!
            </p>
            <Link
              href="/creators/purepearl-studio"
              className="mt-4 inline-block rounded-full border border-[#d7d8dd] px-3 py-1 text-xs text-[#45464f]"
            >
              See Full Profile
            </Link>
          </div>
        </aside>
      </div>
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="fixed top-5 right-5 left-5 z-50 sm:left-auto sm:w-96"
      >
        {message && (
          <div className="flex items-start gap-3 rounded-2xl border border-[#dedfe4] bg-white p-4 text-sm text-[#242528] shadow-xl">
            <span
              aria-hidden="true"
              className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#ceff1a] font-semibold"
            >
              i
            </span>
            <p className="flex-1 leading-6">{message}</p>
            <button
              type="button"
              aria-label="Dismiss notification"
              onClick={() => {
                if (toastTimer.current) clearTimeout(toastTimer.current);
                setMessage("");
              }}
              className="flex size-7 shrink-0 items-center justify-center rounded-full text-lg text-[#73747a] hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-[#003cff]"
            >
              ×
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
