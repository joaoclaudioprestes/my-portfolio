type DividerProps = {
  horizontal?: boolean;
  vertical?: boolean;
};

export const Divider = ({ horizontal, vertical }: DividerProps) => {
  return (
    <>
      <div
        className={`${
          (horizontal && `bg-gray-100 h-full w-[2px] mx-4`) ||
          (vertical && `bg-gray-200 h-[2px] w-full my-4 `)
        }`}
      ></div>
    </>
  );
};
