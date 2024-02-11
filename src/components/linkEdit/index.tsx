
import { FaLongArrowAltRight } from "react-icons/fa";

type LinkProps = {
  nameLink: string;
  srcLink: string;
};

export const LinkEdit = ({ nameLink, srcLink }: LinkProps) => {
  return (
    <a
      href={srcLink}
      className="text-white font-medium line-clamp-none flex items-center text-sm gap-2 mt-5 hover:text-emerald-600"
    >
      {nameLink} <FaLongArrowAltRight />
    </a>
  );
};
