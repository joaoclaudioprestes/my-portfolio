import { Tech } from "./tech";

const MOCK_TECHS = [
  {
    name: "React.js",
  },
  {
    name: "Next.js",
  },
  {
    name: "UI",
  },
  
];

export const TechBadge = () => {
  return (
    <div className="flex flex-row flex-wrap gap-2 mt-4 w-[70%] md">
      {MOCK_TECHS.map((tech) => (
        <Tech key={tech.name} {...tech} />
      ))}
    </div>
  );
};
