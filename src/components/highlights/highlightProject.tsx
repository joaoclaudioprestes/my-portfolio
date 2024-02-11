import Image from "next/image";

type HighlightProjectProps = {
  img: any;
  name: string;
  description: string;
};

export const HighlightProject = ({ img, name, description }: HighlightProjectProps) => {
  return(
    <>
      <div className="w-48">
        <Image src={img} width={150} height={150} alt={`Imagem do projeto - ${name}`} />
      </div>

      <div>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </>
  )
};
