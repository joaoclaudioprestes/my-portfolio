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
  {
    name: "TypeScript",
  },
];

export const TechBadge = () => {
  return (
    <>
      {MOCK_TECHS.map((tech) => (
        <Tech key={tech.name} {...tech} />
      ))}
    </>
  );
};
