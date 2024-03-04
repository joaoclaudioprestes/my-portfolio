type TitleSectionProps = {
  title: string;
  subTitle: string;
};

export const TitleSection = ({ title, subTitle }: TitleSectionProps) => {
  return (
    <div>
      <p className="text-gray-600 text-base ">{`.../${subTitle}`}</p>
      <h2 className="text-black text-2xl mt-1 font-bold ">{title}</h2>
    </div>
  );
};
