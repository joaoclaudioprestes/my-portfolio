import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type EditeditableLinkProps = {
  href: string;
  text: string;
};

export const EditeditableLink = ({ href, text }: EditeditableLinkProps) => {
  return (
    <a href={href}>
      <span className="px-2 flex items-center gap-1 w-fit border py-1 rounded-md border-solid border-black text-black">
        {text} <ArrowRightIcon />
      </span>
    </a>
  );
};
