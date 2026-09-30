import Image from "next/image";
import { creatorBenefits, growthStats } from "@/constants/growth";
import studentGrowth from "@/public/home/growth/1.png";
import creatorGrowth from "@/public/home/growth/2.png";

export default function Growth() {
  return (
    <section
      aria-label="Grow with ByteSpace"
      className="overflow-hidden bg-[#fafafa] px-6 py-12 text-[#242528] sm:py-16 lg:py-24"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 28% 4%, #eaff9a 0%, transparent 29%), radial-gradient(ellipse at 96% 8%, #e7ebf8 0%, transparent 26%), radial-gradient(ellipse at 5% 51%, #d5def9 0%, transparent 28%), radial-gradient(ellipse at 2% 88%, #e8ff92 0%, transparent 24%), radial-gradient(ellipse at 88% 95%, #c6d3f6 0%, transparent 32%)",
      }}
    >
      <div className="mx-auto max-w-275">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-16">
          <div className="max-w-120">
            <h2 className="text-[clamp(28px,3.2vw,40px)] leading-[1.2] font-semibold tracking-tight">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-7 max-w-102.5 text-sm leading-[1.75] font-light text-[#606168] sm:text-[15px]">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you need.
            </p>
            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-5 sm:gap-x-12">
              {growthStats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <dt className="order-2 text-sm font-light text-[#606168]">{stat.label}</dt>
                  <dd className="text-[28px] leading-tight font-medium tracking-tight text-[#003cff]">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Image
            src={studentGrowth}
            alt="Student with headphones and a laptop, alongside a course preview and learning progress card."
            sizes="(max-width: 767px) calc(100vw - 48px), 550px"
            className="mx-auto h-auto w-full max-w-137.5"
          />
        </div>

        <div className="mt-8 grid items-center gap-8 md:mt-0 md:grid-cols-2 md:gap-10 lg:gap-16">
          <div className="md:order-2">
            <h2 className="max-w-112.5 text-[clamp(28px,3.2vw,40px)] leading-[1.2] font-semibold tracking-tight">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="mt-7 max-w-122.5 text-sm leading-[1.75] font-light text-[#606168] sm:text-[15px]">
              <span className="font-semibold text-[#242528]">ByteSpace</span>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>
            <ul className="mt-8 space-y-3">
              {creatorBenefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2.5 text-sm sm:text-[15px]">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
                    <circle cx="9" cy="9" r="9" fill="#003cff" />
                    <path d="m5 9 2.5 2.5L13 6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={creatorGrowth}
            alt="Course creator holding a tablet, with revenue and happy student cards."
            sizes="(max-width: 767px) calc(100vw - 48px), 500px"
            className="mx-auto h-auto w-full max-w-125 md:order-1"
          />
        </div>
      </div>
    </section>
  );
}
