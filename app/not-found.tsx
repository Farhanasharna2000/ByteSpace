import Link from "next/link";

export default function NotFound() {
  return (
    <>
    <main
      className="relative isolate h-125 md:h-150 lg:h-239.25 overflow-hidden bg-[#003be2] text-white"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgb(255 255 255 / 12%) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 12%) 1px, transparent 1px)",
        backgroundSize: "clamp(52px, 8.333vw, 120px) clamp(52px, 8.333vw, 120px)",
      }}
    >

      <section
        aria-labelledby="not-found-heading"
        className="mx-auto flex min-h-screen max-w-360 flex-col items-center px-5 pt-[clamp(140px,14.5vw,210px)] pb-[clamp(60px,8.5vw,120px)] text-center"
      >
        <p
          aria-hidden="true"
          className="bg-linear-to-b from-[#d4fb20] from-35% via-[#c5e827] via-60% to-[#003be2] bg-clip-text text-[clamp(160px,33vw,475px)] leading-[0.8] font-bold tracking-[-0.045em] text-transparent"
        >
          404
        </p>
        <h1
          id="not-found-heading"
          className="relative z-10 -mt-[clamp(28px,4.5vw,65px)] max-w-275 text-[clamp(27px,5.1vw,72px)] leading-[1.16] font-semibold tracking-[-0.035em]"
        >
          <span className="sr-only">404: </span>
          The page you are looking
          <br className="hidden sm:block" />{" "}
          for doesn’t exist
        </h1>
        <p className="mt-[clamp(24px,3vw,43px)] max-w-162.5  leading-6  text-white/85 lg:text-lg">
          Try to use a correct url or go back to homepage to start again
        </p>
        <Link
          href="/"
          className="mt-5 inline-flex min-h-10 items-center justify-center rounded-full bg-[#d4fb20] px-6 py-2.5 text-xs font-medium text-[#242528] transition-colors hover:bg-[#e1ff57] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:mt-7 lg:text-base"
        >
          Back to Home
        </Link>
      </section>
    </main>

    </>
  );
}
