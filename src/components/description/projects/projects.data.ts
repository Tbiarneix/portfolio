interface IProjects {
  title: string;
  description: string;
  tags: string[];
  url: string;
  image: string;
}

export const projects: IProjects[] = [
  {
    title: "MSN : Les manuels scolaires numériques",
    description:
      "lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
    image: "/assets/logo-schoolmouv.png",
  },
];
