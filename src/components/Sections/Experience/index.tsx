import { Experiences } from "@/components/UI/experiences";
import { TitleSection } from "@/components/UI/titleSection";
import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <section className="w-full py-20 flex flex-col items-center gap-14 md:justify-center md:items-start md:p-20">
      <div className="w-[90vw] flex flex-col gap-5 m-auto md:w-[70vw]">
        <TitleSection
          title="Experiências"
          subTitle="trajetória"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          initial={{ x: +100 }}
          whileInView={{ x: 0 }}
          exit={{ x: +100 }}
          transition={{ duration: 0.5 }}
        >
          <Experiences />
        </motion.div>
      </div>
    </section>
  );
};
