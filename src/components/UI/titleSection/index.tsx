type TitleSectionProps = {
  title: string;
  subTitle: string;
};

export const TitleSection = ({ title, subTitle }: TitleSectionProps) => {
  return (
    <div>
      <p className="text-green-500 text-base font-mono">{`.../${subTitle}`}</p>
      <h2 className="text-black text-2xl mt-1 font-bold font-mono">{title}</h2>
    </div>
  );
};