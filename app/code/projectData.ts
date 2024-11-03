import { ProjectData } from "./components/ProjectCard";

export const projectData: ProjectData[] = [
  {
    id: "the-offerhaus",
    title: "The Offer Haus",
    description: "DIY property offers and track every step of the process.",
    assets: [],
    tags: ["Next.js", "Typescript", "Tailwind", "Prisma", "React-Query"],
    inProgress: false,
  },
  {
    id: "chat-app",
    title: "Chat App",
    description:
      "A messaging app for the web. Features include user authentication, real time one-on-one chatting, and an in-app profile picture editor.",
    assets: [
      {
        src: "chat.gif",
        alt: "real time chatting",
      },
      {
        src: "onboarding.gif",
        alt: "in-app photo editor",
      },
    ],
    tags: [
      "React",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Node.js",
      "Firebase",
    ],
    github: "https://github.com/aninishioka/chat-app",
    inProgress: false,
  },
];
