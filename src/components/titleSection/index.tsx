type TitleSectionProps = {
  title: string;
  subTitle: string;
};

export const TitleSection = ({ title, subTitle }: TitleSectionProps) => {
  return (
    <div>
      <p className="text-green-500 text-base">{`.../${subTitle}`}</p>
      <h2 className="text-white text-2xl mt-1 font-bold">{title}</h2>
    </div>
  );
};
