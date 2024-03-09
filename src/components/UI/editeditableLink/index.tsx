import Link from "next/link";

type EditeditableLinkProps = {
  href: string;
  text: string;
};

export const EditeditableLink = ({ href, text }: EditeditableLinkProps) => {
  return (
    <a href={href}>
      <span className="px-2 border py-1 rounded-md border-solid border-black text-black">{text} -></span>
    </a>
  );
};