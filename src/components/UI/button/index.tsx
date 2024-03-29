type ButtonProps = {
  content: any;
  important: boolean;
  link?: string;
  _blank?: boolean;
};

export const Button = ({ content, important, link, _blank }: ButtonProps) => {
  return (
    <button
      className={`${
        important ? `bg-black text-white` : `bg-white text-black`
      } w-fit py-3 px-5  border border-1 border-black rounded-[15px] text-md`}
    >
      <a href={link} target={_blank ? "_blank" : "_self"}>
        {content}
      </a>
    </button>
  );
};
