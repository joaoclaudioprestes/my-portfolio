import Link from "next/link";
import React from "react";
import Image from "next/image";
import { NavItem } from "./nav-item";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projetos",
    href: "/projects",
  },
];

export const Header = () => {
  return (
    <header className="w-[90vw] m-auto h-[15dvh] flex justify-between items-center md:w-[70vw]">
      <div className="container">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo - João Prestes"
            width={140}
            height={140}
          />
        </Link>
      </div>

      <nav className="flex gap-2 justify-between">
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </nav>
    </header>
  );
};