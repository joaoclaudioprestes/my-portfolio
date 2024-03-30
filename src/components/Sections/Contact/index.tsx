import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section
      id="Contact"
      className="w-full py-20 flex flex-col items-center gap-14 md:justify-center md:items-start md:p-20 h-[80vh]"
    >
      <div className="w-[90vw] flex flex-col gap-5 m-auto md:w-[70vw]">
        <motion.div
          className="flex flex-col items-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          exit={{ scale: 0 }}
        >
          <h2 className="text-2xl text-black font-bold">Contato</h2>
          <p className="text-base text-black">Entre em contato comigo.</p>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center gap-4 mt-4"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ y: 100, opacity: 0 }}
        >
          <button className="w-[90%] h-10 flex justify-around items-center bg-white border border-black rounded-lg md:w-[50%]">
            <FaLinkedin className="relative right-6" />
            <Link
              href="https://www.linkedin.com/in/jo%C3%A3o-claudio-prestes/"
              target="_blank"
            >
              <span className="link text-base">LinkedIn</span>
            </Link>
            <span></span>
          </button>
          <button className="w-[90%] h-10 flex justify-around items-center bg-white border border-black rounded-lg md:w-[50%]">
            <FaWhatsapp className="relative right-3" />
            <Link href="tel:15997838020">
              <span>(15) 99783-8020</span>
            </Link>
            <span></span>
          </button>
          <button className="w-[90%] h-10 flex justify-around items-center bg-white border border-black rounded-lg md:w-[50%]">
            <MdEmail className="relative" />
            <Link href="malito:joaoprestesdev@gmail.com">
              <span>joaoprestesdev@gmail.com</span>
            </Link>
            <span></span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
