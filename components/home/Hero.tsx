import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate h-132.5 md:h-175 lg:h-256 overflow-hidden bg-[#0a35e8] text-white">
      <Image
        src="/home/heroo-bg.svg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-bottom"
      />

      <div className="mx-auto flex max-w-[80%] md:max-w-6xl flex-col items-center px-6 pt-20 lg:pt-30  text-center">
        <h1 className="text-2xl md:text-6xl lg:text-[72px] font-semibold ">
          Get Access to Hundreds Courses Available
        </h1>
        <p className=" mt-1 md:mt-5 max-w-xl text-sm md:text-lg font-light text-white/90">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <form
          action="/search"
          role="search"
          className="mt-7 flex w-full max-w-md items-center gap-3"
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
