import Footer from "@/components/shared/Footer";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";

export default function NotFound() {
  return (
    <>
    <main
      className="relative isolate overflow-hidden bg-[#003be2] text-white"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgb(255 255 255 / 12%) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 12%) 1px, transparent 1px)",
        backgroundSize: "clamp(52px, 8.333vw, 120px) clamp(52px, 8.333vw, 120px)",
      }}
    >
      <Navbar overlay />
      <section
        aria-labelledby="not-found-heading"
        className="mx-auto flex min-h-[620px] max-w-[1100px] flex-col items-center px-6 pt-36 pb-20 text-center sm:min-h-[720px] sm:pt-40 lg:min-h-[830px] lg:pt-44 lg:pb-28"
      >
        <p
          aria-hidden="true"
          className="bg-linear-to-b from-[#d4fb20] from-30% via-[#bddc36] via-65% to-[#003be2] bg-clip-text text-[clamp(150px,31vw,390px)] leading-[0.85] font-semibold tracking-[-0.055em] text-transparent"
        >
          404
        </p>
        <h1
          id="not-found-heading"
          className="relative -mt-2 max-w-[850px] text-[clamp(28px,5vw,64px)] leading-[1.15] font-semibold tracking-[-0.025em] sm:-mt-5"
        >
          <span className="sr-only">404: </span>
          The page you are looking for doesn’t exist
        </h1>
        <p className="mt-7 max-w-[520px] text-sm leading-6 font-light text-white/85 sm:mt-9 sm:text-base">
          Try using the correct URL or go back to the homepage to start again.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-[#d4fb20] px-6 py-2.5 text-sm font-medium text-[#242528] transition-colors hover:bg-[#e1ff57] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:mt-7 sm:text-base"
        >
          Back to Home
        </Link>
      </section>
    </main>
    <Footer />
    </>
  );
}
