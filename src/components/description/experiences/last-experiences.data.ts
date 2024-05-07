interface ILastsExperiences {
  compagny: string;
  title: string;
  date: string;
  tags: string[];
  url?: string;
}

export const lastsExperiences: ILastsExperiences[] = [
  {
    date: "2023 Now",
    compagny: "Sogeti",
    title: "EXPERIENCES.SOGETI_JOB_TITLE",
    tags: ["React", "Typescript", "AWS"],
    url: "https://www.sogeti.com/",
  },
  {
    date: "2022 2023",
    compagny: "Schoolmouv",
    title: "EXPERIENCES.SCHOOLMOUV_JOB_TITLE",
    tags: ["Next.js", "Node.js"],
    url: "https://www.schoolmouv.fr/",
  },
  {
    date: "2022 2021",
    compagny: "Voltyo",
    title: "EXPERIENCES.VOLTYO_JOB_TITLE",
    tags: ["React", "ReactAdmin"],
    url: "https://www.voltyo.com/",
  },
];
