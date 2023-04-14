import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement, ReactNode } from "react";

interface NavProps {
  children: ReactNode;
  href: string;
}

export default function NavLink({ children, href }: NavProps) {
  const child = React.Children.only(children);
  const router = useRouter();

  return (
    <Link href={href} legacyBehavior>
      {React.cloneElement(child as ReactElement, {
        "aria-current": router.pathname === href ? "page" : null
      })}
    </Link>
  );
}
