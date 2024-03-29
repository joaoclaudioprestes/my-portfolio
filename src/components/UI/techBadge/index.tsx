import { ComponentProps } from "react";
import { Tech } from "./tech";
import { motion } from "framer-motion";

type TechProps = ComponentProps<typeof motion.div> & {
  ArrayTech: Array<string>;
};

export const TechBadge = ({ ArrayTech, ...props }: TechProps) => {
  return (
    <motion.div
      className="flex flex-row flex-wrap gap-2 mt-4 w-[70%]"
      {...props}
    >
      {ArrayTech.map((tech, index) => (
        <Tech key={index} name={tech} />
      ))}
    </motion.div>
  );
};
