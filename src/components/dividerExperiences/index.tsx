import Image from "next/image";

type DividerExperiencesProps = {
  logo: any;
};

export const DividerExperiences = ({ logo }: DividerExperiencesProps) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-10 h-10 border border-gray-800 rounded-full p-1">
        <Image
          src={"/favicon.ico"}
          alt={"Logo"}
          width={150}
          height={150}
          layout="responsive"
        />
      </div>
      <span className="h-full bg-gray-800 w-[1px]"></span>
    </div>
  );
};
