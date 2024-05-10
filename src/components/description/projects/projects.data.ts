interface IProjects {
  title: string;
  description: string;
  tags: string[];
  url: string;
  image: string;
}

export const projects: IProjects[] = [
  {
    title: "PROJECTS.MSN.TITLE",
    description:
      "PROJECTS.MSN.DESCRIPTION",
    tags: [
      "Next.Js",
      "Typescript",
      "Node.Js",
      "Express",
      "Kubernetes",
      "MongoDB",
      "GraphQL",
      "Jest",
    ],
    url: "https://pro.schoolmouv.fr/manuels/",
    image: "/logo-schoolmouv.png",
  },
  {
    title: "PROJECTS.PORTFOLIO.TITLE",
    description:
      "PROJECTS.PORTFOLIO.DESCRIPTION",
    tags: ["Next.Js", "Typescript", "GitHub Actions", "CI/CD"],
    url: "https://github.com/Tbiarneix/portfolio",
    image: "/logo-thomas.png",
  },
];
