import { brands } from "@/constants/brand";
import Image from "next/image";

export default function Brand() {
  return (
    <section aria-label="Our partners" className="bg-[#f5f5f7]">
      <ul
        className="mx-auto flex max-w-360 flex-wrap items-center justify-center gap-x-8 gap-y-7 px-[clamp(24px,8.333vw,120px)] py-10 lg:py-20  
      md:gap-x-12 md:min-h-40 lg:flex-nowrap lg:justify-between lg:gap-x-6"
      >
        {brands.map((brand) => (
          <li
            key={brand.src}
            className="flex w-30 shrink-0 items-center justify-center md:w-34 xl:w-42.5"
          >
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
