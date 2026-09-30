import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/types/course";
import { mockStudents } from "@/constants/students";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="min-w-0 rounded-3xl border border-[#d7d8dd] bg-white p-4 text-left transition-shadow hover:shadow-lg">
      <Link
        href={`/courses/${course.id}`}
        aria-label={`View ${course.title}`}
        className="relative block aspect-[1.74] overflow-hidden rounded-xl"
      >
        <Image
          src={course.image}
          alt=""
          fill
          sizes="(max-width: 639px) calc(100vw - 74px), (max-width: 1023px) 45vw, 290px"
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 flex flex-wrap  gap-1 bg-linear-to-t from-black/30 to-transparent px-2.5 pt-6 pb-4">
          {[
            `${course.lessons} Lessons`,
            course.duration,
            `${course.comments} Comments`,
          ].map((label) => (
            <span
              key={label}
              className="rounded-full bg-white/75 px-2.5 py-1 lg:py-1.5 text-xs leading-3 text-[#45464f] backdrop-blur-sm"
            >
              {label}
            </span>
          ))}
        </div>
      </Link>

      <div className="pt-4 pb-1">
        <div className="flex items-center gap-3">
          <h3
            title={course.title}
            className="min-w-0 flex-1 truncate text-base lg:text-[20px] leading-6 font-semibold tracking-tight text-[#000000]"
          >
            <Link
              href={`/courses/${course.id}`}
              className="hover:text-[#003be2]"
            >
              {course.title}
            </Link>
          </h3>
          <span
            aria-label={`${course.rating} out of 5 stars`}
            className="flex shrink-0 items-center gap-1 text-sm lg:text-lg text-[#4F4F4F]"
          >
            {course.rating}
            <span aria-hidden="true" className="text-base text-[#cdd0d5]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4297 9.61158L12.9597 4.77158C12.6697 3.82158 11.3297 3.82158 11.0497 4.77158L9.56971 9.61158H5.11971C4.14971 9.61158 3.74971 10.8616 4.53971 11.4216L8.17972 14.0216L6.74971 18.6316C6.45971 19.5616 7.53972 20.3116 8.30972 19.7216L11.9997 16.9216L15.6897 19.7316C16.4597 20.3216 17.5397 19.5716 17.2497 18.6416L15.8197 14.0316L19.4597 11.4316C20.2497 10.8616 19.8497 9.62158 18.8797 9.62158H14.4297V9.61158Z"
                  fill="#CED0D3"
                />
              </svg>
            </span>
          </span>
        </div>
        <p className="text-xs leading-4 text-[#777980]">
          by <span className="text-[#003BE2]">{course.instructor}</span>
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f5f5f7] px-3 py-1.5 text-[10px] text-[#45464f]">
            <svg
              aria-hidden="true"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path d="M1 7h2v4H1zm4-3h2v7H5zm4-3h2v10H9z" />
            </svg>
            {course.level}
          </span>
          <div
            aria-label={`${course.students} students enrolled`}
            className="flex -space-x-2"
          >
            {mockStudents.map((student) => (
              <Image
                key={student.id}
                src={student.avatar}
                alt=""
                width={28}
                height={28}
                className="size-7 rounded-full  object-cover"
              />
            ))}
            <span
              aria-hidden="true"
              className="flex size-7 items-center justify-center rounded-full bg-[#ceff1a] text-[9px] text-[#182000]"
            >
              {course.students}+
            </span>
          </div>
        </div>
        <p className="mt-3 flex items-baseline pb-0.5">
          <span className="text-base lg:text-[20px] font-semibold text-[#003BE2]">
            ${course.price}
          </span>
          <span className="text-xs text-[#73747a]">/lifetime</span>
        </p>
      </div>
    </article>
  );
}
