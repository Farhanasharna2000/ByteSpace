import { courseModules } from "@/constants/course-details";

export default function CourseLessons() {
  return (
    <section className="mt-8 space-y-6">
      <div>
        <h2 className="lg:text-[20px] font-semibold">Explore the Modules</h2>
        <p className="mt-4 text-sm lg:text-base leading-6 text-[#73747a]">
          Immerse yourself in the course content as we break down each module
          into comprehensive lessons, providing practical insights and hands-on
          experiences.
        </p>
      </div>
      <div>
        <h3 className="lg:text-[20px] font-semibold">Lesson List</h3>
        <ol className="mt-5 space-y-5">
          {courseModules.map((module) => (
            <li key={module.id} className="flex items-start gap-3">
              <span className=" " aria-hidden="true">
                <svg
                  width="72"
                  height="72"
                  viewBox="0 0 72 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="72" height="72" rx="24" fill="#D4FB20" />
                  <path
                    d="M41 29.3333V42.6667H24.3333V29.3333H41ZM42.6667 26H22.6667C21.75 26 21 26.75 21 27.6667V44.3333C21 45.25 21.75 46 22.6667 46H42.6667C43.5833 46 44.3333 45.25 44.3333 44.3333V38.5L51 45.1667V26.8333L44.3333 33.5V27.6667C44.3333 26.75 43.5833 26 42.6667 26Z"
                    fill="#242528"
                  />
                </svg>
              </span>
              <div>
                <h4 className="text-sm lg:text-base leading-6 font-medium">
                  {module.title}
                </h4>
                <p className="text-sm lg:text-base leading-6 text-[#73747a]">
                  {module.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div>
        <h3 className="lg:text-[20px] font-semibold">Lesson Content</h3>
        <p className="mt-4 text-sm lg:text-base leading-6 text-[#73747a]">
          Engage with each lesson through captivating video content, detailed
          textual explanations, and interactive elements. Download resources,
          complete assignments, and test your understanding with quizzes.
        </p>
      </div>
      <div>
        <h3 className="lg:text-[20px] font-semibold">Lesson Progress Tracking</h3>
        <p className="mt-4 text-sm lg:text-base leading-6 text-[#73747a]">
          Witness your growth as you complete lessons, with an intuitive
          progress tracking feature guiding you through your learning journey.
        </p>
        <div className="mt-5 rounded-2xl border border-[#d7d8dd] p-4">
          <div className="text-xs lg:text-sm">
            <span>Learning Progress</span>
           
          </div>
          <p className="mt-2 text-3xl lg:text-[36px] leading-none font-semibold">55%</p>
          <div
            role="progressbar"
            aria-label="Demo learning progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={55}
            className="mt-3 h-2 overflow-hidden rounded-full bg-[#e5e6e8]"
          >
            <div className="h-full w-[55%] rounded-full bg-[#D4FB20]" />
          </div>
        </div>
      </div>
    </section>
  );
}
