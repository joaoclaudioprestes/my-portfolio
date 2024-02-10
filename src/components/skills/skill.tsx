type SkillProps = {
  name: string;
  icon: any;
  experience: number;
};

export const Skill = ({ name, icon, experience }: SkillProps) => {
  return (
    <div className="w-[250px] h-auto flex flex-col p-4 justify-center items-start bg-green-700 rounded-md text-gray-400 hover:text-white">
      <div className="w-full flex justify-between">
        <h3>{name}</h3>
        <span>{icon}</span>
      </div>
      {`${experience} anos de experiência.`}
    </div>
  );
};
