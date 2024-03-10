import Link from 'next/link';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export const Contact = () => {
  return (
    <section className="w-full py-20 flex flex-col items-center gap-14 md:justify-center md:items-start md:p-20">
      <div className="w-[90vw] flex flex-col gap-5 m-auto md:w-[70vw]">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl text-black">Contato</h2>
          <p className="text-base text-black">Entre em contato comigo.</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 mt-4">
          <button className="w-[90%] h-10 flex justify-around items-center bg-white border border-black rounded-lg md:w-[50%]">
            <FaLinkedin className="relative right-4" />
            <Link href="https://www.linkedin.com/in/jo%C3%A3o-claudio-prestes/" target="_blank" className="link text-base">
              LinkedIn
            </Link>
            <span></span>
          </button>
          <button className="w-[90%] h-10 flex justify-around items-center bg-white border border-black rounded-lg md:w-[50%]">
            <FaWhatsapp className="relative right-2" />
            <Link href="tel:15997838020" className="">
              (15) 99783-8020
            </Link>
            <span></span>
          </button>
          <button className="w-[90%] h-10 flex justify-around items-center bg-white border border-black rounded-lg md:w-[50%]">
            <MdEmail className="relative left-1" />
            <Link href="mailto:joaoprestes17@outlook.com" className="link text-base">
              joaoprestes17@outlook.com
            </Link>
            <span></span>
          </button>
        </div>
      </div>
    </section>
  );
};

