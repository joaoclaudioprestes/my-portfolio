import Image from "next/image";
import { TechBadge } from "../techBadge";
import { Divider } from "../divider";
import { EditeditableLink } from "../editeditableLink";

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
            layout="responsive"
            width={500}
            height={300}
            alt={`Imagem do projeto - ${name}`}
            className="rounded-md"
          />
        </div>

        <div className="flex flex-col mt-4 md:mt-0">
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
          <p className="font-medium text-gray-600 mt-2">{description}</p>

          <TechBadge />

          <div className="mt-6">
            <EditeditableLink
              text={"Conheça mais sobre o projeto"}
              href={"#"}
            />
          </div>
        </div>
      </div>
      <Divider vertical={true} />
    </>
  );
};
