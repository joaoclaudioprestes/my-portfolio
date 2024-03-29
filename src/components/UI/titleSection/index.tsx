import { motion } from "framer-motion";
import { ComponentProps } from "react";

type TitleSectionProps = ComponentProps<typeof motion.div> & {
  title: string;
  subTitle?: string;
};

export const TitleSection = ({
  title,
  subTitle,
  ...props
}: TitleSectionProps) => {
  return (
    <motion.div {...props}>
      {subTitle && (
        <p className="text-gray-600 text-base ">{`.../${subTitle}`}</p>
      )}
      <h2 className="text-black text-2xl mt-1 font-bold ">{title}</h2>
    </motion.div>
  );
};
