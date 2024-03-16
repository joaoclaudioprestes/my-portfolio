type SkillProps = {
  name: string;
  icon: any;
  color: string;
};

export const Skill = ({ name, icon, color }: SkillProps) => {
  return (
    <div className="w-[150px] h-[130px] bg-white flex justify-center items-center rounded-xl">
      <div className="flex flex-col-reverse gap-5 justify-center items-center">
        <h3>{name}</h3>
        <span className={`text-4xl`} style={{ color: color }}>{icon}</span>
      </div>
    </div>
  );
};
