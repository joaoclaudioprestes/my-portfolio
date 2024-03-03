import Image from "next/image";
import { DividerExperiences } from "../dividerExperiences";

type ExperienceProps = {
  company: string;
  job: string;
  logo: any;
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
      <DividerExperiences logo={logo} />
      <div>
        <h2 className="text-black text-bold text-xl">{company}</h2>
        <p className="text-green-700 text-lg font-bold" >{job}</p>
        <p className="text-wrap text-md text-gray-500">{description}</p>
      </div>
    </div>
  );
}