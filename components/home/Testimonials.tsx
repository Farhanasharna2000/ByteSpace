import Image from "next/image";
import { testimonials } from "@/constants/testimonials";

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-[#fafafa] px-6 py-14 sm:py-16 lg:py-[68px]"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 51% 24%, #eaff9a 0%, transparent 30%), radial-gradient(ellipse at 98% 42%, #ecffa8 0%, transparent 37%), radial-gradient(ellipse at 9% 94%, #c2cef3 0%, transparent 34%)",
      }}
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="grid items-center gap-6 md:grid-cols-2 md:gap-12">
          <h2
            id="testimonials-heading"
            className="max-w-[470px] text-[clamp(28px,3.2vw,40px)] leading-[1.2] font-semibold tracking-[-0.025em] text-black"
          >
            Discover What Our Community Is Saying
          </h2>
          <p className="text-[15px] leading-[1.75] font-light text-[#606168] sm:text-base">
            At ByteSpace, our vibrant community of learners and creators is at the
            heart of what we do. Hear directly from those who have experienced the
            transformative journey of learning and creating on our platform.
            Explore testimonials that reflect the diverse perspectives of
            enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-fr items-stretch gap-6 md:mt-16 md:grid-cols-3 lg:gap-9">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.id} className="rounded-[24px] bg-white p-[22px]">
              <figcaption>
                <Image
                  src={testimonial.avatar}
                  alt=""
                  width={80}
                  height={80}
                  className="size-[72px] rounded-full"
                />
                <p className="mt-5 text-lg leading-6 font-semibold tracking-tight text-black">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-[15px] leading-6 text-[#003cff]">
                  {testimonial.role}
                </p>
              </figcaption>
              <blockquote className="mt-6 text-[15px] leading-[1.75] font-light text-[#606168] sm:text-base">
                &quot;{testimonial.quote}&quot;
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
