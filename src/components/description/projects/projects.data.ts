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
  {
    title: "Thomas Biarneix's Portfolio",
    description:
      "Ce portfolio est l'occasion de vous faire découvrir mon parcours mais aussi de mettre en pratique ce qui me passionne le plus: la création d'interface simple, intuitive et accessible. J'ai utilisé ici des technologies que j'affectionne particulièrement et j'en ai profité pour ajouter quelques fonctionnalités supplémetaires comme la gestion de l'internationalisation, un module d'accessibilité ou encore la gestion des thèmes sombres et lumineux.",
    tags: ["Next.Js", "Typescript", "GitHub Actions", "CI/CD"],
    url: "https://github.com/Tbiarneix/portfolio",
    image: "/assets/logo-schoolmouv.png",
  },
];
