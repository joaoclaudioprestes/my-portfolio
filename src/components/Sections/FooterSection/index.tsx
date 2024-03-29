import Image from "next/image";
import Link from "next/link";
import { SocialIcons } from "../../UI/socialIcons";

export const Footer = () => {
  return (
    <footer className="w-[90vw] m-auto h-[15vh] flex flex-col text-center justify-between pb-2 items-center md:w-[70vw] md:flex-row">
      <p>
        Copyright &copy; 2023 -{" "}
        <a href="https://jprestes.com" className="font-bold">
          jprestes.com
        </a>{" "}
        | Todos os direitos reservados.
      </p>

      <div className="flex gap-3 justify-center items-center">
        <p>Powered by</p>
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
        </Link>
      </div>
      <SocialIcons />
    </footer>
  );
};
