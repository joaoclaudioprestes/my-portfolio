type ButtonProps = {
  content: any;
  important: boolean;
  link?: string;
};

export const Button = ({ content, important, link }: ButtonProps) => {
  return (
    <a href={`${link === undefined && "#"}`}>
      <button
        className={`${
          important ? `bg-black text-white` : `bg-white text-black`
        } w-fit py-3 px-5  border border-1 border-black rounded-[15px] text-md`}
      >
        <p>{content}</p>
      </button>
    </a>
  );
};
