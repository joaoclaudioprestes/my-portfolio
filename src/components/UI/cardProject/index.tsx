import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineWebAsset } from 'react-icons/md';

type CardProjectProps = {
  nameProject: string;
  descriptionProject: string;
  linkRepository: string;
  linkDeploy: string;
  imgProject: string;
};

export const CardProject = ({
  nameProject,
  descriptionProject,
  linkRepository,
  linkDeploy,
  imgProject,
}: CardProjectProps) => {
  return (
    <div className="w-auto h-[400px] flex-col justify-between p-2 rounded-md border">
      <div>
        <Image
          src={`/img/${imgProject}`}
          alt="Service Image"
          width={100}
          height={100}
          layout="responsive"
          className="rounded-md"
        />
      </div>
      <div className="flex-col">
        <h3 className="text-xl font-bold">{nameProject}</h3>
        <p className="text-md">{descriptionProject}</p>
        <div className="flex gap-2">
          <Link href={linkRepository} className="" target="_blank">
              <FaGithub size={14} className="" />
              Repository
         </Link>
          <Link href={linkDeploy} target="_blank">
              <MdOutlineWebAsset size={14} className="" />
              Deploy
           
          </Link>
        </div>
      </div>
    </div>
  );
};