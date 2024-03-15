import Image from "next/image";

type CardServiceProps = {
  img: any;
  title: string;
  icon: any;
  sub: string;
};

export const CardService = ({ img, title, icon, sub }: CardServiceProps) => {
  return (
    <div
      key={-title}
      className="p-4 border border-transparent rounded-md w-full bg-white flex flex-col gap-3 items-center h-[420px]"
    >
      <div className="w-full">
        <Image
          src={img}
          alt={`Imagem - ${title}`}
          width={200}
          height={200}
          layout="responsive"
          className="rounded-md"
        />
      </div>

      <div className="p-2 h-fit flex flex-col items-center justify-start text-center gap-3">
        <div className="text-4xl text-black">{icon}</div>
        <h3 className="text-2xl font-bold text-black">{title}</h3>
        <p className="text-gray-600 text-lg text-center">{sub}</p>
      </div>
    </div>
  );
};
