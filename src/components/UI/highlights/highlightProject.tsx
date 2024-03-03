import Image from "next/image";
import { TechBadge } from "../techBadge";
import { Divider } from "../divider";

type HighlightProjectProps = {
  img: any;
  name: string;
  description: string;
};

export const HighlightProject = ({
  img,
  name,
  description,
}: HighlightProjectProps) => {
  return (
    <>
      <div className="flex flex-col gap-7 md:flex-row ">
        <div className="">
          <Image
            src={img}
            width={150}
            height={150}
            layout="responsive"
            alt={`Imagem do projeto - ${name}`}
            className="rounded-md"
          />
        </div>

        <div className="flex flex-col mt-4 md:mt-0">
          <div className="flex gap-2 items-center">
            <div className="w-8 h-8">
              <Image
                src={"/favicon.ico"}
                width={150}
                height={150}
                layout="responsive"
                alt={`Logo do projeto - ${name}`}
                className="rounded-md"
              />
            </div>
            <h1 className="font-bold text-white text-2xl">{name}</h1>
          </div>
          <p className="font-medium text-white mt-2">{description}</p>
          <TechBadge />

        <p>Conheça mais sobre o projeto</p>
        </div>
      </div>
      <Divider />
    </>
  );
};
