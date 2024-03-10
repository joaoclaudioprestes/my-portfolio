import Image from "next/image";

type CardServiceProps = {
  img: any,
  title: string,
  icon: any,
  sub: string
}

export const CardService = ({img, title, icon, sub}: CardServiceProps) => {

  return (
    <div
        key={-title}
        className="p-1 border border-transparent rounded-md w-full bg-white flex flex-col gap-3 items-center md:h-[500px] "
      >
        <Image
          src={img}
          alt={`Imagem - ${title}`}
          width={200}
          height={200}
          layout="responsive"
          className="w-full h-fit rounded-md md:w-24"
        />
    
          <div className="p-2 flex flex-col items-center text-center gap-3">
            <div className="text-4xl">{icon}</div>
            <h3 className="text-2xl font-bold text-black">{title}</h3>
            <p className="text-gray-600 text-lg text-center">{sub}</p>
          </div>
      
      </div>
  )
}