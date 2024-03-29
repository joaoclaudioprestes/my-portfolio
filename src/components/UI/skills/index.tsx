import { ComponentProps } from "react";
import { motion } from "framer-motion";

type SkillProps = ComponentProps<typeof motion.div> & {
  name: string;
  icon: any;
  color: string;
};

export const Skill = ({ name, icon, color, ...props }: SkillProps) => {
  return (
    <motion.div
      className="w-[132px] h-[140px] md:w-[180px] md:h-[150px] bg-white flex justify-center items-center rounded-xl"
      {...props}
    >
      <div className="flex flex-col-reverse gap-5 justify-center items-center">
        <h3 className="text-center">{name}</h3>
        <span className={`text-5xl`} style={{ color: color }}>
          {icon}
        </span>
      </div>
    </motion.div>
  );
};
