import React from "react";
import Image from "next/image";
import { SocialIcons } from "../socialIcons";

export const Footer = () => {
  return (
    <footer className="w-[95vw] m-auto h-[10dvh] flex flex-col items-center justify-between md:items-center md:items-baseline md:flex-row md:w-[60vw] bg-[#030712]">
      <p className="text-white text-center">
        &copy; 2024 -{" "}
        <a href="" className="font-bold text-green-600">
          jprestes.com
        </a>{" "}
        | Todos os direitos reservados.
      </p>

      <div className="text-white flex gap-4 items-baseline">
        <p>Powered by</p>
        <Image src="/logo.svg" width={100} height={100} alt="Logo" />
      </div>
      <SocialIcons />
    </footer>
  );
};
