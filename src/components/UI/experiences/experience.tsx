import Image from "next/image";
import Link from "next/link";
import React from "react";

type ExperienceProps = {
  company: string;
  job: string;
  logo: string; 
  description: string;
  link?: string;
};

export function Experience({
  company,
  job,
  description,
  logo,
  link,
}: ExperienceProps) {
  return (
    <div className="flex gap-4 w-full mt-4">
      <div className="flex flex-col items-center gap-1 rounded-full">
        {link ? (
          <Link href={link} target="_blank">
              <Image
            src={logo}
            alt={`Logo da empresa - ${company}`}
            width={100}
            height={100}
            className="w-80 md:w-32 border-2 border-gray-200 rounded-full p-1 bg-cover bg-center"
          />
          </Link>
        ) : (
          <Image
            src={logo}
            alt={`Logo da empresa - ${company}`}
            width={100}
            height={100}
            className="w-80 md:w-32 border-2 border-gray-200 rounded-full p-1 bg-cover bg-center"
          />
        )}
        <span className="bg-gray-300 w-[2px] h-full rounded-full"></span>
      </div>
      <div>
        <h2 className="text-black font-bold text-xl">{company}</h2>{" "}
        <p className="text-green-700 text-lg font-bold">{job}</p>
        <p className="text-wrap text-md text-gray-500">{description}</p>
      </div>
    </div>
  );
}
