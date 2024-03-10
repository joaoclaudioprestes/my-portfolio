import Image from "next/image";
import Link from "next/link";
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
      <div>
        <Image src="/logo.svg" alt="Logo" width={70} height={70} />
      </div>

      <nav className="flex gap-2 justify-between">
        {NAV_ITEMS.map((item) => (
            <p href={item.label} key={item.label}>
              <NavItem {...item} />
            </p>
        ))}
      </nav>
    </header>
  );
};
