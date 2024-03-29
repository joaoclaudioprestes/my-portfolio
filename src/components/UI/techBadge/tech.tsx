type TechProps = {
  name: string;
};

export const Tech = ({ name }: TechProps) => {
  return (
    <div className="bg-black px-2 py-1 hover:bg-gray text-white text-xs rounded-md cursor-default">
      {name}
    </div>
  );
};
