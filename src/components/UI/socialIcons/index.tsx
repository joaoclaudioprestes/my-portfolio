import Link from "next/link";

import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";

export const SocialIcons = () => {
  return (
    <div className="flex gap-2 mt-2">
      <Link
        href="https://www.linkedin.com/in/jo%C3%A3o-claudio-prestes/"
        target="_blank"
        className="w-8 h-8 flex justify-center items-center text-black hover:text-blue-500 hover:border hover:border-black rounded-full"
      >
        <LinkedInLogoIcon />
      </Link>
      <Link
        href="https://github.com/joaoclaudioprestes"
        target="_blank"
        className="w-8 h-8 flex justify-center items-center text-black hover:text-black hover:border hover:border-black rounded-full"
      >
        <GitHubLogoIcon />
      </Link>
      <Link
        href="https://www.instagram.com/jpres_tes/"
        target="_blank"
        className="w-8 h-8 flex justify-center items-center text-black hover:text-[#E4405F] hover:border hover:border-black rounded-full"
      >
        <InstagramLogoIcon />
      </Link>
    </div>
  );
};
