import Image from "next/image";
import Link from "next/link";
import AuthForm from "./AuthForm";

export default function AuthPage({ register = false }: { register?: boolean }) {
  return (
    <main
      className="flex min-h-dvh items-center justify-center bg-[#003be2] px-6 py-7 text-white sm:px-10"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgb(255 255 255 / 12%) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 12%) 1px, transparent 1px)",
        backgroundSize:
          "clamp(52px, 8.333vw, 120px) clamp(52px, 8.333vw, 120px)",
      }}
    >
      <div className="max-w-360 px-[clamp(24px,8.333vw,120px)] mx-auto">
        <Link
          href="/"
          aria-label="ByteSpace home"
          className="relative block h-9 w-8 overflow-hidden"
        >
          <Image
            src="/home/logo.png"
            alt=""
            width={171}
            height={37}
            className="absolute top-0 left-0 max-w-none"
          />
        </Link>
        <div className="grid items-center gap-10 py-8 md:grid-cols-[0.9fr_1.1fr] md:gap-14 lg:gap-24">
          <div>
            <h2 className="lg:text-[20px] font-medium">
              {register ? "Sign up and come in" : "Sign in with ease"}
            </h2>
            <p className="mt-3  text-sm lg:text-lg  text-white/85">
              {register
                ? "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
                : "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."}
            </p>
            <Image
              src="/home/auth/auth.svg"
              alt="Course previews with student reviews and bright lime decorations"
              width={480}
              height={550}
              className="mt-10 hidden h-auto w-full md:block"
            />
          </div>
          <AuthForm register={register} />
        </div>
      </div>
    </main>
  );
}
