import Image from "next/image";
import { TechBadge } from "../techBadge";
import { Divider } from "../divider";
import { Button } from "../button";

type HighlightProjectProps = {
  img: any;
  name: string;
  description: string;
  techs: Array<string>;
  demoLink: string;
  repositoryLink: string;
};

export const HighlightProject = ({
  img,
  name,
  description,
  techs,
  demoLink,
  repositoryLink,
}: HighlightProjectProps) => {
  return (
    <>
      <div className="flex flex-col gap-7 md:flex-row">
        <div className="md:w-[50%]">
          <Image
            src={img}
            layout="responsive"
            width={500}
            height={500}
            alt={`Imagem do projeto - ${name}`}
            className="rounded-md"
          />
        </div>

        <div className="flex flex-col mt-4 md:mt-0 md:w-[50%]">
          <div className="flex gap-2 items-center">
            <div className="w-8 h-8">
              <Image
                src={"/favicon.ico"}
                width={32}
                height={32}
                alt={`Logo do projeto - ${name}`}
                className="rounded-md"
              />
            </div>
            <h1 className="font-bold text-black text-2xl">{name}</h1>
          </div>
          <p className="text-gray-600 mt-2">{description}</p>

          <TechBadge
            ArrayTech={techs}
            initial={{ opacity: 0, x: +100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: +100 }}
            transition={{ duration: 0.5 }}
          />

          <div className="mt-6 flex gap-3">
            <Button
              content={"Demo"}
              important={true}
              link={demoLink}
              _blank={true}
            />
            <Button
              content={"Repositório"}
              important={false}
              link={repositoryLink}
              _blank={true}
            />
          </div>
        </div>
      </div>
      <Divider vertical={true} />
    </>
  );
};
