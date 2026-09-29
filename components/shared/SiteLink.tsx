import Link from "next/link";
import type { ComponentProps } from "react";
import { availableRoutes } from "@/constants/routes";

type SiteLinkProps = Omit<ComponentProps<"a">, "href"> & { href: string };

export default function SiteLink({ href, children, onClick, ...props }: SiteLinkProps) {
  const pathname = href.split(/[?#]/)[0] || "/";

  if (!availableRoutes.has(pathname)) {
    return (
      <span {...props} role="link" aria-disabled="true" tabIndex={-1}>
        {children}
      </span>
    );
  }

  return <Link {...props} href={href} onClick={onClick}>{children}</Link>;
}
