import { ProjectData } from "./components/ProjectCard";

export const projectData: ProjectData[] = [
  {
    id: "the-offerhaus",
    title: "The Offer Haus",
    description:
      "Create real estate offers, negotiate, and track progress on one platform.",
    assets: [
      {
        src: "toh-home.png",
        alt: "The Offer Haus home page",
      },
      {
        src: "toh-dashboard.png",
        alt: "The Offer Haus buyer dashboard",
      },
    ],
    tags: ["Next.js", "Typescript", "Tailwind", "Prisma"],
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
        unoptimized: true,
      },
      {
        src: "onboarding.gif",
        alt: "in-app photo editor",
        unoptimized: true,
      },
    ],
    tags: [
      "React",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Firebase",
    ],
    github: "https://github.com/aninishioka/chat-app",
    inProgress: false,
  },
];
