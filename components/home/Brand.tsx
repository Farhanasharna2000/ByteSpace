import Image from "next/image";

const brands = [
  { src: "/home/brand/1.svg", width: 167, height: 41 },
  { src: "/home/brand/2.svg", width: 168, height: 41 },
  { src: "/home/brand/3.svg", width: 170, height: 41 },
  { src: "/home/brand/4.svg", width: 170, height: 41 },
  { src: "/home/brand/5.svg", width: 169, height: 42 },
];

export default function Brand() {
  return (
    <section aria-label="Our partners" className="bg-[#f5f5f7]">
      <ul className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-8 gap-y-7 px-[clamp(24px,8.333vw,120px)] py-10 sm:gap-x-12 md:min-h-40 md:py-12 lg:flex-nowrap lg:justify-between lg:gap-x-6">
        {brands.map((brand) => (
          <li key={brand.src} className="flex w-[120px] shrink-0 items-center justify-center sm:w-[136px] xl:w-[170px]">
            <Image
              src={brand.src}
              alt="Logoipsum"
              width={brand.width}
              height={brand.height}
              className="h-auto w-full"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
