import Image from "next/image";
import { motion } from "framer-motion";
import { ComponentProps } from "react";

type CardServiceProps = ComponentProps<typeof motion.div> & {
  img: any;
  title: string;
  icon: any;
  sub: string;
};

export const CardService = ({
  img,
  title,
  icon,
  sub,
  ...props
}: CardServiceProps) => {
  return (
    <motion.div
      className="p-4 border border-transparent rounded-md w-full bg-white flex flex-col gap-3 items-center h-min-full"
      {...props}
    >
      <div className="w-full">
        <Image
          src={img}
          alt={`Imagem - ${title}`}
          width={200}
          height={200}
          layout="responsive"
          className="rounded-md"
        />
      </div>

      <div className="p-2 h-fit flex flex-col items-center justify-start text-center gap-3">
        <div className="text-4xl text-black">{icon}</div>
        <h3 className="text-2xl font-bold text-black">{title}</h3>
        <p className="text-gray-600 text-lg text-center">{sub}</p>
      </div>
    </motion.div>
  );
};
