import Link from 'next/link';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export const Contact = () => {
  return (
    <section className="mx-auto">
      <div className="title-contact">
        <h2 className="text-3xl font-semibold">Contato</h2>
        <p className="text-lg">Entre em contato comigo.</p>
      </div>
      <div className="info-contact flex justify-center mt-8">
        <button className="box-contact linkedin flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-md mr-4">
          <FaLinkedin className="icon mr-2" />
          <Link href="https://www.linkedin.com/in/jo%C3%A3o-claudio-prestes/" target="_blank" className="link">
            LinkedIn
          </Link>
        </button>
        <button className="box-contact whatsapp flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-md mr-4">
          <FaWhatsapp className="icon mr-2" />
          <Link href="tel:15997838020" className="link">
            (15) 99783-8020
          </Link>
        </button>
        <button className="box-contact email flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded-md">
          <MdEmail className="icon mr-2" />
          <Link href="mailto:joaoprestes17@outlook.com" className="link">
            joaoprestes17@outlook.com
          </Link>
        </button>
      </div>
    </section>
  );
};

