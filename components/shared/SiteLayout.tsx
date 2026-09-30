"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/signin" || pathname === "/join";

  if (isAuthPage) return <>{children}</>;

  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar key={pathname} />
      {children}
      <Footer />
    </div>
  );
}
