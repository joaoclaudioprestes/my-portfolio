
type TechProps = {
  name: string;
};

export const Tech = ({ name }: TechProps) => {
  return (
    <div className="bg-emerald-600 px-2 py-1 hover:bg-emerald-500 text-green-200 text-xs rounded-md cursor-default">
      {name}
    </div>
  );
};