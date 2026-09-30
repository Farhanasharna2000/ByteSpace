import Link from "next/link";

export default function CreatorCTA() {
  return (
    <section
      aria-labelledby="creator-cta-heading"
      className="flex h-100 md:h-120  lg:h-162.5 items-center justify-center bg-[#073bea] bg-[url('/home/cta-bg.svg')] bg-cover bg-center px-6 py-10 text-center text-white lg:py-20"
    >
      <div className="mx-auto w-full max-w-[85%] lg:max-w-[70%]">
        <h2
          id="creator-cta-heading"
          className="mx-auto  text-2xl md:text-3xl lg:text-[44px] leading-[1.2] font-semibold tracking-tight"
        >
          Unlock Your Potential as a
          <br className="hidden sm:block" /> Creator with ByteSpace
        </h2>
        <p className="mt-2 text-sm leading-[1.75] font-light text-[#f5f5f6] md:mt-9 md:text-lg">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <Link
          href="/join"
          className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-[#D4FB20] px-6 py-2.5 text-[15px] font-medium text-[#171717] transition-colors hover:bg-[#e1ff57] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
