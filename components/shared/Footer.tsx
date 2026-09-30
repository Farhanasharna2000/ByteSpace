"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { footerLegalLinks, footerLinkGroups } from "@/constants/footer";

export default function Footer() {
  const [message, setMessage] = useState("");

  return (
    <footer className="bg-white px-6 pt-14 pb-8 text-[#242528] sm:pt-16">
      <div className="mx-auto max-w-275">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Link
              href="/"
              aria-label="ByteSpace home"
              className="inline-flex items-center gap-1.5"
            >
              <span
                className="relative block h-8 w-7.25 overflow-hidden"
                aria-hidden="true"
              >
                <Image
                  src="/home/logo.png"
                  alt=""
                  width={171}
                  height={37}
                  className="absolute top-0 left-0 h-8 w-37 max-w-none"
                />
              </span>
              <span className="text-2xl font-semibold tracking-[-0.06em]">
                ByteSpace
              </span>
            </Link>
            <p className="mt-4 text-sm leading-6">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <form
              className="mt-9 flex max-w-115 flex-wrap gap-4 sm:flex-nowrap sm:gap-5"
              onSubmit={(event) => {
                event.preventDefault();
                setMessage(
                  "Newsletter signup is not available yet. Please check back soon.",
                );
              }}
            >
              <label htmlFor="footer-email" className="sr-only">
                Your email address
              </label>
              <input
                id="footer-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Enter your email"
                aria-describedby="newsletter-privacy newsletter-status"
                className="min-h-12 min-w-0 flex-1 rounded-full border border-[#d2d3d8] px-5 text-sm outline-none placeholder:text-[#45464f] focus:border-[#003cff] focus:ring-2 focus:ring-[#003cff]/20"
              />
              <button
                type="submit"
                className="min-h-11 rounded-full bg-[#ceff1a] px-6 py-2.5 text-base hover:bg-[#bfee00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#003cff]"
              >
                Search
              </button>
            </form>
            <p
              id="newsletter-privacy"
              className="mt-5 max-w-107.5 text-xs leading-[1.75]"
            >
              By subscribing, you agree to our{" "}
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>{" "}
              and consent to receive updates from our company.
            </p>
            <p
              id="newsletter-status"
              role="status"
              className="mt-2 text-sm text-[#606168]"
            >
              {message}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:pt-12">
            {footerLinkGroups.map((group) => (
              <nav key={group.label} aria-label={group.label}>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm leading-5 hover:text-[#003cff] hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-[#d2d3d8] pt-6 text-xs leading-5 sm:flex-row sm:items-center sm:justify-between lg:mt-28">
          <p>© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLegalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#003cff] hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
