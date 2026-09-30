import Image from "next/image";
import { testimonials } from "@/constants/testimonials";

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-[#fafafa]  py-10  lg:py-20"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 51% 24%, #eaff9a 0%, transparent 30%), radial-gradient(ellipse at 98% 42%, #ecffa8 0%, transparent 37%), radial-gradient(ellipse at 9% 94%, #c2cef3 0%, transparent 34%)",
      }}
    >
      <div className="max-w-360 px-[clamp(24px,8.333vw,120px)] mx-auto">
        <div className="grid items-center gap-6 md:grid-cols-2 md:gap-12">
          <h2
            id="testimonials-heading"
            className="max-w-117.5 text-2xl md:text-3xl lg:text-[44px] leading-[1.2] font-semibold tracking-tight text-black"
          >
            Discover What Our Community Is Saying
          </h2>
          <p className=" leading-[1.75]  text-[#4F4F4F] text-sm lg:text-lg">
           At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-fr items-stretch gap-6 lg:mt-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-9">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.id} className="rounded-3xl bg-white p-5.5">
              <figcaption>
                <Image
                  src={testimonial.avatar}
                  alt=""
                  width={80}
                  height={80}
                  className="size-18 rounded-full"
                />
                <p className="mt-5 text-[20px] leading-6 font-semibold tracking-tight text-black">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-sm md:text-lg leading-6 text-[#003cff]">
                  {testimonial.role}
                </p>
              </figcaption>
              <blockquote className="mt-6 text-sm md:text-lg leading-[1.75] font-light text-[#4F4F4F] ">
                &quot;{testimonial.quote}&quot;
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
