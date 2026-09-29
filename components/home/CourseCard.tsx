import Image from "next/image";
import type { Course } from "@/types/course";
import { mockStudents } from "@/constants/students";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="min-w-0 rounded-[20px] border border-[#d7d8dd] bg-white p-3 text-left transition-shadow hover:shadow-lg">
      <div className="relative aspect-[1.74] overflow-hidden rounded-xl">
        <Image
          src={course.image}
          alt=""
          fill
          sizes="(max-width: 639px) calc(100vw - 74px), (max-width: 1023px) 45vw, 290px"
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 flex flex-wrap justify-between gap-1 bg-linear-to-t from-black/30 to-transparent px-2.5 pt-6 pb-4">
          {[`${course.lessons} Lessons`, course.duration, `${course.comments} Comments`].map((label) => (
            <span key={label} className="rounded-full bg-white/75 px-2.5 py-1 text-[9px] leading-3 text-[#45464f] backdrop-blur-sm">
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-4 pb-1">
        <div className="flex items-center gap-3">
          <h3 title={course.title} className="min-w-0 flex-1 truncate text-base leading-6 font-semibold tracking-[-0.025em] text-[#080b10]">
            {course.title}
          </h3>
          <span aria-label={`${course.rating} out of 5 stars`} className="flex shrink-0 items-center gap-1 text-sm text-[#606168]">
            {course.rating}<span aria-hidden="true" className="text-base text-[#cdd0d5]">★</span>
          </span>
        </div>
        <p className="text-[10px] leading-4 text-[#777980]">by <span className="text-[#003cff]">{course.instructor}</span></p>

        <div className="mt-3 flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f5f5f7] px-3 py-1.5 text-[10px] text-[#45464f]">
            <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M1 7h2v4H1zm4-3h2v7H5zm4-3h2v10H9z" />
            </svg>
            {course.level}
          </span>
          <div aria-label={`${course.students} students enrolled`} className="flex -space-x-2">
            {mockStudents.map((student) => (
              <span key={student.id} aria-hidden="true" className={`flex size-7 items-center justify-center rounded-full border-2 border-white text-[8px] font-medium text-[#303441] ${student.avatarColor}`}>
                {student.initials}
              </span>
            ))}
            <span aria-hidden="true" className="flex size-7 items-center justify-center rounded-full border-2 border-white bg-[#ceff1a] text-[9px] text-[#182000]">{course.students}+</span>
          </div>
        </div>
        <p className="mt-3 flex items-baseline pb-0.5"><span className="text-base font-semibold text-[#003cff]">${course.price}</span><span className="text-[9px] text-[#73747a]">/lifetime</span></p>
      </div>
    </article>
  );
}
