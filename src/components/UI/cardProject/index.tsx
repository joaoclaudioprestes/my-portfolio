import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { MdOutlineWebAsset } from "react-icons/md";
import { ComponentProps } from "react";
import { motion } from "framer-motion";

type CardProjectProps = ComponentProps<typeof motion.div> & {
  nameProject: string;
  descriptionProject: string;
  linkRepository: string;
  linkDeploy: string;
  imgProject: string;
};

export const CardProject = ({
  nameProject,
  descriptionProject,
  linkRepository,
  linkDeploy,
  imgProject,
  ...props
}: CardProjectProps) => {
  return (
    <motion.div
      className="w-[400px] h-[420px] flex flex-col justify-between p-2 rounded-md border"
      {...props}
    >
      <div>
        <Image
          src={`/img/${imgProject}`}
          alt="Service Image"
          width={100}
          height={100}
          layout="responsive"
          className="rounded-md"
        />
      </div>

      <div className="flex flex-col">
        <h3 className="text-xl font-bold">{nameProject}</h3>
        <p className="text-md">{descriptionProject}</p>
        <div className="flex gap-2 mt-4">
          <a
            href={linkDeploy}
            className="w-fit flex items-center gap-2 p-2 border border-black rounded-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineWebAsset size={14} className="" />
            Demo
          </a>
          <a
            href={linkRepository}
            className="w-fit flex items-center gap-2 p-2 border border-black rounded-md text-white bg-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={14} className="" />
            Repositório
          </a>
        </div>
      </div>
    </motion.div>
  );
};
