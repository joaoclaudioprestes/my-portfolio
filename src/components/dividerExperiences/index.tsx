import Image from "next/image";

type DividerExperiencesProps = {
  logo: any;
};

export const DividerExperiences = ({ logo }: DividerExperiencesProps) => {
  return (
    <div className="relative flex items-start justify-center">
      <div className="w-10 h-10 z-10">
        <Image
          src={"/favicon.ico"}
          alt={"Logo"}
          width={150}
          height={150}
          layout="responsive"
        />
      </div>
      <span className="h-full border-l border-gray-800 block absolute inset-y-0"></span>
    </div>
  );
};
