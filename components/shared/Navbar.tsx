"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useRef, useState } from "react";

export type NavLink = { href: string; label: string };

const defaultLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/creators", label: "Creators" },
];

type NavbarProps = {
  links?: NavLink[];
  overlay?: boolean;
  className?: string;
};

export default function Navbar({
  links = defaultLinks,
  overlay = false,
  className = "",
}: NavbarProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
      className={`z-30 w-full text-white ${
        overlay ? "absolute inset-x-0 top-0" : "sticky top-0 bg-[#0a35e8]"
      } ${className}`}
    >
      <div className="mx-auto flex max-w-360 flex-wrap items-center justify-between gap-y-4 px-[clamp(24px,8.333vw,120px)] py-[clamp(20px,2.4vw,35px)]">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <Image
            src="/home/logo.png"
            alt="ByteSpace"
            width={171}
            height={37}
            className="h-auto w-[clamp(110px,11.875vw,171px)]"
          />
        </Link>

        <nav
          className="hidden justify-center gap-4 text-xs md:flex lg:gap-8 lg:text-sm"
          aria-label="Main"
        >
          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "text-[#F5F5F6] font-medium"
                    : "text-[#CED0D3] hover:text-[#F5F5F6] hover:font-medium"
                }
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 whitespace-nowrap text-xs text-[#F5F5F6] lg:gap-5 lg:text-sm">
          <Link href="/signin" className="hidden md:inline">
            Sign In
          </Link>
          <Link href="/join" className="hidden md:inline">
            Join Us
          </Link>
          <button aria-label="Cart">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM18 20H6V8H8V10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10V8H14V10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V8H18V20Z"
                fill="#F5F5F6"
              />
            </svg>
          </button>
          <button
            ref={menuButton}
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex size-11 items-center justify-center rounded-lg hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path
                d={
                  menuOpen ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
        <nav
          id={menuId}
          aria-label="Mobile navigation"
          className={`${menuOpen ? "flex" : "hidden"} w-full flex-col gap-1 rounded-xl border border-white/15 bg-[#0a35e8] p-3 shadow-lg md:hidden`}
        >
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm hover:bg-white/10 ${active ? "bg-white/15 font-medium text-white" : "text-[#CED0D3]"}`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-2 flex gap-2 border-t border-white/20 pt-3 text-sm">
            <Link
              href="/signin"
              onClick={() => setMenuOpen(false)}
              className="flex-1 rounded-lg px-4 py-3 text-center hover:bg-white/10"
            >
              Sign In
            </Link>
            <Link
              href="/join"
              onClick={() => setMenuOpen(false)}
              className="flex-1 rounded-lg bg-white px-4 py-3 text-center font-medium text-[#0a35e8]"
            >
              Join Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
