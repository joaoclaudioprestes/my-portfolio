import { Experiences } from "@/components/UI/experiences";
import { TitleSection } from "@/components/UI/titleSection";

export const Experience = () => {
  return (
    <section className="w-full py-20 flex flex-col items-center gap-14 md:justify-center md:items-start md:p-20">
      <div className="w-[90vw] flex flex-col gap-5 m-auto md:w-[70vw]">
        <TitleSection title="Expêrienciasncias" subTitle="tragetoria" />
        <div>
          <Experiences />
        </div>
      </div>
    </section>
  );
};
