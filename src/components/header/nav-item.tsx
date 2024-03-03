import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  label: string;
  href: string;
};

export const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${!isActive ? `text-gray-500` : `text-black-300`} flex gap-1 text-lg font-medium font-mono`}
    >
      <span className={`${!isActive ? `text-green-600` : `text-green-500`}`}>#</span>
      {label}
    </Link>
  );
};
