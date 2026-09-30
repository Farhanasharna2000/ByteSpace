"use client";

import Link from "next/link";
import { useState } from "react";

export default function AuthForm({ register = false }: { register?: boolean }) {
  const [message, setMessage] = useState("");
  const inputClass =
    "mt-2 h-11 w-full rounded-xl border border-[#dedfe4] px-4 text-sm text-[#242528] outline-none placeholder:text-[#9598a2] focus:border-[#003be2] focus:ring-2 focus:ring-[#003be2]/15";

  return (
    <div className="flex min-h-147.5 flex-col rounded-[22px] bg-white p-7 text-[#242528] sm:p-12">
      <p className="text-sm text-[#003be2]">
        {register ? "Create an Account" : "Sign In"}
      </p>
      <h1 className="mt-1 text-[32px] leading-[1.15] font-semibold tracking-tight sm:text-4xl">
        {register ? (
          <>
            Welcome to
            <br />
            ByteSpace
          </>
        ) : (
          "Welcome Back"
        )}
      </h1>
      <form
        className="mt-8"
        onSubmit={(event) => {
          event.preventDefault();
          setMessage(
            register
              ? "Account creation is not available yet. Please check back soon."
              : "Sign in is not available yet. Please check back soon.",
          );
        }}
      >
        {register && (
          <div className="mb-5">
            <label htmlFor="full-name" className="text-xs">
              Full Name
            </label>
            <input
              id="full-name"
              name="name"
              autoComplete="name"
              required
              placeholder="Jamie Davis"
              className={inputClass}
            />
          </div>
        )}
        <div className="mb-5">
          <label htmlFor="email" className="text-xs">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="designer@example.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="password" className="text-xs">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete={register ? "new-password" : "current-password"}
            minLength={register ? 8 : undefined}
            required
            placeholder="••••••••"
            className={inputClass}
          />
        </div>
        <div className="mt-5 flex justify-end">
          <button
            type="submit"
            className="min-h-10 rounded-full bg-[#d4fb20] px-6 py-2 text-sm hover:bg-[#c4eb10] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#003be2]"
          >
            {register ? "Continue" : "Sign In"}
          </button>
        </div>
      </form>
      <p role="status" className="mt-3 text-xs leading-5 text-[#606168]">
        {message}
      </p>
      {!register && (
        <>
          <div className="my-7 flex items-center gap-3 text-xs text-[#8a8c93]">
            <span className="h-px flex-1 bg-[#dedfe4]" />
            or
            <span className="h-px flex-1 bg-[#dedfe4]" />
          </div>
          <div className="flex justify-center gap-3">
            <button
              type="button"
              aria-label="Sign in with Facebook"
              onClick={() =>
                setMessage("Facebook sign in is not available yet.")
              }
              className="flex size-14 items-center justify-center rounded-2xl border border-[#dedfe4] hover:bg-gray-50"
            >
              <svg
                aria-hidden="true"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12a12 12 0 1 0-13.875 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.956.925-1.956 1.874V12h3.328l-.532 3.47h-2.796v8.384A12.003 12.003 0 0 0 24 12Z" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Sign in with Google"
              onClick={() => setMessage("Google sign in is not available yet.")}
              className="flex size-14 items-center justify-center rounded-2xl border border-[#dedfe4] text-3xl font-semibold hover:bg-gray-50"
            >
              G
            </button>
          </div>
        </>
      )}
      <p className="mt-auto pt-10 text-center text-xs text-[#858894]">
        {register ? "Already have an account? " : "New user? "}
        <Link
          href={register ? "/signin" : "/join"}
          className="text-[#003be2] hover:underline"
        >
          {register ? "Login" : "Create an account"}
        </Link>
      </p>
    </div>
  );
}
