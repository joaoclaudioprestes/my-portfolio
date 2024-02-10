
type TechProps = {
  name: string;
};

export const Tech = ({ name }: TechProps) => {
  return (
    <div className="bg-green-600 px-2 py-1 hover:bg-green-500 text-white text-xs rounded-sm cursor-default">
      {name}
    </div>
  );
};
