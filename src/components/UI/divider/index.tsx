type DividerProps = {
  horizontal?: boolean;
  vertical?: boolean;
};

export const Divider = ({ horizontal, vertical }: DividerProps) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`${
          (horizontal && `bg-[#EEEFE8] h-full w-[2px] mx-4`) ||
          (vertical && `bg-[#EEEFE8] h-[2px] w-full my-4 `)
        }`}
      ></div>
    </div>
  );
};
