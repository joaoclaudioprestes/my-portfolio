import { Divider } from "@/components/UI/divider";
import { TitleSection } from "@/components/UI/titleSection";
import { EditeditableLink } from "@/components/UI/editeditableLink";
import { Highlights } from "@/components/UI/highlights";

export const HighlightsSection = () => {
  return (
    <section className="w-full py-20 flex flex-col items-center gap-14 md:justify-center md:items-start md:p-20">
      <div className="w-[90vw] flex flex-col gap-5 m-auto md:w-[70vw]">
        <TitleSection
          title="Projetos em destaque..."
          subTitle="destaques"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        />
        <Divider />
        <Highlights />
        <EditeditableLink text="Veja todos os meus projetos" href="/projects" />
      </div>
    </section>
  );
};
