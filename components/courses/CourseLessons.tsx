import { courseModules } from "@/constants/course-details";

export default function CourseLessons() {
  return (
    <section className="mt-8 space-y-6">
      <div>
        <h2 className="text-lg font-semibold">Explore the Modules</h2>
        <p className="mt-4 text-sm leading-6 text-[#73747a]">
          Immerse yourself in the course content as we break down each module
          into comprehensive lessons, providing practical insights and hands-on
          experiences.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Lesson List</h3>
        <ol className="mt-5 space-y-5">
          {courseModules.map((module) => (
            <li key={module.id} className="flex items-start gap-3">
              <span
                className="flex size-14 shrink-0 items-center justify-center rounded-[20px] bg-[#ceff1a] sm:size-16"
                aria-hidden="true"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                >
                  <path d="M3 6h12v12H3zM15 10l6-4v12l-6-4" />
                </svg>
              </span>
              <div>
                <h4 className="text-sm leading-6 font-medium">
                  {module.title}
                </h4>
                <p className="text-sm leading-6 text-[#73747a]">
                  {module.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Lesson Content</h3>
        <p className="mt-4 text-sm leading-6 text-[#73747a]">
          Engage with each lesson through captivating video content, detailed
          textual explanations, and interactive elements. Download resources,
          complete assignments, and test your understanding with quizzes.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Lesson Progress Tracking</h3>
        <p className="mt-4 text-sm leading-6 text-[#73747a]">
          Witness your growth as you complete lessons, with an intuitive
          progress tracking feature guiding you through your learning journey.
        </p>
        <div className="mt-5 rounded-2xl border border-[#d7d8dd] p-4">
          <div className="flex items-center justify-between gap-3 text-xs">
            <span>Learning Progress</span>
            <span className="text-[#858894]">Demo progress</span>
          </div>
          <p className="mt-2 text-3xl leading-none font-semibold">55%</p>
          <div
            role="progressbar"
            aria-label="Demo learning progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={55}
            className="mt-3 h-2 overflow-hidden rounded-full bg-[#e5e6e8]"
          >
            <div className="h-full w-[55%] rounded-full bg-[#ceff1a]" />
          </div>
        </div>
      </div>
    </section>
  );
}
