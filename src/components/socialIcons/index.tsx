import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export const SocialIcons = () => {
  return (
    <div className="flex gap-2 mt-2">
      <Link
        href="https://www.linkedin.com/in/jo%C3%A3o-claudio-prestes/"
        target="_blank"
        className="w-8 h-8 flex justify-center items-center text-white hover:text-blue-500 hover:bg-white rounded-full"
      >
        <FaLinkedinIn size={14} />
      </Link>
      <Link
        href="https://github.com/joaoclaudioprestes"
        target="_blank"
        className="w-8 h-8 flex justify-center items-center text-white hover:text-black hover:bg-white rounded-full"
      >
        <FaGithub size={14} />
      </Link>
      <Link
        href="https://www.instagram.com/jpres_tes/"
        target="_blank"
        className="w-8 h-8 flex justify-center items-center text-white hover:text-[#E4405F] hover:bg-white rounded-full"
      >
        <FaInstagram size={14} />
      </Link>
    </div>
  );
};
