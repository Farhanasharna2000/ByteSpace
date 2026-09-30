import { learningPaths } from "@/constants/learning-paths";
import Image from "next/image";

export default function LearningPaths() {
  return (
    <section
      id="learning-paths"
      aria-labelledby="learning-paths-heading"
      className="bg-white px-6 pt-8 pb-16 text-center sm:pt-10 sm:pb-20"
    >
      <div className="mx-auto max-w-275">
        <h2
          id="learning-paths-heading"
          className="text-[clamp(24px,2.6vw,32px)] leading-tight font-semibold tracking-[-0.03em] text-[#080b1c]"
        >
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="mx-auto mt-4 max-w-205 text-sm leading-[1.75] font-light text-[#858894] sm:text-[15px]">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring there&apos;s
          something for everyone. Unleash your potential and explore our carefully
          curated categories.
        </p>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:mt-14 lg:grid-cols-6 lg:gap-8">
          {learningPaths.map((path) => (
            <li
              key={path.id}
              className="flex min-h-36.5 flex-col items-center justify-center gap-3 rounded-[20px] border border-[#d7d8dd] px-3 py-6"
            >
              <Image
                src={path.iconSrc}
                alt=""
                width={60}
                height={60}
                className="size-13"
              />
              <h3 className="text-sm leading-5 font-normal text-[#17171d] sm:text-base">
                {path.label}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
