import Image from "next/image";
import { Divider } from "../divider";

type ExperienceProps = {
  company: string;
  job: string;
  logo: string; // Alterado o tipo de 'any' para 'string' para ser mais específico
  description: string;
};

export function Experience({
  company,
  job,
  description,
  logo,
}: ExperienceProps) {
  return (
    <div className="flex gap-4 font-mono w-full mt-4">
      <div className="flex flex-col gap-1"> {/* Corrigido o nome da classe 'aling-center' para 'align-center' */}
        <Image
          src={logo}
          alt={`Logo da empresa - ${company}`}
          width={100}
          height={100}
          layout="responsive"
          className="border rounded-full p-1"
        />
        <Divider horizontal={true} />
      </div>
      <div>
        <h2 className="text-black font-bold text-xl">{company}</h2> {/* Removido o estilo 'text-bold' e adicionado 'font-bold' */}
        <p className="text-green-700 text-lg font-bold">{job}</p>
        <p className="text-wrap text-md text-gray-500">{description}</p>
      </div>
    </div>
  );
}
