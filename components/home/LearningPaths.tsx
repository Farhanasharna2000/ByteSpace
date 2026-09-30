import { learningPaths } from "@/constants/learning-paths";
import Image from "next/image";

export default function LearningPaths() {
  return (
    <section
      id="learning-paths"
      aria-labelledby="learning-paths-heading"
      className="bg-white text-center pb-10 lg:pb-20"
    >
      <div className="max-w-360 px-[clamp(24px,8.333vw,120px)] mx-auto">
        <h2
          id="learning-paths-heading"
          className="text-2xl lg:text-[36px] leading-tight font-semibold tracking-[-0.03em] text-[#080b1c]"
        >
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="mx-auto mt-4 max-w-[90%] md:max-w-[85%] text-sm lg:text-lg leading-[1.75]  text-[#82868E] ">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
        </p>

        <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:mt-14 lg:grid-cols-6 lg:gap-8">
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
              <h3 className="text-sm leading-5 font-normal text-[#17171d] lg:text-[20px]">
                {path.label}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
