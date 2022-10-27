"use client";
import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

export default function NavLink({
  href,
  ...props
}: PropsWithChildren<LinkProps>) {
  return <Link {...props} href={href} />;
}
