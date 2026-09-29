"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import type { Course } from "@/types/course";
import { courseOutline, courseBenefits, courseKeyPoints, courseSneakPeeks } from "@/constants/course-details";

export default function CourseDetails({ course }: { course: Course }) {
  const [tab, setTab] = useState("About");
  const [message, setMessage] = useState("");

  return (
    <main className="bg-white text-[#242528]">
      <div className="relative bg-[#003be2] text-white" style={{ backgroundImage: "linear-gradient(to right, #ffffff18 1px, transparent 1px), linear-gradient(to bottom, #ffffff18 1px, transparent 1px)", backgroundSize: "104px 104px" }}>
        <Navbar overlay />
        <div className="mx-auto max-w-[1100px] px-6 pt-32 pb-10 sm:pt-36">
          <div className="flex items-start justify-between gap-5">
            <div>
              <h1 className="text-2xl leading-tight font-semibold sm:text-3xl">{course.title}: A Comprehensive Guide</h1>
              <p className="mt-2 text-sm text-white/85">Unlock your potential with expert guidance</p>
              <p className="mt-4 text-xs">by {course.instructor}</p>
            </div>
            <button className="shrink-0 rounded-full bg-[#d4fb20] px-5 py-2 flex gap-2 items-center text-xs md:text-base text-[#242528]" onClick={async () => {
              try { await navigator.clipboard.writeText(window.location.href); setMessage("Course link copied."); }
              catch { setMessage("Copy the page URL from your address bar to share this course."); }
            }}><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 14.08C14.24 14.08 13.56 14.38 13.04 14.85L5.91 10.7C5.96 10.47 6 10.24 6 10C6 9.76 5.96 9.53 5.91 9.3L12.96 5.19C13.5 5.69 14.21 6 15 6C16.66 6 18 4.66 18 3C18 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 3.24 12.04 3.47 12.09 3.7L5.04 7.81C4.5 7.31 3.79 7 3 7C1.34 7 0 8.34 0 10C0 11.66 1.34 13 3 13C3.79 13 4.5 12.69 5.04 12.19L12.16 16.35C12.11 16.56 12.08 16.78 12.08 17C12.08 18.61 13.39 19.92 15 19.92C16.61 19.92 17.92 18.61 17.92 17C17.92 15.39 16.61 14.08 15 14.08ZM15 2C15.55 2 16 2.45 16 3C16 3.55 15.55 4 15 4C14.45 4 14 3.55 14 3C14 2.45 14.45 2 15 2ZM3 11C2.45 11 2 10.55 2 10C2 9.45 2.45 9 3 9C3.55 9 4 9.45 4 10C4 10.55 3.55 11 3 11ZM15 18.02C14.45 18.02 14 17.57 14 17.02C14 16.47 14.45 16.02 15 16.02C15.55 16.02 16 16.47 16 17.02C16 17.57 15.55 18.02 15 18.02Z" fill="#242528"/>
</svg>
 Share</button>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 text-xs text-[#242528]">
            {[course.level, `★ ${course.rating} rating`, `${course.students}+ Students`].map((label) => <span key={label} className="rounded-full bg-white px-4 py-2">{label}</span>)}
          </div>
          <div className="mt-9 grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)] lg:gap-12">
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-[#e6e6e6]">
              <Image src={course.image} alt={`Preview of ${course.title}`} fill sizes="(max-width: 1023px) 100vw, 700px" className="object-cover" />
              <button aria-label="Play course preview" onClick={() => setMessage("A video preview is not available for this demo course yet.")} className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20">
                <span className="flex size-16 items-center justify-center rounded-full bg-white/90 text-2xl text-[#003be2] shadow-lg">▶</span>
              </button>
            </div>
          </div>
          <p role="status" className="mt-3 text-sm">{message}</p>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1100px] gap-10 px-6 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)] lg:gap-12">
        <div>
          <div role="group" aria-label="Course information" className="flex gap-3">
            {["About", "Lessons", "Reviews"].map((item) => <button key={item} aria-pressed={tab === item} onClick={() => setTab(item)} className={`rounded-full px-5 py-2 text-sm ${tab === item ? "bg-[#d4fb20]" : "bg-[#f5f5f7]"}`}>{item}</button>)}
          </div>
          {tab === "About" && <div className="mt-8 space-y-7">
            <section>
              <h2 className="font-semibold">Description</h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-[#73747a]">
                <p>Start your learning journey with {course.title}. This course introduces the essential concepts, tools, and techniques you need to develop your skills with confidence. Follow clear explanations and practical examples at your own pace.</p>
                <p>Move from foundational ideas to hands-on practice as you explore new approaches and build your understanding. Each stage encourages you to experiment, solve problems, and apply what you learn to your own projects.</p>
                <p>Whether you are exploring a new interest or expanding your existing knowledge, this course offers a structured path to keep learning. Join a community of curious learners and take the next step in your development.</p>
              </div>
            </section>
            <section>
              <h2 className="font-semibold">Sneak Peek</h2>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">{courseSneakPeeks.map((src) => <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl"><Image src={src} alt="Sample course project" fill sizes="160px" className="object-cover" /></div>)}</div>
            </section>
            <section>
              <h2 className="font-semibold">Key Points</h2>
              <ul className="mt-4 space-y-3 text-sm text-[#73747a]">{courseKeyPoints.map((point) => <li key={point} className="flex gap-2"><span className="text-[#003be2]" aria-hidden="true">●</span>{point}</li>)}</ul>
            </section>
          </div>}
          {tab === "Lessons" && <section className="mt-8"><h2 className="font-semibold">Sample lesson outline</h2><p className="mt-2 text-sm text-[#73747a]">A preview of the demo curriculum.</p><ol className="mt-5 divide-y divide-[#dedfe4]">{courseOutline.map((lesson) => <li key={lesson.id} className="flex justify-between gap-5 py-5 text-sm"><span>{lesson.title}</span><span className="shrink-0 text-[#003be2]">{lesson.duration}</span></li>)}</ol></section>}
          {tab === "Reviews" && <section className="mt-8"><h2 className="font-semibold">Learner Reviews</h2><p className="mt-4 text-sm text-[#73747a]">Reviews for this demo course are not available yet.</p></section>}
        </div>

        <aside className="relative self-start rounded-2xl border border-[#dedfe4] bg-white p-6 lg:-mt-[440px]">
          <h2 className="font-semibold">{course.lessons} Lessons ({course.duration})</h2>
          <ol className="mt-5 space-y-4">{courseOutline.map((lesson) => <li key={lesson.id} className="flex justify-between gap-3 text-xs"><span>▷ {lesson.title}</span><span className="shrink-0 text-[#003be2]">{lesson.duration}</span></li>)}</ol>
          <p className="mt-4 text-xs text-[#858894]">Sample curriculum</p>
          <p className="mt-6 text-xs leading-5 text-[#858894]">Ready to start? Build your skills with guided lessons and hands-on practice.</p>
          <p className="mt-4 text-2xl font-semibold text-[#003be2]">${course.price}<span className="text-xs font-normal text-[#858894]">/lifetime</span></p>
          <Link href="/join" className="mt-4 block rounded-full bg-[#d4fb20] px-5 py-3 text-center text-sm font-medium hover:bg-[#c4eb10]">Enroll Now</Link>
          <h3 className="mt-6 text-sm font-semibold">This course includes</h3>
          <ul className="mt-4 space-y-3 text-xs text-[#73747a]">{courseBenefits.map((benefit) => <li key={benefit}><span aria-hidden="true" className="mr-2 text-[#003be2]">✓</span>{benefit}</li>)}</ul>
          <div className="mt-6 border-t border-[#dedfe4] pt-5">
            <p className="text-sm font-semibold">{course.instructor}</p><p className="mt-1 text-xs text-[#858894]">Professional Creator</p>
            <p className="mt-4 text-xs leading-5 text-[#858894]">Sharing practical knowledge to help you learn, create, and grow.</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
