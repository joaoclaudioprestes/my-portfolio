import Image from "next/image";
import { Divider } from "../divider";
import React, { Fragment } from "react";

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
    <div className="flex gap-4 w-full mt-4">
      <div className="flex flex-col items-center gap-1">
        <Image
          src={logo}
          alt={`Logo da empresa - ${company}`}
          width={100}
          height={100}
          className="w-36 md:w-16 border-2 border-gray-200 rounded-full p-1"
        />
        <span className="bg-gray-200 w-[2px] h-full rounded-full"></span>
      </div>
      <div>
        <h2 className="text-black font-bold text-xl">{company}</h2>{" "}
        {/* Removido o estilo 'text-bold' e adicionado 'font-bold' */}
        <p className="text-green-700 text-lg font-bold">{job}</p>
        <p className="text-wrap text-md text-gray-500">{description}</p>
      </div>
    </div>
  );
}
