import Image from "next/image";
import styles from "./Hero.module.css";

const decorations = [
  "squiggle-right",
  "squiggle-left",
  "squiggle-small",
  "ring",
  "block",
  "triangle",
];

export default function Hero() {
  return (
    <section className="relative isolate h-135 md:h-175 lg:h-256 overflow-hidden bg-[#0a35e8] text-white">
      <div aria-hidden="true" className={`pointer-events-none absolute inset-0 -z-10 ${styles.canvas}`}>
        <Image
          src="/home/hero/scene.webp"
          alt=""
          fill
          preload
          quality={85}
          sizes="(max-width: 767px) 836px, (max-width: 1023px) 1083px, max(100vw, 1584px)"
          className="object-cover object-bottom"
        />
        <div className={styles.stage}>
        {decorations.map((decoration, index) => (
          <div
            key={decoration}
            className={`absolute -inset-[5%] ${styles.float}`}
            style={{
              animationDelay: `${index * -1.3}s`,
              animationDuration: `${7 + index}s`,
            }}
          >
            <Image
              src={`/home/hero/${decoration}.webp`}
              alt=""
              fill
              unoptimized
              loading="eager"
              sizes="(max-width: 767px) 836px, (max-width: 1023px) 1083px, max(100vw, 1584px)"
              className="object-fill"
            />
          </div>
        ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-[80%] md:max-w-[70%] lg:max-w-6xl flex-col items-center px-6 pt-20 lg:pt-30  text-center">
        <h1 className="text-2xl md:text-4xl lg:text-[72px] font-semibold ">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mt-2 md:mt-5 max-w-xl text-sm lg:text-lg font-light text-white/90">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <form
          action="/search"
          role="search"
          className="mt-4 md:mt-7 flex w-full max-w-md items-center gap-3"
        >
          <label className="flex h-11 flex-1 items-center gap-2 rounded-full bg-white px-4 text-neutral-500">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              type="search"
              name="q"
              aria-label="Search courses"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-[13px] outline-none placeholder:text-neutral-400"
            />
          </label>
          <button className="h-9 rounded-full bg-[#c8ff00] px-5 text-[13px] font-medium text-neutral-900">
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
